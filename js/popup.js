let imgNode = document.getElementById("qrcode"),
    nameNode = document.getElementById('nameNode'),
    idNode = document.getElementById('idNode'),
    linkNode = document.getElementById('linkNode');
prefix = "https://api.pwmqr.com/qrcode/create/?url=";
chrome.tabs.getSelected(function (w) {
    console.log(w)
    let url = w.url, img = new Image();
    chrome.storage.local.get(['theme'], function(res) {
        // let siteName = res.theme.site
        let themeName = res.theme.name;
        let themeId = res.theme.id;
        let reviewUrl = `${url}?_ab=0&_fd=0&_sc=1&preview_theme_id=${themeId}`;
        linkNode.value = reviewUrl;
        nameNode.innerHTML = themeName;
        idNode.innerHTML = themeId;
        // siteName.innerHTML = siteName;
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


