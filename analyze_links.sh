#!/bin/bash

# Array of HTML files (excluding the specified ones)
declare -A link_count
declare -a all_pages

# Get list of all HTML files to analyze
pages=$(find . -maxdepth 1 -name "*.html" -type f ! -name "template.html" ! -name "test.html" ! -name "index-copy.html" ! -name "RollerShadesOLD.html" | sed 's|^\./||' | sort)

# Initialize counters
for page in $pages; do
    link_count[$page]=0
    all_pages+=("$page")
done

echo "Analyzing internal links..."
echo "=============================================================================="

# For each page, scan all other pages for links to it
for target_page in "${all_pages[@]}"; do
    count=0
    sources=""
    
    # Search all files for links to this page
    for source_file in "${all_pages[@]}"; do
        if [ "$source_file" != "$target_page" ]; then
            # Count occurrences of this page in the source file
            occurrences=$(grep -o "href=[\"'].*$(echo $target_page | sed 's/\./\./')\"" "./$source_file" 2>/dev/null | wc -l)
            
            if [ $occurrences -gt 0 ]; then
                count=$((count + occurrences))
                if [ -z "$sources" ]; then
                    sources="$source_file"
                else
                    sources="$sources, $source_file"
                fi
            fi
        fi
    done
    
    link_count[$target_page]=$count
done

# Now print results
echo ""
echo "PAGES WITH 3+ INTERNAL LINKS (GOOD)"
echo "=============================================================================="

for page in "${all_pages[@]}"; do
    if [ ${link_count[$page]} -ge 3 ]; then
        echo "Page: $page"
        echo "Links: ${link_count[$page]}"
        echo ""
    fi
done

echo ""
echo "PAGES WITH FEWER THAN 3 LINKS (NEED ATTENTION)"
echo "=============================================================================="

for page in "${all_pages[@]}"; do
    if [ ${link_count[$page]} -lt 3 ]; then
        echo "Page: $page"
        echo "Links: ${link_count[$page]}"
        echo ""
    fi
done

