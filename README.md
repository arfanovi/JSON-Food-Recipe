***********************************************

fetch('json/biscuits.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  .catch(error => console.error("Error fetching products:", error));



    * Explanation:
    ***** Step - 1: 
    Fetch JSON Data: Initiates a request to fetch a JSON file (biscuits.json) from the server.

    ***** Step - 2:
    Parse JSON Response: Converts the response into a JavaScript object.

    ****** Step - 3:
    Display Products: Uses the fetched data to display products on the webpage.

    ***** Step - 4:
    Error Handling: Logs any errors that occur during the fetch or parse operations.

****************************************************



***************************************************
    ***** Search Mechanism

searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
  displayProducts(filteredProducts);
});

            Explanation:
  *  Purpose: Allows users to search and filter products dynamically based on text input in a search field.

    Steps:
    ******* 1
    Listen for changes in the search input (input event).
    ******* 2
    Get the current value of the search input and convert it to lowercase.
    ******* 3
    Filter the list of products based on whether their names contain the search query.
    ******* 4
    Update the displayed products to show only those matching the search query.
    ************************************************