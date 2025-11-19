    const pwInput = document.getElementById('password');
    const toggleBtn = document.getElementById('togglePw');

    toggleBtn.addEventListener('click', () => {
      const isHidden = pwInput.type === 'password';
      pwInput.type = isHidden ? 'text' : 'password';
      toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
      pwInput.focus();
    });

    const video = document.querySelector('video');
    video.play().catch(() => {
      console.log("Autoplay blocked — waiting for user interaction.");
      document.body.addEventListener('click', () => video.play(), { once: true });
    });