var section = document.querySelector(".section1")
var cursor  = document.querySelector("#cursor")

section.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "back.out",
    })
})

