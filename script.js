function kods() {
  let komut = document.querySelectorAll(
    "script[type='application/javascript']"
  );
  let komutArr = Array.from(komut);
  let indexApp = 0;
  for (i = 0; i < komutArr.length; i++) {
    if (
      komutArr[i].innerText.includes("__PRODUCT_DETAIL_APP_INITIAL_STATE__")
    ) {
      indexApp = i;
    }
  }
  let veri = komutArr[indexApp].innerHTML
    .replace("window.__PRODUCT_DETAIL_APP_INITIAL_STATE__=", "")
    .replace(
      "};window.TYPageName=\"product_detail\";window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'reco'});window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'cross'});window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'reviews'});window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'product_desc'});window.dispatchDREvent&&window.dispatchDREvent({type:'done',key:'pdp'});window.dispatchDREvent&&window.dispatchDREvent({type:'replaceWithSelector',selector:'#product-reviews-dr',replaceValue:\"<h2 class='title' id='product-reviews-dr'>\"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.brand.name+\" \"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.name+\" Yorumları</h2>\"});window.dispatchDREvent&&window.dispatchDREvent({type:'replaceWithSelector',selector:'#detail-attributes-dr',replaceValue:\"<h2 class='detail-attributes-title' id='detail-attributes-dr'>\"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.brand.name+\" \"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.name+\" Özellikleri</h2>\"});window.dispatchDREvent&&window.dispatchDREvent({type:'replaceWithSelector',selector:'#other-merchants-dr',replaceValue:\"<div class='pr-omc-tl title' id='other-merchants-dr'>\"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.brand.name+\" \"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.name+\" Fiyatları</div>\"});",
      "}"
    );

  let jsonVeri = JSON.parse(veri).product;

  let objVariants = JSON.parse(veri).product.allVariants;
  var keys = Object.keys(objVariants);
  let barkodlar = "";
  let newReLoadButton = "";
  for (i = 0; i < keys.length; i++) {
    barkodlar += `<div id='copy1'> Barkod: <a class='barcode' style="cursor:pointer" >${objVariants[i].barcode}</a></div><br><hr>`;
    chrome.runtime.sendMessage([document.title, barkodlar, objVariants, jsonVeri]);
  }
}
kods();
