function watchModal() {
  const playButton = document.querySelector('.play-button');
  const demoButton = document.querySelector('.video-section button.secondary');

  if (
    playButton &&
    (playButton.offsetWidth > 0 || playButton.offsetHeight > 0) &&
    demoButton
  ) {
    playButton.addEventListener('click', openModal);
    demoButton.addEventListener('click', openModal);
  } else {
    window.requestAnimationFrame(watchModal);
  }
}

function openModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="video-container">
      <div class="close-button">
        <span>&times;</span>
      </div>
      <iframe src="https://www.youtube.com/embed/lGCesaaLi4s?autoplay=1" frameborder="0" allowfullscreen></iframe>
    </div>
  `;
  document.body.appendChild(modal);
  closeModal(modal);
}

function closeModal(modal) {
  const closeButton = modal.querySelector('.close-button');
  const video = modal.querySelector('iframe');

  if (modal && closeButton) {
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      video.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
      closeButton.removeEventListener('click', closeModal);
    });
  }
}

watchModal();
