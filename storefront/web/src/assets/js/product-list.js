
let exports = {}
for (let i = 0; i < dataM.length; i++) {
    //buildProductListItemTemplate("product-list-data-container", "", dataM[i], "")
    //console.log(dataM[i])
    //console.log(dataM[i]['title'])
    //console.log(dataM[i].title)
}

let buildProductPreview = async(mainContainer, mainId, renderData, viewType) => {

    mainContainer = document.getElementById(mainContainer)
        // ::::::: id, class, content
    let previewProductDetailsContainer = elementFunction.divFunction("product-preview-details-container", "featured-products-style", null)
    previewProductDetailsContainer.setAttribute("style", "width:160px; height:240px; cursor:pointer;  margin-top:10px; margin-left:8px;  margin-right:4px; float:left; ")
    let productAvatarContainer = elementFunction.divFunction("product-avatar-container", "", null)
    productAvatarContainer.setAttribute("style", " width:160px; height:200px; float:left; ")
    let productAvatar = elementFunction.imgFunction("product-avatar", "", avatar)
    productAvatar.setAttribute("style", " width:100%; height:150px; float:left; ")
    let productDetailsContainer = elementFunction.divFunction("product-details-container", "", "", "")
    productDetailsContainer.setAttribute("style", " width:176px; height:180px; float:left; position:absolute;  ")
    let productTitle = elementFunction.divFunction("product-title", "", "", "")
    productTitle.setAttribute("style", " height:auto; width:156px; float:left; border-radius:10px; font-size:14px; padding:3px; margin-top:160px; color:#404040; font-size:11px; font-family:Montserrat-Regular; font-size:11px; ")
    let productPrice = elementFunction.divFunction("product-price", "", "", "")
    productPrice.setAttribute("style", " height:24px; width:80px; float:left; border-radius:10px; font-size:14px; padding:3px; margin-top:2px; color:#000000; font-size:12px; font-family:Montserrat-Bold; font-size:16px; ")
    let productPriceSign = elementFunction.spanFunction("product-price-sign", "", "", "")
    productPriceSign.setAttribute("style", "font-size:11px; font-family:Montserrat-Regular; margin-right:2px; ")
    previewProductDetailsContainer.appendChild(productAvatarContainer)
    productAvatarContainer.appendChild(productAvatar)
    previewProductDetailsContainer.appendChild(productDetailsContainer)
    productDetailsContainer.appendChild(productTitle)
    productDetailsContainer.appendChild(productPrice)
    productPrice.appendChild(productPriceSign)
    productPriceSign.html(productPrice.innerHTML + " " + price)
    mainContainer.appendChild(previewProductDetailsContainer)
}
//getAllProducts("gll_product", "requestType", {}, "files")

