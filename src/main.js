// const img = document.querySelector('#animation img');
// const animTime = 2000; // animation time in milliseconds
// const fps = 60; // frames per second
// const delay = 1000; // delay time in milliseconds

// img.style.opacity = 1;

// // zoom in and fade out the image
// let start;
// function zoom(timestamp) {
//   if (!start) start = timestamp;
//   const progress = timestamp - start;
//   const timeLeft = delay - progress; // calculate the time left before the animation starts
//   if (timeLeft > 0) { // pause the animation
//     window.requestAnimationFrame(zoom);
//   } else {
//     const scale = 0.5 + (progress - timeLeft) / animTime * 0.5; // increase the scale of the image
//     const opacity = 1 - ((progress - timeLeft) / animTime); // fade out the image
//     img.style.transform = `translate(-50%, -50%) scale(${scale})`;
//     img.style.opacity = opacity;
//     if (progress - timeLeft < animTime) {
//       window.requestAnimationFrame(zoom);
//     } else {
//       img.style.display = 'none';
//     }
//   }
// }

// // start the animation
// window.requestAnimationFrame(zoom);

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}