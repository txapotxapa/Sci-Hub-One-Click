chrome.action.onClicked.addListener((tab) => {
    const currentUrl = tab.url;
  
    // Copy current URL to clipboard
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (url) => navigator.clipboard.writeText(url),
      args: [currentUrl]
    });
  
    // Open Sci-Hub with current URL
    const sciHubUrl = `https://sci-hub.se/${currentUrl}`;
    chrome.tabs.create({ url: sciHubUrl });
  });
  