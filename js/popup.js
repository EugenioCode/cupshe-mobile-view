let imgNode = document.getElementById("qrcode"), pNode = document.getElementById('reviewUrl')
prefix = "https://api.pwmqr.com/qrcode/create/?url=";
chrome.tabs.getSelected(function (w) {
    let url = w.url, img = new Image();
    // https://www.cupshe.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121716244570
    // https://www.cupshe.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121653821530
    chrome.storage.sync.get('theme', function(res) {
        console.log(res)
        // let reviewUrl = `${url}?_ab=0&_fd=0&_sc=1&preview_theme_id=${res.theme.id}`;
        // console.log(reviewUrl)
        // pNode.innerHTML = reviewUrl;
        // img.src = prefix + reviewUrl;
        // img.onload = function () {
        //     imgNode.src = this.src;
        //     imgNode.style.display = "block";
        // }
    });

})
