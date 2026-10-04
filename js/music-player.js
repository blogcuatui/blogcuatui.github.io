

let player;
let isPlaying = false;

window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("youtube-player", {
    videoId: "Ttaf1IYt6F4",
    playerVars: {
      controls: 0,
      playsinline: 1
    },
    events: {
      onStateChange(event) {
        isPlaying = event.data === YT.PlayerState.PLAYING;
        const button = document.getElementById("music-toggle");

        if (button) {
          button.textContent = isPlaying ? "⏸" : "▶";
          button.setAttribute(
            "aria-label",
            isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"
          );
        }
      }
    }
  });
};

const youtubeAPI = document.createElement("script");
youtubeAPI.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(youtubeAPI);

document.addEventListener("turbo:load", function () {
  const button = document.getElementById("music-toggle");

  if (!button || button.dataset.initialized) return;

  button.dataset.initialized = "true";
  button.addEventListener("click", function () {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
  });
});