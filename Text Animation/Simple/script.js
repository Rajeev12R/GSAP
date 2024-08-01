
var main = document.querySelector("#main")
var cursor  = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "back.out",
    })
})

var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline({paused: true})

tl.to("#full", {
    right: 0,
    duration: 0.2
})
tl.from("#full h4", {
    x: '50%',
    stagger: 0.2,
    duration: 0.3,
    opacity: 0
})
tl.from("#full i", {
    opacity: 0,
})

// tl.pause()

menu.addEventListener("click", function () {
    tl.play()
})
cross.addEventListener("click", function () {
    tl.reverse()

})