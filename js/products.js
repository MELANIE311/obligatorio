function sortProducts(criteria, array){
    let result = [];
if (criteria === ORDER_ASC_BY_NAME)
{
result = array.sort(funcion(a, b) {
if ( a.name < b.name ){ return -1; }
if ( a.name > b.name ){ return 1; }
    return 0;
});
}els if (criteria === ORDER_DESC_BY_NAME){
    result = array.sort(function(a, b) {
        let aCount = parseInt(a.price);
        let bCount = parseInt(b.price);

        if ( aCount > bCount ){ return -1; }
        if ( aCount < bCount ){ return 1; }
        return 0;
    });
}
return result;}
funcion showProdoctsList(array){
    let htmlContentToAppend = "";
for(let i = 0 ; i <currentproductsArray.length; i++){
{let products = currentProductsArray[i];

if (((minCount==undefined) || (minicount !=undefined &&parseInt(product.productCount)>=minicount))&&
((maxCount ==undefined)||(maxCount !=undefined &&parseInt(product.productCount) <= maxCount))){
{
    htmContentToAppend += '
    <a href="product-info.html" class="list-group.item list-group-item-action">
    <div class="row>
    <div class="col-3">
    <img src="'  + product.imgsrc +'" alt="' + product.description+'"class="img-thumbnail">
    </div>
<div class="col">
<div  class="d-flex w-100 justify-content-betweent">
<h4 class="mb-1">'+product.name+'</h4>
<small class="text-muted">'+ product.currency +  product.cost +' </small> 
</div>
<p class="mb-1">' + product.description + '</p> 
</div>
</div>
</a>
}

document.getElementById("prod-list-contrainer").innerHTML = htmlConentToAppend;

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_URL).THEN(function(resultObj){
        if (resultObj.status=== "ok"){
            sortAndshowProducts(resultObj.data);
    }

});
});
});