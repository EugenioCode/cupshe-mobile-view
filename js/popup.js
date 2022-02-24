let imgNode = document.getElementById("qrcode"),
    nameNode = document.getElementById('nameNode'),
    idNode = document.getElementById('idNode'),
    linkNode = document.getElementById('linkNode'),
    siteNode = document.getElementById('siteNode')
;
prefix = "https://api.pwmqr.com/qrcode/create/?url=";
chrome.tabs.getSelected(function (w) {
    let url = w.url, img = new Image();
    chrome.storage.sync.get(['theme'], function(res) {
        let themeName = res.theme.name;
        let themeId = res.theme.id;
        let reviewUrl = `${url}?_ab=0&_fd=0&_sc=1&preview_theme_id=${themeId}`;
        linkNode.value = reviewUrl;
        nameNode.innerHTML = themeName;
        idNode.innerHTML = themeId;
        siteNode.innerHTML = new URL(url).host;
        img.src = prefix + encodeURIComponent(reviewUrl);
        img.onload = function () {
            imgNode.src = this.src;
            imgNode.style.display = "block";
        }

        document.getElementById('copyBtn').onclick = function () {
            let copyUrl = `${url}?_ab=0&_fd=0&_sc=1&preview_theme_id=${themeId}`;
            let input = document.getElementById("linkNode");
            input.setSelectionRange(0, 9999);
            input.select();
            if (document.execCommand("Copy")) {
                document.execCommand("Copy")
            }
        }
    });
})


