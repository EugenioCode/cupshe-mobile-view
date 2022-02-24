const theme = window.Shopify ? window.Shopify.theme : {}
function sendMessageToContentScript(data) {
    // 发送消息到content-script
    window.postMessage({cmd: 'shopifyMessage', data: data}, '*')
}
if (theme) {
    sendMessageToContentScript(theme)
}
