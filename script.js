gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page1-left",
//         start: "top top",
//         pin: true,
//         scrub: 3,
//         markers: true
//     }
// })
// tl.to("#left-overlay",{
//         transform: `translate(-50%, -50%) scale(2.5)`
// })
var loadingtext = document.querySelector('#count h1');
var load = 0;
var int = setInterval(() => {
    load = load + 1;
    if (load > 99) {
        clearInterval(int)
        console.log(load)
    }
    loadingtext.innerHTML = load
}, 50)



gsap.to("#l1",{
    left: "57%",
    repeat: -1,
    yoyo: true,
    duration: 1.5
})

gsap.to("#l2",{
    right: "53%",
    repeat: -1,
    yoyo: true,
    duration: 1.5
})

gsap.to("#loader",{
    top: "-100%",
    duration: 1,
    delay: 5.3
})

var page1left =  document.querySelector("#page1-left");
var leftoverlay = document.querySelector("#left-overlay");

page1left.addEventListener("mouseenter", function(){
    leftoverlay.style.transform = "translate(-50%, -50%) scale(2.5)";
})


page1left.addEventListener("mouseleave", function(){
    leftoverlay.style.transform = "translate(-50%, -50%) scale(1)";
})


var page1right =  document.querySelector("#page1-right");
var rightoverlay = document.querySelector("#right-overlay");

page1right.addEventListener("mouseenter", function(){
    rightoverlay.style.transform = "translate(-50%, -50%) scale(2.5)";
})


page1right.addEventListener("mouseleave", function(){
    rightoverlay.style.transform = "translate(-50%, -50%) scale(1)";
})


gsap.to(".product",{
    left:"-300%",
    scrollTrigger:{
        trigger:"#page2",
        scroller: "#main",
        start: "top top",
        // pin: true,
        // markers: true,
        scrub: 1,
    }
})

gsap.to("#page2",{
    scrollTrigger:{
        trigger:"#page2",
        scroller: "#main",
        start: "top top",
        pin: true,
        // markers: true,
        scrub: 1,
    }
})



var more = document.querySelectorAll(".section1 h3")
more.forEach(function(dts){
     dts.addEventListener("click",function(){
        gsap.to(".section1",{
            width: "60%",
        })
        gsap.to(".section2",{
            width: "40%",
            opacity: 1
        })
    
        gsap.to(".section1 h1",{
            opacity: 0
        })
        gsap.to(".section1 h2",{
            opacity: 0
        })
        gsap.to(".section1 h3",{
            opacity: 0
        })
        gsap.to(".section1 h4",{
            opacity: 0
        })
        gsap.to(".section1-overlay",{
            opacity: 1,
            zIndex: 99
        })
        console.log("hey")
    })
    
})

var back = document.querySelectorAll("#back-i")
back.forEach(function(dts){
    dts.addEventListener("click",function(){
        gsap.to(".section1",{
            width: "100%",
        })
        gsap.to(".section2",{
            width: "0%",
            opacity: 0
        })
    
        gsap.to(".section1 h1",{
            opacity: 1
        })
        gsap.to(".section1 h2",{
            opacity: 1
        })
        gsap.to(".section1 h3",{
            opacity: 1
        })
        gsap.to(".section1 h4",{
            opacity: 1
        })
        gsap.to(".section1-overlay",{
            opacity: 0,
            zIndex: 0
        })
        // console.log("hey")
    })
})
