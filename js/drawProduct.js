import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constant.js";
import { params } from "./variable.js";


const products = document.querySelector("#products");
export const drawProduct = () => {
    console.log(params);


    let category = "";
    if (params.category != "") {
        category = `&category=${params.category}`;
    }



    const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;
    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => {
                console.log(item);
                return `         
                    <div class="product__item">
                        <div class="product__image">
                            <img src="${item.thumbnail}" alt="${item.title}" />
                            <div class="product__percent">
                                ${item.discountPercentage}
                            </div>

                        </div>
                        <div class="product__content">
                            <h3 class="produt__title">
                                ${item.title}
                            </h3>
                            <div class="product__meta">
                                <div class="product__price">
                                    ${item.price}$
                                </div>
                                <div class="product__stock">
                                    Rest: ${item.stock}
                                </div>
                            </div>
                        </div>
                    </div>
            `;
            })
            products.innerHTML = htmls.join("");

        })
}