let theme = window.Shopify ? window.Shopify.theme : {}
function sendMessageToContentScript(data) {
    // 发送消息到content-script
    window.postMessage({cmd: 'shopifyMessage', data: data}, '*')
}
if (theme) {
    sendMessageToContentScript(theme)
}

window.addEventListener("message", function (e) {
    if (e.data.cmd === 'refreshStorage') {
        sendMessageToContentScript(theme)
    }

}, false);
