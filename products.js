const products =
`[
    {
        "id": "1";
        "title": "tomato";
        "image": "img/tomato.jpg"
        "price": 22
    }
    {
        "id": "2";
        "title": "cucumber";
        "image": "img/cucumber.jpg"
        "price": 22
    }
    {
        "id": "3";
        "title": "coconut";
        "image": "img/coconut.jpg"
        "price": 22
    }
]`;

function renderProducts(products) {
    const productsContainer = document.querySelector('.products2');
    let html = "";
    for (const product of products) {
        html += `<article class="product">
                <img class="product-img" src="${product.image} alt="coconut">
                <a class="product-text"><br>${product.title}</a>
                <a class="pink"><br>${product.price}</a>
                <button class="add-to-cart">Add to cart</button>
            </article>`;
    }
    productsContainer.innerHTML = html;
}

renderProducts(products);