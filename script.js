var crsr = document.querySelector("#cursor");
var icon = document.querySelector("#icon");
var close = document.querySelector("#close");

document.addEventListener("mousemove", function (dets) {
  gsap.to(crsr, {
    x: dets.x,
    y: dets.y,
  });
});

var box = document.querySelector("#box");
var h5 = document.querySelector("#cursor h5");

box.addEventListener("mouseenter", () => {
  crsr.style.width = "80px";
  crsr.style.height = "80px";
  h5.style.opacity = "1";
});
box.addEventListener("mouseleave", () => {
  crsr.style.width = "20px";
  crsr.style.height = "20px";
  h5.style.opacity = "0";
});

icon.addEventListener("mouseenter", function () {
  crsr.style.transform = "scale(3)";
});

icon.addEventListener("mouseleave", function () {
  crsr.style.transform = "scale(1)";
});

icon.addEventListener("click", function (elme) {
  full.style.top = "0%";
  //  icon.style.display = "none"
});

close.addEventListener("click", function (elme) {
  full.style.top = "-100%";
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "slide",
  opacity: "0",
});

function scrollAnimation() {
  document.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to("#text .text-scroll", {
        transform: "translateX(-200%)",
        ease: "none",
        repeat: -1,
        duration: 8,
      });
      gsap.to("#text .text-scroll i", {
        rotate: 180,
      });
    } else {
      gsap.to("#text .text-scroll", {
        transform: "translateX(0%)",
        ease: "none",
        repeat: -1,
        duration: 8,
      });
      gsap.to("#text .text-scroll", {
        rotate: 0,
      });
    }
  });
}
scrollAnimation();

gsap.from(".t1", {
  x: -500,
  opacity: 0,
});

gsap.from(".t2", {
  x: 500,
  opacity: 0,
});

gsap.from(".t3", {
  x: -500,
  opacity: 0,
});

gsap.to("#text-scroll-div", {
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top top",
    scrub: 4,
    // markers: true,
    pin: true,
  },
  opacity: 1,
  bottom: "110%",
  duration: 4,
});




gsap.from("#page2-left", {
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 50%",
    end:"top 100%",
    scrub: 4,
    // markers: true,
    pin: true,
  },
  opacity: 0,
  y:500,
 
});


gsap.from("#page2-right", {
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 50%",
    end:"top 100%",
    scrub: 4,
    // markers: true,
    pin: true,
  },
  opacity: 0,
  y:500,
 
});


gsap.from("#page3 h1", {
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 50%",
    end:"top 100%",
    // scrub: 4,
    // markers: true,
    pin: true,
  },
  opacity: 0,
  x:500,
 
});


gsap.to("#page4-left h1", {
  x: -300,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 60%",
    end: "50%",
    scrub: 4,
    // markers: true,
  },
});

gsap.to("#page4-right h1", {
  x: 150,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 60%",
    end: "50%",
    scrub: 4,
    // markers: true,
  },
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page5",
    scroller: "body",
    start: "top top",
    scrub: 3,
    // markers: true,
    pin: true,
  },
});

tl.to(".p1", {
  bottom: "0%",
});

tl.to(".p2", {
  bottom: "0%",
});

tl.to(".p3", {
  bottom: "0%",
});

tl.to(".p4", {
  bottom: "0%",
});

var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var line3 = document.querySelector("#line3");
var line4 = document.querySelector("#line4");

var show1 = document.querySelector("#show1");
var show2 = document.querySelector("#show2");
var show3 = document.querySelector("#show3");
var show4 = document.querySelector("#show4");

line1.addEventListener("mouseenter", function () {
  show1.style.opacity = "1";
});
line1.addEventListener("mouseleave", function () {
  show1.style.opacity = "0";
});

line2.addEventListener("mouseenter", function () {
  show2.style.opacity = "1";
});
line2.addEventListener("mouseleave", function () {
  show2.style.opacity = "0";
});

line3.addEventListener("mouseenter", function () {
  show3.style.opacity = "1";
});
line3.addEventListener("mouseleave", function () {
  show3.style.opacity = "0";
});

line4.addEventListener("mouseenter", function () {
  show4.style.opacity = "1";
});
line4.addEventListener("mouseleave", function () {
  show4.style.opacity = "0";
});

var page6 = document.querySelector("#page6");
var page2 = document.querySelector("#page2")

document.addEventListener("mousemove", function (dets) {
  page6.addEventListener("mouseenter", function () {
    page6.addEventListener("mouseenter", () => {
      crsr.style.width = "120px";
      crsr.style.height = "120px";
      h5.style.opacity = "1";
    });
  })

  
    page6.addEventListener("mouseleave", () => {
      crsr.style.width = "20px";
      crsr.style.height = "20px";
      h5.style.opacity = "0";
    });
  });
  gsap.to(crsr, {
    x: dets.x,
    y: dets.y,
  });


  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page7",
      start: "top top",
      // markers: true,
      scrub: 2,
      pin: true,
      scroller: "body",
    },
  });
  
  tl.to(".page7part1", {
    bottom: 0,
  })
   




 