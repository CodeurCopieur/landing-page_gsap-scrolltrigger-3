gsap.registerPlugin(ScrollTrigger);

this.initScrollTrigger();

function initScrollTrigger() {
  gsap.to(".menu, .nav-list, .bottom", {
    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: ".home",
      scrub: true,
      //markers: true,
      start: '60% 60%',
      end: '70% 30%'
    }
  });

  gsap.to(".heading-main", {
    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: ".two",
      scrub: true,
      //markers: true,
      start: '70% 60%',
      end: '85% 30%'
    }
  });


  gsap.to(".preview", {
    scrollTrigger: {
      trigger: ".preview",
      toggleClass:'active',
      scrub: true,
      start: '50% 80%',
      end: '85% 20%'
    }
  });
}