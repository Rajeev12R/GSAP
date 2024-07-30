
gsap.to("#box1", {
    x: 500,
    duration: 2,
    delay: 1,
    rotate: 360,
    background: '#fff',
    borderRadius: "100%",
    // scale: 2
})
gsap.from("#box2", {
    x: 500,
    duration: 2,
    delay: 1,
    backgroundColor: 'purple',
    borderRadius: "100%",
    // scale: 2
})
gsap.from('h1', {
    opacity: 0,
    color: 'teal',
    delay: 0.5,
    stagger: 0.3,
    padding: '4px',
})
gsap.to('#box', {
    x: 500,
    duration: 1,
    delay: 1.5,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    yoyo: true
})

/* 
Timeline

gsap.to('#box4', {
    x: 500,
    duration: 1,
    delay: 1.5,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    backgroundColor: '#8000ff',
    yoyo: true
})
gsap.to('#box5',{
    x: 500,
    duration: 1,
    delay: 2.5,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    yoyo: true,
    backgroundColor: '#3399ff' 
})
gsap.to('#box6',{
    x: 500,
    duration: 1,
    delay: 3.5,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    yoyo: true,
    backgroundColor: '#99ff99' 
})
*/

var tl = gsap.timeline();

tl.to('#box4', {
    x: 500,
    duration: 1,
    delay: 1.5,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    backgroundColor: '#8000ff',
    yoyo: true
})
tl.to('#box5',{
    x: 500,
    duration: 1,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    yoyo: true,
    backgroundColor: '#3399ff' 
})
tl.to('#box6',{
    x: 500,
    duration: 1,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    yoyo: true,
    backgroundColor: '#99ff99' 
})
