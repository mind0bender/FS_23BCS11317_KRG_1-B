// Product Dataset
const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 699 },
  { id: 2, name: "Laptop", category: "electronics", price: 1200 },
  { id: 3, name: "T-Shirt", category: "clothing", price: 25 },
  { id: 4, name: "Jeans", category: "clothing", price: 40 },
  { id: 5, name: "Novel", category: "books", price: 15 },
  { id: 6, name: "Headphones", category: "electronics", price: 99 },
  { id: 7, name: "Jacket", category: "clothing", price: 80 },
  { id: 8, name: "E-Reader", category: "electronics", price: 150 },
];

// DOM Elements
const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const feedbackMessage = document.getElementById("feedbackMessage");

// Render Products
function renderProducts(items) {
  if (items.length === 0) {
    productContainer.innerHTML = "";
    feedbackMessage.classList.remove("hidden");
    return;
  }

  feedbackMessage.classList.add("hidden");
  productContainer.innerHTML = items.map(product => `
    <div class="p-4 bg-white shadow rounded-lg hover:shadow-lg transition">
      <h2 class="font-bold text-lg">${product.name}</h2>
      <p class="text-gray-600 capitalize">${product.category}</p>
      <p class="text-blue-600 font-semibold">$${product.price}</p>
    </div>
  `).join("");
}

// Combined Filter (Category + Search)
function filterProducts() {
  const category = categoryFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = products.filter(p => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(searchTerm);
    return matchCategory && matchSearch;
  });

  renderProducts(filtered);
}

// Event Listeners
categoryFilter.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);

// Initial Load
renderProducts(products);
