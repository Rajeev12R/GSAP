gsap.to("#page2 h1", {
    transform: "translateX(-185%)",
    duration: 3,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 3,
        pin: true,
    }

    // Whenever pin property is used we always trigger the parent element Ex- #page2
    
    

})