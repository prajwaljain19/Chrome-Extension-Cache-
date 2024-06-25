window.chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'clearCache') {
      const appUrl = message.appUrl;
      clearAppCache(appUrl);
    }
  });
  
  function clearAppCache(appUrl) {
    window.chrome.browsingData.remove({
      origins: [appUrl]
    }, {
      cache: true
    }, () => {
      console.log(`Cache cleared for ${appUrl}`);
    });
  }