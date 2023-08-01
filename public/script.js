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

// Function to handle navbar visibility based on scroll direction
function handleNavbarScroll() {
  var previousScrollPosition = window.scrollY;

  window.addEventListener('scroll', function() {
    var currentScrollPosition = window.scrollY;

    if (currentScrollPosition > previousScrollPosition) {
      // Scrolling down
      // Hide the navbar
      document.getElementById('navbar').classList.add('hidden');
    } else {
      // Scrolling up
      // Show the navbar
      document.getElementById('navbar').classList.remove('hidden');
    }

    previousScrollPosition = currentScrollPosition;
  });
}

// Call the function to handle navbar scroll behavior
handleNavbarScroll();

// Your existing smooth scroll and Intersection Observer code below...
