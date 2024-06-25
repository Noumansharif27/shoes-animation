const tl = gsap.timeline();

gsap.set(".text", { opacity: 0, y: 10 });
gsap.set(".shoe-img", { opacity: 0, y: 10, scale: 1.6 });

tl.from("#left", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut,
})
  .from("#right", {
    width: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
  .to(".text", {
    delay: -2,
    opacity: 1,
    duration: 1.5,
    stagger: 0.1,
    y: 0,
    ease: Expo.easeIn,
  })
  .to(".shoe-img", {
    delay: -1,
    opacity: 1,
    y: 0,
    duration: 1.5,
    scale: 1,
    ease: Expo.easeIn,
  });
