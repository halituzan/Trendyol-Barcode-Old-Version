window.addEventListener("load", function (e) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: "script.js",
  });
});

chrome.runtime.onMessage.addListener(function (val) {
  document.getElementById("txtBarkod").innerHTML = document.title;
  document.getElementById("textAreaID").innerHTML = val[1];
  if (!val[2][0].barcode) {
    document.getElementById(
      "re-Load"
    ).innerHTML = `<p class="fw-bold fs-5">Barkod undefined hatası veriyorsa lütfen <button><a href="https://trendyol.com${val[3].url}" target="_blank">Yenile</a></button> butonuna tıklayın ve tekrar deneyin. Yeni sekmede açılan sayfada barkodu görebilirsiniz.</p>`;
  }
});
