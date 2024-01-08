gsap.to(".loader",{
    delay : 2,
    y : -20,
    opacity : 0,
    pointerEvents : "none",
    duration: 0.2,
    
})

gsap.from(".page-upper",{
    delay : 2.2,
    y : 20,
    duration: 0.8,
    opacity: 0,
    ease: "back.out(3)"
})

gsap.from(".page-middle",{
    delay : 2.25,
    y : 20,
    duration: 0.8,
    opacity: 0,
    ease: "back.out(3)"
})


gsap.from(".first-container",{
    delay : 2.4,
    y : 20,
    duration: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(3)"
})
