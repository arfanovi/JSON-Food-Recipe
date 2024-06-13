
const searchInput = document.getElementById('search-input');
const productList = document.getElementById('product-list');

// Custom Array or EmptyArray Dynamically including Product 
let products = [];

// fetch product data from the JSON file Dynamically 
fetch('src/biscuits.json')
.then(res => res.json())
.then(data => {
    products = data;
    displayProducts(products)

}) 
.catch(error => console.error("The product fetching Error", error));



// Dynamic Coding Javascript and Show the product with display 
function displayProducts(products){
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'shadow-md', 'text-center');

        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover mb-4 rounded">
        <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
        <p class="text-gray-600 mb-2">${product.price}</p>
        <p class="text-gray-500 mb-2">${product.company}</p>
        <button class="buy-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy</button>
      `;

      productList.appendChild(productDiv);
    })
}
