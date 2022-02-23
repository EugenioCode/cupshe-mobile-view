chrome.tabs.onUpdated.addListener(function (tabId, info) {
    chrome.pageAction.show(tabId);

});