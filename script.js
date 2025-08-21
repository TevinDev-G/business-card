const card = document.getElementById('businessCard');

  // Flip card only when clicking outside social icons
  card.addEventListener('click', e => {
    if (!e.target.closest('.socials')) {
      card.classList.add('flipped');
    }
  });

  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function openApp(el) {
    const webUrl = el.dataset.web;
    const appUrl = el.dataset.app;

    if (isMobile()) {
      const start = Date.now();
      window.location = appUrl;
      setTimeout(() => {
        if (Date.now() - start < 1200) window.location = webUrl;
      }, 800);
    } else {
      window.open(webUrl, "_blank");
    }
  }