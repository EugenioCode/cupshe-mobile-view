var imgNode = document.getElementById("qrcode"),
    prefix = "https://api.pwmqr.com/qrcode/create/?url=";
chrome.tabs.getSelected(function (w) {
    var url = w.url,
        img = new Image();
    img.src = prefix + url;
    img.onload = function () {
        imgNode.src = this.src;
        imgNode.style.display = "block";
    }
})