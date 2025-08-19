setInterval(() => {
  const viewer = document.querySelector('spline-viewer');
  if (viewer && viewer.shadowRoot) {
    const logo = viewer.shadowRoot.querySelector('#logo');
    if (logo) logo.remove();
  }
}, 50); // every 50ms is enough
