document.addEventListener('DOMContentLoaded', function () {
    injectCustomJS()
})

function injectCustomJS() {
    let jsPath = 'js/inject.js'
    let scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.src = chrome.extension.getURL(jsPath);
    document.head.appendChild(scriptTag);
}

// 接收inject的消息
window.addEventListener("message", function (e) {
    if (e.data.cmd === 'shopifyMessage') {
        console.log(e.data, 'hahahahah')
        chrome.storage.sync.clear();
        chrome.storage.sync.set({theme: e.data.data});


    }

}, false);