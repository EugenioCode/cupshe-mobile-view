chrome.runtime.onMessage.addListener(function(request)
{
    let imgNode = document.getElementById("qrcode"),
        pNode = document.getElementById('reviewUrl')
        prefix = "https://api.pwmqr.com/qrcode/create/?url=";
    chrome.tabs.getSelected(function (w) {
        let url = w.url,
            img = new Image();
        // https://www.cupshe.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121716244570
        // https://www.cupshe.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121653821530
        let reviewUrl = `${url}?_ab=0&_fd=0&_sc=1&preview_theme_id=${request.themeId}`;
        console.log(reviewUrl)
        pNode.innerHTML = reviewUrl;
        img.src = prefix + reviewUrl;
        img.onload = function () {
            imgNode.src = this.src;
            imgNode.style.display = "block";
        }
    })
});
