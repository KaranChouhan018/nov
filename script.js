function loco(){
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
}
loco()





function canvas(){
    const canvas = document.querySelector("#page2>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./frame27.png
  ./frame29.png
  ./frame31.png
  ./frame33.png
  ./frame35.png
  ./frame37.png
  ./frames39.png
  ./frames42.png
  ./frame44.png
  ./frame46.png
  ./frame48.png
  ./frame50.png
  ./frame52.png
  ./frame54.png
  ./frame55.png
  ./frame57.png
  ./frame59.png
  ./frame61.png
  ./frame63.png
  ./frame65.png
  ./frame67.png
  ./frame70.png
  ./frame72.png
  ./frame74.png
  ./frame76.png
  ./frame78.png
  ./frame80.png
  ./frame82.png
  ./frame83.png
  ./frame85.png
  ./frame87.png
  ./frame89.png
  ./frame91.png
  ./frame93.png
  ./frame95.png
  ./frame98.png
  ./frame100.png
  ./frame102.png
  ./frame104.png
  ./frame106.png
  ./frame108.png
  ./frame110.png
  ./frame111.png
  ./frame113.png
  ./frame115.png
  ./frame117.png
  ./frame119.png
  ./frame121.png
  ./frame123.png
  ./frame126.png
  ./frame128.png
  ./frame130.png
  ./frame132.png
  ./frame134.png
  ./frame136.png
  ./frame138.png
  ./frame139.png
  ./frame141.png
  ./frame143.png
  ./frame145.png
  ./frame147.png
  ./frame149.png
  ./frame151.png
  ./frame154.png
  ./frame156.png
  ./frame158.png
  ./frame160.png
  ./frame162.png
  ./frame164.png
  ./frame166.png
  ./frame167.png
  ./frame169.png
  ./frame171.png
  ./frame173.png
  ./frame175.png
  ./frame177.png
  ./frame179.png
  ./frame182.png
  ./frame184.png
  ./frame186.png
  ./frame188.png
  ./frame190.png
  ./frame192.png
  ./frame194.png
  ./frame195.png
  ./frame197.png
  ./frame199.png
  ./frame201.png
  ./frame203.png
  ./frame205.png
  ./frame207.png
  ./frame210.png
  ./frame212.png
  ./frame214.png
  ./frame216.png
  ./frame218.png
  ./frame220.png
  ./frame222.png
  ./frame223.png
  ./frame225.png
  ./frame227.png
  ./frame229.png
  ./frame231.png
  ./frame233.png
  ./frame235.png
  ./frame238.png
  ./frame240.png
  ./frame242.png
  ./frame244.png
  ./frame246.png
  ./frame246.png
  ./frame248.png
  ./frame250.png
 `;
  return data.split("\n")[index];
}

const frameCount = 112;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page2`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page2",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()
