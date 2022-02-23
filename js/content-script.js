
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
        chrome.runtime.onMessage.addListener(function (request) {
            console.log(request)

            // chrome.storage.sync.set({theme: request.themeId}, function() {
            //     console.log('保存成功！');
            // });
        });
    }

}, false);