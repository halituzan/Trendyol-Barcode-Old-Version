window.addEventListener('load',function(e) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null,{
    file : 'script.js',
  });
});

chrome.runtime.onMessage.addListener(function (val) {
  document.getElementById("txtBarkod").innerHTML = document.title;
  document.getElementById("textAreaID").innerHTML = val[1];
});


