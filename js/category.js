import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constant.js";
import { params } from "./variable.js";
import { drawProduct } from "./drawProduct.js";

const category = document.querySelector("#category");

fetchApi(API_CATEGORY)
    .then(data => {
        let htmls = data.map(item => {
            console.log(item);
            return `
            <div class= "category__item" data-category="${item}">
                ${item}
            </div>
            `;
        })
        
        category.innerHTML = htmls.join("");

        const listCategory = document.querySelectorAll("#category .category__item");
        listCategory.forEach(item => {
            item.addEventListener("click", function(){
                params.category = item.getAttribute("data-category");
                drawProduct();
            })
        })

    })