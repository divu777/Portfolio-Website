// window.addEventListener('load', () => {
//   const rectangle = document.querySelector('.rectangle');
//   const rectangle2 = document.querySelector('.rectangle2');
//   const rectangle3 = document.querySelector('.rectangle3');
//   const rectangle4 = document.querySelector('.rectangle4');
  
//   setTimeout(() => {
//     rectangle.style.transition = 'width 1s ease';
//     rectangle.style.width = '0';
//     rectangle2.style.transition = 'width 1s ease';
//     rectangle2.style.width = '0';
//     rectangle3.style.transition = 'width 1s ease';
//     rectangle3.style.width = '0';
//     rectangle4.style.transition = 'width 1s ease';
//     rectangle4.style.width = '0';
//   }, 800);

// });
function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var navLinks = document.querySelectorAll('#navbar .nav-links');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    event.preventDefault();
    var targetSection = navLink.getAttribute('href');
    smoothScroll(targetSection, 1000); // Adjust duration as needed
  });
});







var controller=new ScrollMagic.Controller();

var titleTween = gsap.to(".projectHeading", { x: "60%", ease: "power1.out" });
var titleTween2 = gsap.to(".SkillHeading", { x: "-60%", ease: "power1.out" });

var titleScene = new ScrollMagic.Scene({
    triggerElement: ".projectHead",
    duration: "900px",
})
.setTween(titleTween)
.addTo(controller);
var titleScene2 = new ScrollMagic.Scene({
  triggerElement: ".skills",
  duration: "900px",
})
.setTween(titleTween2)
.addTo(controller);

// document.querySelectorAll(".mockups").forEach(function(mockup) {
//   var project = mockup.closest(".cover");
//   var slidein = gsap.from(mockup, { y: "50%" });

//   var slideinMockup = new ScrollMagic.Scene({
//     triggerElement: project,
//     duration: "100%"
//   })
//     .setTween(slidein)
//     .addTo(controller);
// });

// gsap.registerPlugin(ScrollTrigger);

// const elements = document.querySelectorAll(".Descr");

// elements.forEach((element) => {
//   gsap.to(element, {
//     scrollTrigger: {
//       trigger: element,
//       start: "top 20%",
//       end: "80% 100%",
//       pin: true,
//       pinSpacing: false,
//     },
//   });
// });
// }
const logo=document.querySelectorAll('#logo path');
for(let i=0;i<logo.length;i++){
  console.log(`${logo[i].getTotalLength()}`);
}