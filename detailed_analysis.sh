#!/bin/bash

echo "DETAILED LINK ANALYSIS - PAGES NEEDING ATTENTION"
echo "=============================================================================="
echo ""

# Pages that need attention
need_attention=("2025Trends.html" "best-window-treatments-oklahoma-weather.html" "newsletter.html" "why-is-hunter-douglas-so-expensive.html")

for target_page in "${need_attention[@]}"; do
    echo "TARGET PAGE: $target_page"
    echo "---"
    
    count=0
    sources=""
    
    # Get all HTML files
    for source_file in *.html; do
        # Skip excluded files and the target page itself
        if [[ "$source_file" != "template.html" && "$source_file" != "test.html" && "$source_file" != "index-copy.html" && "$source_file" != "RollerShadesOLD.html" && "$source_file" != "$target_page" ]]; then
            # Check if this file contains a link to the target page
            if grep -q "$target_page" "./$source_file" 2>/dev/null; then
                count=$((count + 1))
                sources="$sources
  - $source_file"
            fi
        fi
    done
    
    echo "Currently linked from: $count page(s)"
    if [ $count -gt 0 ]; then
        echo "Sources:$sources"
    else
        echo "Sources: (none - this page is NOT internally linked)"
    fi
    echo ""
done

