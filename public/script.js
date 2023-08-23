window.addEventListener('load', () => {
  const rectangle = document.querySelector('.rectangle');
  const rectangle2 = document.querySelector('.rectangle2');
  const rectangle3 = document.querySelector('.rectangle3');
  const rectangle4 = document.querySelector('.rectangle4');
  
  // Set the initial width of the rectangle to the full page width
 
  
  // Animate the rectangle to shrink to one side
  setTimeout(() => {
    rectangle.style.transition = 'width 1s ease';
    rectangle.style.width = '0';
    rectangle2.style.transition = 'width 1s ease';
    rectangle2.style.width = '0';
    rectangle3.style.transition = 'width 1s ease';
    rectangle3.style.width = '0';
    rectangle4.style.transition = 'width 1s ease';
    rectangle4.style.width = '0';
  }, 800); // Change the duration (in milliseconds) as per your preference
});


// Smooth scroll function
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

// Attach event listener to navigation links
var navLinks = document.querySelectorAll('#navbar .nav-links');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    event.preventDefault();
    var targetSection = navLink.getAttribute('href');
    smoothScroll(targetSection, 1000); // Adjust duration as needed
  });
});

// const observor = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElementsleft = document.querySelectorAll('.hiddenleft');
// hiddenElementsleft.forEach((el) => {
//   observor.observe(el);
// });

// const hiddenElementsright = document.querySelectorAll('.hiddenright');
// hiddenElementsright.forEach((el) => {
//   observor.observe(el);
// });

// Function to handle navbar visibility based on scroll direction
// function handleNavbarScroll() {
//   var previousScrollPosition = window.scrollY;

//   window.addEventListener('scroll', function() {
//     var currentScrollPosition = window.scrollY;

//     if (currentScrollPosition > previousScrollPosition) {
//       // Scrolling down
//       // Hide the navbar
//       document.getElementById('navbar').classList.add('hidden');
//     } else {
//       // Scrolling up
//       // Show the navbar
//       document.getElementById('navbar').classList.remove('hidden');
//     }

//     previousScrollPosition = currentScrollPosition;
//   });
// }

// Call the function to handle navbar scroll behavior
// handleNavbarScroll();

// Your existing smooth scroll and Intersection Observer code below...
var controller=new ScrollMagic.Controller();

// var ourScene=new ScrollMagic.Scene({
//   triggerElement: ".projectsSection"
// })
// .setClassToggle('.projectHead','scroll-In')
// .addIndicators()
// .addTo(controller);
// var titleBlocks = document.querySelectorAll(".titleBlock");
// titleBlocks.forEach(function(titleBlock) {
//   var FadeScene = new ScrollMagic.Scene({
//     triggerElement: titleBlock,
//     reverse:false
//   })
//   .setClassToggle(titleBlock, 'fade-In')
//   .addIndicators()
//   .addTo(controller);
// });




var titleTween = gsap.to(".projectHeading", { x: "100%", ease: "power1.out" });

// Create a ScrollMagic scene
var titleScene = new ScrollMagic.Scene({
    triggerElement: ".projectHead",
    
     // Trigger when the top of the container reaches the top of the viewport
    duration: "100%", // Duration of the animation
})
.setTween(titleTween)
.addIndicators()
.addTo(controller);


// Assuming you have a ScrollMagic controller instance defined as 'controller'

// Create a loop to apply animation to each ".mockups" element
document.querySelectorAll(".mockups").forEach(function(mockup) {
  var project = mockup.closest(".cover"); // Find the closest ancestor with class "cover"
  var slidein = gsap.from(mockup, { y: "50%" });

  // Create a ScrollMagic scene for each ".mockups" element with the project as the trigger element
  var slideinMockup = new ScrollMagic.Scene({
    triggerElement: project, // Use the project as the trigger element
    duration: "100%"
  })
    .setTween(slidein)
    .addIndicators() // This adds indicators for debugging (remove in production)
    .addTo(controller); // Add the scene to the ScrollMagic controller
});


// var tweeenn=gsap.to(".projectOne",{x:"-10%",rotation:"-90",height:"1200px"});

// var titlesBlocks=new ScrollMagic.Scene({
//   triggerElement: ".hit",
//   duration:"900s",
  
// })
// .setTween(tweeenn)
// .addIndicators()
// .addTo(controller);

