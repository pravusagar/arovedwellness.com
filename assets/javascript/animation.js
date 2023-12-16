// used Gsap versiom v-3.12.2

gsap.registerPlugin(ScrollTrigger);

gsap.from(".menu-gsap", {
    duration: .5,
    y: -100,
    opacity: 0,
    ease: "none",
    stagger: ".2",
    delay: .7,
  });
  
  gsap.from(".logo-gsap", {
    duration: .7,
   x:-100,
    opacity: 0,
    ease: "none",
    scale:0,
    delay: .2,
  });

  gsap.from(".logo-social", {
    duration: .5,
//    y:"-200%",
    opacity: 0,
    scale:3,
    ease: "none",
    stagger: ".2",
    delay: 2,
  });
  gsap.from(".banner-gsap", {
    // duration: .5,
    x:"200%",
    ease: "none",
    stagger: ".5",
    delay: 3,
    duration:2.5,
    ease: "expo.out"
  });
  gsap.from(".banner-gsap-left", {
    x:"-200%",
    ease: "none",
    stagger: ".5",
    delay: 3,
    duration:2.5,
    ease: "expo.out"
  });

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 400) // adjust smoothness of mouse scroll
})

gsap.ticker.lagSmoothing(0)
