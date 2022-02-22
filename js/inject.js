const id = window.Shopify ? window.Shopify.theme.id : ''
function sendMessageToContentScript(data) {
    window.postMessage({cmd: 'shopifyMessage', data: data}, '*')
}
if (id) {
    sendMessageToContentScript(id)
}
