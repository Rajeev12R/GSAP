
gsap.from("#container1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    borderRadius: 360
    
})

gsap.from("#container2 #box", {
    scale: 0,
    rotate: 360,
    delay: 1,
    duration: 2,
    borderRadius: 360,
    // scrollTrigger: "#container2 #box" Easy way
    scrollTrigger: {
        trigger: "#container2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub: 3
        
    }
})

gsap.from("#container3 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    borderRadius: 360,
    // scrollTrigger: "#container3 #box"   Easy way not in depth
    
    scrollTrigger: {
        trigger: "#container3 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        pin: true
        
    }
})