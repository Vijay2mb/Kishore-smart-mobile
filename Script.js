function searchProducts() {
  alert('Search functionality coming soon!');
}

function addToCart(productName) {
  alert(productName + ' added to cart!');
}

function filterCategory(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    if (category === 'all' || product.dataset.category === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });

  document.querySelectorAll('.category-btn').forEach(btn =>
    btn.classList.remove('active')
  );
  event.target.classList.add('active');
}
