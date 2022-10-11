window.addEventListener('load',function(e) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null,{
    file : 'scrpitmerch.js',
  });
});

chrome.runtime.onMessage.addListener(function (val) {
  document.getElementById("txtBarkodM").innerHTML = val[0];
  document.getElementById("merchant").innerHTML = val[1];

});