// Mobile Navigation top of pages

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// Project page cards with hover affect

// const boxes = document.querySelectorAll('.box')
// window.addEventListener('scroll', checkBoxes)
//     checkBoxes()

//     function checkBoxes() {
//         const triggerBottom = window.innerHeight / 5 * 4
//         boxes.forEach(box => {
//             const boxTop = box.getBoundingClientRect().top
//             if(boxTop < triggerBottom) {
//                 box.classList.add('show')
//             } else {
//                 box.classList.remove('show')
//             }
//         })
//     }

//     // Move boxes up
//     const boxes2 = document.querySelectorAll('.box2')
//     window.addEventListener('scroll', checkBoxes2)
//         checkBoxes2()
    
//         function checkBoxes2() {
//             const triggerBottom = window.innerHeight / 5 * 4
//             boxes2.forEach(box2 => {
//                 const boxTop2 = box2.getBoundingClientRect().top
//                 if(boxTop2 < triggerBottom) {
//                     box2.classList.add('show')
//                 } else {
//                     box2.classList.remove('show')
//                 }
//             })
//         }

//         //  Scroll trigger for moving boxes
//     gsap.registerPlugin(ScrollTrigger);
//     var tl = gsap.timeline();

//     tl.from('.moving-img' , {
//       y: '-30%',
//       opacity: 0,
//       duration: 2,
//       ease: Power4.easeOut
//     })
//     tl.from('.stagger1' , {
//       opacity: 0,
//       y: -50,
//       stagger: .3,
//       ease: Power4.easeOut,
//       duration: 2
//     },"-=1.5" )
