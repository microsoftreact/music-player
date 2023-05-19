"use strict";

let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "./media/pause.png";
  } else {
    mySong.pause();
    icon.src = "./media/play.png";
  }
};
