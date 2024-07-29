const products = [
    "Tree 1", "Tree 1", "Tree 1", "Tree 1",
    "plant 1", "plant 2", "plant 3", "plant 4",
    "Tray", "Soil", "Soil 2", "Spade",
    "Duck 1", "Duck 2", "Duck 3", "Duck 4",
    "Pot 1", "Pot 2", "Pot 3", "Pot 4"
];

const itemsPerPage = 8;
let currentPage = 1;

function renderProducts() {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = ""; // Clear existing products

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProducts = products.slice(start, end);

    for (let product of pageProducts) {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.textContent = product;
        productGrid.appendChild(productItem);
    }

    document.getElementById("pageNumber").textContent = currentPage;
}

document.getElementById("previous").addEventListener("click", function(e) {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
});

document.getElementById("next").addEventListener("click", function(e) {
    e.preventDefault();
    if (currentPage * itemsPerPage < products.length) {
        currentPage++;
        renderProducts();
    }
});

// Initial render
renderProducts();