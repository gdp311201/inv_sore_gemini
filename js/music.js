/**
 * js/music.js
 * Handler Musik & Audio Player
 */

export function setupMusic() {
  const audio = document.getElementById('wedding-audio');
  const toggleBtn = document.getElementById('music-toggle');

  function playMusic() {
    if (audio) {
      audio.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }

  function toggleMusic() {
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      if (toggleBtn) toggleBtn.classList.remove('paused');
    } else {
      audio.pause();
      if (toggleBtn) toggleBtn.classList.add('paused');
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMusic);
  }

  return { playMusic, toggleMusic };
}
