import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImages = document.querySelectorAll(".image-rotate-in");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

animatedImages.forEach((image) => {
    const imageOffsetTop = image.imageOffsetTop;
    const imageHeight = image.offsetHeight;
    // const animatedImageTimeline = new ScrollTimeline({
    //     scrollOffSets: [
    //         { target: image, edge: "end", threshold: "0" },
    //         { target: image, edge: "start", threshold: "0" },
    //     ],
    // });

    image.animate(
        {
            transform: [
              "perspective(1000px) rotateX(90deg)",
              "perspective(1000px) Rotate(0)",
            ],
            opacity: ["0", "1"],
        },
        {
            duration: 1,
            easing: "linear",
            timeline: new ScrollTimeline({
                // scrollOffSets: [
                //     { target: image, edge: "end", threshold: "0" },
                //     { target: image, edge: "start", threshold: "0" },
                // ],
                scrollOffsets: [
                    CSS.px(imageOffsetTop + imageHeight - window.innerHeight - 2000),
                    CSS.px(imageOffsetTop + 9000),
                    
                ]
            }),
        }
    );
});




scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

