const searchInput = document.getElementById('search-input');
const productList = document.getElementById('product-list');

let products = [];

// Fetch product data from the JSON file
fetch('json/biscuits.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  .catch(error => console.error("Error fetching products:", error));

// Display products on the page
function displayProducts(products) {
  productList.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('bg-base-300', 'p-4', 'rounded-lg', 'shadow-lg', 'shadow-md', 'text-center');

    

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover mb-4 rounded">
      <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
      <p class="text-gray-600 mb-2">${product.price}</p>
      <p class="text-gray-500 mb-2">${product.company}</p>
      <button class="order-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" data-id="${product.id}">ORDER</button>
    `;

    productList.appendChild(productDiv);

    // Add click event listener to order button
    const orderBtn = productDiv.querySelector('.order-btn');
    orderBtn.addEventListener('click', () => openModal(product));
  });
}

// Function to open modal with product details
function openModal(product) {
  // Create modal HTML dynamically
  const modalHTML = `
    <div id="product-modal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="bg-white rounded-lg p-6 w-2/3">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">${product.name}</h2>
          <button id="close-modal-btn" class="text-gray-600">&times;</button>
        </div>
        <div class="text-center">
          <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-cover mb-4 rounded">
          <p class="text-gray-600 mb-2">${product.description}</p>
          <div class="flex justify-center mb-4">
            <label for="quantity" class="mr-2">Quantity:</label>
            <input type="number" id="quantity" name="quantity" class="border border-gray-300 p-2 rounded-md focus:outline-none" value="1" min="1">
          </div>
          <button class="order-modal-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Order Now</button>
        </div>
      </div>
    </div>
  `;

  // Append modal HTML to the body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Add event listener to close modal button
  const closeModalBtn = document.getElementById('close-modal-btn');
  closeModalBtn.addEventListener('click', closeModal);

  // Add event listener to order button inside modal
  const orderModalBtn = document.querySelector('.order-modal-btn');
  orderModalBtn.addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    alert(`Ordered ${quantity} of ${product.name}`);
    closeModal();
  });
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('product-modal');
  modal.parentNode.removeChild(modal);
}

// Event listener for search input
searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
  displayProducts(filteredProducts);
});




// Function to create and append footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('bg-gray-900', 'text-white', 'text-center', 'py-4');
  
    const footerContent = `
      <p>&copy; ${new Date().getFullYear()} Treats & Eats. All rights reserved.</p>
      <p>Made with ❤️ by Ovi</p>
    `;
  
    footer.innerHTML = footerContent;
  
    // Append footer to the body
    document.body.appendChild(footer);
  }
  
  // Call the createFooter function to generate the footer
  createFooter();
  