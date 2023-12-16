window.addEventListener('load', () => {
  const rectangle = document.querySelector('.rectangle');
  const rectangle2 = document.querySelector('.rectangle2');
  const rectangle3 = document.querySelector('.rectangle3');
  const rectangle4 = document.querySelector('.rectangle4');

  setTimeout(() => {
    gsap.to(rectangle, { width: 0, duration: 1, ease: 'power1.out' });
    gsap.to(rectangle2, { width: 0, duration: 1, ease: 'power1.out' });
    gsap.to(rectangle3, { width: 0, duration: 1, ease: 'power1.out' });
    gsap.to(rectangle4, { width: 0, duration: 1, ease: 'power1.out' });
  }, 800);
});

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

function applyStylesBasedOnScreenSize() {
  const styleLink = document.getElementById('style-link');

  // Check the current screen width
  if (window.innerWidth < 600) {
    styleLink.href = 'public/mobile.css';
  } else {
    styleLink.href = 'public/style.css';
  }
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced application of styles when the page loads and on window resize
const debouncedApplyStyles = debounce(applyStylesBasedOnScreenSize, 200);
window.addEventListener('resize', debouncedApplyStyles);

if (window.innerWidth > 600) {
  var controller = new ScrollMagic.Controller();

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

  document.querySelectorAll(".mockups").forEach(function(mockup) {
    var project = mockup.closest(".cover");
    var slidein = gsap.from(mockup, { y: "50%" });

    var slideinMockup = new ScrollMagic.Scene({
      triggerElement: project,
      duration: "100%"
    })
      .setTween(slidein)
      .addTo(controller);
  });

  gsap.registerPlugin(ScrollTrigger);

  const elements = document.querySelectorAll(".Descr");

  elements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 20%",
        end: "80% 100%",
        pin: true,
        pinSpacing: false,
      },
    });
  });
} else {
  var controller = new ScrollMagic.Controller();

  var titleTween = gsap.to(".projectHeading", { x: "60%", ease: "power1.out" });
  var titleTween2 = gsap.to(".SkillHeading", { x: "-80%", ease: "power1.out" });
  var photoSlide = gsap.to(".photos", { x: "-60%", ease: "power1.out" });

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

  document.querySelectorAll(".photos").forEach(function(mockup) {
    var projectL = mockup.closest(".info");
    var Slidingg = new ScrollMagic.Scene({
      triggerElement: projectL,
      duration: "600px",
    })
      .setTween(photoSlide)
      .addTo(controller);
  });

  gsap.registerPlugin(ScrollTrigger);

  const elements = document.querySelectorAll(".Descr");

  elements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 20%",
        end: "80% 100%",
        pin: true,
        pinSpacing: false,
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const popupButton = document.getElementById("popupButton");
    const popupMenu = document.getElementById("navbar");

    // Function to open the popup menu
    function openMenu() {
      popupMenu.style.display = "block";
    }

    // Function to close the popup menu
    function closeMenu() {
      popupMenu.style.display = "none";
    }

    // Event listener to open the menu on button click
    popupButton.addEventListener("click", openMenu);

    // Event listener to close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!popupButton.contains(event.target) && !popupMenu.contains(event.target)) {
        closeMenu();
      }
    });
  });
}
