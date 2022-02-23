const theme = window.Shopify ? window.Shopify.theme : {}
function sendMessageToContentScript(data) {
    window.postMessage({cmd: 'shopifyMessage', data: data}, '*')
}
if (theme) {
    sendMessageToContentScript(theme)
}
