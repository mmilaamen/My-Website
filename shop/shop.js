const products = [
  {
    id: "001",
    name: "Diamond Stud Earrings",
    category: "Earrings",
    material: "18K Gold",
    gemstone: "Diamond",
    price: 299.99,
    stockStatus: "In Stock",
    rating: 4.8,
    description: "Elegant diamond stud earrings set in 18K gold for a timeless look.",
    image: "./images/Img-1.jpg",
    button: "Add to basket"
  },
  {
    id: "002",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-1.jpg",
    button: "Add to basket"
  },

  {
    id: "003",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-1.jpg",
    button: "Add to basket"
  },
  {
    id: "004",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-1.jpg",
    button: "Add to basket"
  },
  {
    id: "005",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-1.jpg",
    button: "Add to basket"
  },
  {
    id: "006",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-2.jpg",
    button: "Add to basket"
  },
  {
    id: "007",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-2.jpg",
    button: "Add to basket"
  },
  {
    id: "008",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-2.jpg",
    button: "Add to basket"
  },
  {
    id: "009",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-2.jpg",
    button: "Add to basket"
  },
  {
    id: "010",
    name: "Sapphire Pendant",
    category: "Necklaces",
    material: "Sterling Silver",
    gemstone: "Sapphire",
    price: 189.99,
    stockStatus: "Low Stock",
    rating: 4.5,
    description: "Classic sapphire pendant on a silver chain, perfect for a sophisticated touch.",
    image: "./images/Img-2.jpg",
    button: "Add to basket"
  },
  // Add more products here...
];

const customer = {
  userName: 'Mila',
  password: 'mila1234',
  email: 'mila@gmail.com',
  location: 'rosen str.36, 95615',
  cart: [],
  addToCart: function(product){
this.cart.push(product)
  }
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;
  img.className = 'product-image';

  const title = document.createElement('h1');
  title.textContent = product.name;

  const category = document.createElement('p');
  category.innerHTML = `<strong>Category:</strong> ${product.category}`;

  const material = document.createElement('p');
  material.innerHTML = `<strong>Material:</strong> ${product.material}`;

  const gemstone = document.createElement('p');
  gemstone.innerHTML = `<strong>Gemstone:</strong> ${product.gemstone}`;

  const price = document.createElement('h3');
  price.innerHTML = `<strong>Price:</strong> $${product.price.toFixed(2)}`;

  const stockStatus = document.createElement('p');
  stockStatus.innerHTML = `<strong>Stock Status:</strong> ${product.stockStatus}`;

  const rating = document.createElement('p');
  rating.innerHTML = `<strong>Rating:</strong> ${product.rating} ⭐`;

  const description = document.createElement('p');
  description.textContent = product.description;



  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(rating);
  if (product.button) {
    const button = document.createElement('button');
    button.className = 'add-to-basket-btn';
    button.innerHTML = product.button;
    button.addEventListener("click", () => {addItemToCart(product)});
    button.onclick = () => alert(`${product.name} added to basket!`);
    card.appendChild(button);
  }



  return card;
}

function displayProducts(products) {
  const grid = document.getElementById('product-grid');
  products.forEach(product => {
    const productCard = createProductCard(product);
    grid.appendChild(productCard);
  });
}

displayProducts(products);



function countCartItems(){
  const counter = document.querySelector('.num-cart-counter');
  counter.innerText = customer.cart.length
}