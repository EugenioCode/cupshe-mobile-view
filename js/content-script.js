
document.addEventListener('DOMContentLoaded', function(){
    injectCustomJS()
})

function injectCustomJS () {
    let jsPath = 'js/inject.js'
    let scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.src = chrome.extension.getURL(jsPath);;
    document.head.appendChild(scriptTag);
}

window.addEventListener("message", function(e)
{
    if(e.data.cmd === 'shopifyMessage') {
        chrome.runtime.sendMessage({themeId: e.data.data});
    }

}, false);