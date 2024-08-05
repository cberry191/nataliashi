// video loop

const videoPlayer = document.getElementById("video-yoga");

const yogaPlayList = [
  "./assets/video/nat-01.mp4",
  "./assets/video/nat-02.mp4",
  "./assets/video/nat-03.mp4",
];

let currentVideoIndex = 0;

const playNextVideo = () => {
  videoPlayer.src = yogaPlayList[currentVideoIndex];
  videoPlayer.play();
};

videoPlayer.addEventListener("ended", () => {
  currentVideoIndex++;
  if (currentVideoIndex >= yogaPlayList.length) {
    currentVideoIndex = 0;
  }
  playNextVideo();
});

playNextVideo();

// image slideshow

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
