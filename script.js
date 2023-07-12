// Smooth scroll function
function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.scrollY || window.pageYOffset;
  var distance = targetPosition - startPosition;
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
var navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    event.preventDefault();
    var targetSection = navLink.getAttribute('href');
    smoothScroll(targetSection, 1000); // Adjust duration as needed
  });
});

const observor = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElementsleft = document.querySelectorAll('.hiddenleft');
hiddenElementsleft.forEach((el) => {
  observor.observe(el);
});

const hiddenElementsright = document.querySelectorAll('.hiddenright');
hiddenElementsright.forEach((el) => {
  observor.observe(el);
});
