
let tl = gsap.timeline();
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#client-container",
        scroller:"body",
        start:" top center",
        end:" top -50%",
        scrub:2
    }
})

// Page 1 Animation
function pageOneAnima(){
    tl.from("nav h1,nav h4, nav button,#show-close i",{
    y:-30,
    opacity:0,
    duration:0.1,
    stagger:0.3,
    
});
tl.from("#center-part1 h1, #center-part1 p, #center-part1 button",{
    x:-300,
    opacity:0,
    duration:0.5,
    stagger:0.3,  
})
tl.from("#center-part2 img ",{
    x:300,
    opacity:0,
    duration:0.5,  
},"-=0.2")//start animation after loading with delay of  half second
gsap.from("#client-container img",{
    opacity:0,
    x:-300,
    duration:0.6,
})
}
pageOneAnima();
// page 2 Animation
tl2.from("#service-row h2,#service-row p",{
    y:-100,
    opacity:0,
    duration:0.5,
})
tl2.from(".left1",{
     x:-100,
    opacity:0,
    duration:0.5,
    
},"left-ani");
tl2.from(".left2",{
     x:-100,
    opacity:0,
    duration:0.5,
    
},"left-ani");
tl2.from(".right1",{
     x:100,
    opacity:0,
    duration:0.5,
},"right-ani");
tl2.from(".right2",{
     x:100,
    opacity:0,
    duration:0.5,
},"right-ani");

tl2.from("#gray-message-sec",{
     x:-100,
    opacity:0,
    duration:0.5,
});
tl2.from("#case-study",{
     x:-100,
    opacity:0,
    duration:0.5,
});
tl2.from("#blkMsg",{
     y:100,
    opacity:0,
    duration:0.5,
});

