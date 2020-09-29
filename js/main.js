import { url } from "./settings/api.js";

const productUrl = url + "products";

(async function() {

    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<div class="product"id=${product.id}">
                                        <h4>${product.name}</h4>
                                        <p>Price: ${product.price}</p>
                                    </div>`;
        })
    }

    catch(error) {
        console.log(error);
    }
})();