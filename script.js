var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-125+"px"
    blur.style.top=dets.y-125+"px"
})
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end: "top -15%",
        scrub: 1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -15%",
        end:"top -70%",
        scrub: 1

    }
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent" 
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #b5b5ca"
        crsr.style.backgroundColor = "#0000ff" 
    })
})

gsap.from("#aboutus img, #aboutus-in",{
    y:50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.4,
    scrollTrigger: {
        trigger:"#aboutus",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})

gsap.from(".card",{
    y:50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.4,
    scrollTrigger: {
        trigger:"#aboutus",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 65%",
        scrub: 3
    }
})
