(() => {
  // Redirect urls with the unwanted pattern to their pdf equivalent
  function redirectIfNeeded() {
    const url = window.location.href;
    const newUrl = url.replace(/\/doi\/(epdf|epub|reader)\//, '/doi/pdf/');
	
	// If there is a new url, redirect the browser there
    if (newUrl !== url) {
      window.location.replace(newUrl);
    }
  }

  // Run on initial page load
  redirectIfNeeded();

  // Monitor for single-page app (SPA) url changes that change url without a full reload
  let lastUrl = window.location.href;
  new MutationObserver(() => {
    const currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      redirectIfNeeded();
    }
  }).observe(document, {subtree: true, childList: true});
})();
