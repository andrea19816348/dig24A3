/* Get GSAP scrolltrigger plugin */
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Declare panels array */
let sections = gsap.utils.toArray(".panel");

/* scroll to section */
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: "+=3500"
  }
});

/*-------------------------PANEL 1 HOME PAGE----------------------------*/


/* Main navigation link click event */
document.querySelectorAll(".anchor").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href"));
    console.log("clicked", targetElem);
    //CONSOLE LOG WORKS BUT ALL OPTIONS I HAVE TRIED WON'T WORK ALONGSIDE OF SCROLLTRIGGER//
    
  })});



// detect accessibility switch change 
let accessibleSwitch = document.querySelector('#accessibility-switch')
accessibleSwitch.addEventListener('sl-change', () => {
    if(accessibleSwitch.checked === true){
        accessibleMode()
    }
    else{
        regularMode()
    }
});

//define accessible mode and create gsap timeline to animate elements
function accessibleMode () {
    const tl = new TimelineMax({delay:0.5})
    tl.to('.home-bg.regular', {opacity: 0, duration: 0.5})
    .to('.home-bg.accessible', {opacity: 1, duration: 0.5}, '-=0.5')
    .to('#question-mark-regular', {opacity: 0}, '-=0.5')
    .to('#question-mark-accessible', {opacity: 1}, '-=0.5')
    .to('.nav-regular a', {opacity: 0}, '-=0.5')
    .to('.nav-accessible a', {opacity: 1}, '-=0.5')
    .to('.about-bg.regular', {opacity: 0}, '-=0.5')
    .to('.about-bg.accessible', {opacity: 1}, '-=0.5')
    .to('.line-area.regular', {opacity: 0}, '-=0.5')
    .to('.line-area.accessible', {opacity: 1}, '-=0.5')
    .to('.projects-bg.regular', {opacity: 0}, '-=0.5')
    .to('.projects-bg.accessible', {opacity: 1}, '-=0.5')
    .to('.services-bg.regular', {opacity: 0}, '-=0.5')
    .to('.services-bg.accessible', {opacity: 1}, '-=0.5')
    .to('.contact-bg.regular', {opacity: 0}, '-=0.5')
    .to('.contact-bg.accessible', {opacity: 1}, '-=0.5')
};

//define regular mode and create gsap timeline to animate elements
function regularMode () {
     const tl = new TimelineMax({delay:0.5})
     tl.to('.home-bg.accessible', {opacity: 0, duration: 0.5})
     .to('.home-bg.regular', {opacity: 1, duration: 0.5}, '-=0.5')
     .to('#question-mark-accessible', {opacity: 0}, '-=0.5')
     .to('#question-mark-regular', {opacity: 1}, '-=0.5')
     .to('.nav-accessible a', {opacity: 0}, '-=0.5')
     .to('.nav-regular a', {opacity: 1}, '-=0.5')
     .to('.about-bg.accessible', {opacity: 0}, '-=0.5')
     .to('.about-bg.regular', {opacity: 1}, '-=0.5')
     .to('.line-area.accessible', {opacity: 0}, '-=0.5')
     .to('.line-area.regular', {opacity: 1}, '-=0.5')
     .to('.projects-bg.accessible', {opacity: 0}, '-=0.5')
     .to('.projects-bg.regular', {opacity: 1}, '-=0.5')
     .to('.contact-bg.accessible', {opacity: 0}, '-=0.5')
     .to('.contact-bg.regular', {opacity: 1}, '-=0.5')
};

/*-------------------------PANEL 3 EXPERIENCE PAGE----------------------------*/

//animate timeline when tween reaches left center
sections.forEach(section => {
  let timelineAnimation = section.querySelectorAll('.animation')

  gsap.from(timelineAnimation, {
    y: -130,
    delay: 2,
    opacity: 0,
    duration: 2,
    stagger: 2,
    scrollTrigger: {
      trigger: section, 
      containerAnimation: scrollTween,
      start: "left center"
    }
  })
});


/*-------------------------PANEL 4 PROJECTS PAGE----------------------------*/

//image gallery animation
var splide = new Splide( '.splide', {
  direction: 'ttb',
  height: '40rem',
  type: 'loop',
  arrows: true
});

splide.mount();

/*-------------------------PANEL 6 CONTACT PAGE----------------------------*/

//dialog animation
const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());


//Back to home button

const toHome = document.getElementById("back-to-home");
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
  }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




 // SVG animation
var wrapper = document.querySelector('.wrapper svg')

function draw() {
  wrapper.classList.add('active')
}

// Add handlers to our buttons
btnDraw.addEventListener('click', draw, false)
btnErase.addEventListener('click', erase, false)

// Play draw animation once
setTimeout(draw, 300)