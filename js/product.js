import { drawProduct } from "./drawProduct.js";
import { inputSearch, params } from "./variable.js";
import { buttonSearch,filter, pagiNext, pagiNumber, pagiPrev } from "./variable.js";
drawProduct();



const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function(){
    search();
});

inputSearch.addEventListener("keydown", function(e){
    if(e.key=== "Enter"){
        search();
    }
});


filter.addEventListener("change", function(e) {
    console.log(e.target.value);
    switch (e.target.value) {
        case "default":
            params.sort = "";
            params.order = "";
            break;
        
        case "cheap-to-expensive":
            params.sort = "price";
            params.order = "asc"
            break;
        
        case "expensive-cheap-to":
            params.sort = "price";
            params.order = "dsc"
            break;
        
        case "discount":
            params.sort = "discountPercentage";
            params.order = "asc"
            break;
    }
    drawProduct();
});


pagiPrev.addEventListener("click", function(){
    if(params.page > 1) {
        params.page = params.page - 1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
});

pagiNext.addEventListener("click", function(){
    params.page = params.page + 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
});