function merchkods() {
    let komut = document.querySelectorAll("script[type='application/javascript']");
    let komutArr = Array.from(komut);
    let indexApp = 0;
    for (i = 0; i < komutArr.length; i++) {
        if (komutArr[i].innerText.includes("__PRODUCT_DETAIL_APP_INITIAL_STATE__")) {
            indexApp = i;
        }
    }
    let veri = komutArr[indexApp].innerHTML.replace("window.__PRODUCT_DETAIL_APP_INITIAL_STATE__=", "").replace("};window.TYPageName=\"product_detail\";window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'reco'});window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'cross'});window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'reviews'});window.dispatchDREvent&&window.dispatchDREvent({type:'wait',key:'product_desc'});window.dispatchDREvent&&window.dispatchDREvent({type:'done',key:'pdp'});window.dispatchDREvent&&window.dispatchDREvent({type:'replaceWithSelector',selector:'#product-reviews-dr',replaceValue:\"<h2 class='title' id='product-reviews-dr'>\"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.brand.name+\" \"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.name+\" Yorumları</h2>\"});window.dispatchDREvent&&window.dispatchDREvent({type:'replaceWithSelector',selector:'#detail-attributes-dr',replaceValue:\"<h2 class='detail-attributes-title' id='detail-attributes-dr'>\"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.brand.name+\" \"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.name+\" Özellikleri</h2>\"});window.dispatchDREvent&&window.dispatchDREvent({type:'replaceWithSelector',selector:'#other-merchants-dr',replaceValue:\"<div class='pr-omc-tl title' id='other-merchants-dr'>\"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.brand.name+\" \"+window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.name+\" Fiyatları</div>\"});", "}");
    var obj = JSON.parse(veri).product.otherMerchants;
    var objMerch = JSON.parse(veri).product;

var merchants =`
<p id='copy'>Dükkan Adı: <a href='https://www.trendyol.com/sr?mid=${objMerch.merchant.id}' target='_blank'> ${objMerch.merchant.deliveryProviderName} </a> </p><p id='fyt'> | <a id='puan'>${objMerch.merchant.sellerScore}</a><a style='float: right;'> <strike>${objMerch.price.originalPrice.text}</strike> |  <strike>${objMerch.price.sellingPrice.text}</strike> | <abbr title="Şu anki satış fiyatı" style="color:rgb(11, 193, 92);text-decoration:none">${objMerch.price.discountedPrice.text}</abbr></a></p><hr>
`;
var keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++){
    if (obj[i].merchant.sellerScore === undefined) {
        obj[i].merchant.sellerScore = "Puansız"
    }
    merchants +=`<p id='copy'>Dükkan Adı: <a href='https://www.trendyol.com/sr?mid=${obj[i].merchant.id}' target='_blank'> ${obj[i].merchant.name} </a> </p><p id='fyt'> | <a id='puan'>${obj[i].merchant.sellerScore}</a><a style='float: right;'> <strike>${obj[i].price.originalPrice.text}</strike> |  <strike>${obj[i].price.sellingPrice.text}</strike> | <abbr title="Şu anki satış fiyatı" style="color:rgb(11, 193, 92);text-decoration:none">${obj[i].price.discountedPrice.text}</abbr></a></p><hr>`;
}
chrome.runtime.sendMessage([document.title, merchants]);
}

merchkods();

