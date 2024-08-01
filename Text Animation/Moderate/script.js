function breakText() {
    var h1 = document.querySelector("h1")

    var h1text = h1.textContent

    var splittedText = h1text.split("")

    var halfValue = Math.floor(splittedText.length/2)

    var clutter = ""


    splittedText.forEach(function (element, index) {
        if(index < halfValue){
            clutter += `<span class = "small-index">${element}</span>`
        }
        else{
            clutter += `<span class = "big-index">${element}</span>`
        }
    })
    h1.innerHTML = clutter

}
breakText()

gsap.from("h1 .small-index", {
    y: 60,
    stagger: 0.15,
    duration: 0.7,
    opacity: 0,
    ease: "elastic.out(1.5,1)",
    
})
gsap.from("h1 .big-index", {
    y: 60,
    stagger: -0.15,
    duration: 0.7,
    opacity: 0,
    ease: "elastic.out(1.5,1)",
})