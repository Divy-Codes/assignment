const tabs = document.querySelectorAll('.tab');
const productsSection = document.querySelector('#products');
let productCategories;

// ======= GLOBAL STATE ========
let state = {
  activeTab: 'Men',
  activeCategory: 'Men',
};

// API Call
async function getData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Error Code:${response.status}`);
    }
    const data = await response.json();

    // Write and render the HTML once we have the data to populate it. Save the data in variable productCategories
    productCategories = writeHTML(data.categories);
    render(state.activeCategory, productCategories);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// RENDER THE UI
function render(renderCategory, section) {
  console.log(`section received:`, section);
  if (section) {
    console.log(`category to render = `, renderCategory);
    Array.from(section.children).forEach((category) => {
      category.dataset.value == renderCategory
        ? category.classList.add('activeCategory')
        : category.classList.remove('activeCategory');
    });
  }
}

// Apply click event listener to tabs
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    state.activeTab = tab.dataset.value;
    state.activeCategory = tab.dataset.value;
    tabs.forEach((button) =>
      button.dataset.value == state.activeTab
        ? button.classList.add('activeTab')
        : button.classList.remove('activeTab')
    );

    // Call to function to render the active Tab data
    render(state.activeCategory, productCategories);
  });
});

// Make API Call once the static HTML has finished loading.
document.addEventListener('DOMContentLoaded', () => {
  const endpoint =
    'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';
  getData(endpoint);
});

// ============= HELPER FUNCTIONS TO RENDER HTML ==================

function writeHTML(data) {
  data.forEach((category) => {
    // Make a Card container for every prduct category
    const cardContainer = makeCardContainer(category.category_name);

    // Add cards(products) to the card container
    category.category_products.forEach((product) => {
      const card = makeProductCard(product);
      cardContainer.appendChild(card);
    });

    // Append the card container to products section.
    productsSection.appendChild(cardContainer);
  });
  return productsSection;

  function makeCardContainer(category) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('productCardsContainer');
    cardContainer.dataset.value = category;
    return cardContainer;
  }
}

function makeProductCard(cardData) {
  const {
    title,
    price,
    compare_at_price,
    vendor,
    badge_text,
    image,
    second_image,
  } = cardData;

  const discountPercent = ((compare_at_price - price) / compare_at_price) * 100;
  const percentageofDiscount = discountPercent.toFixed(2);

  // Card
  const card = document.createElement('div');
  card.classList.add('card');

  //productImageWrapper
  const productImageWrapper = document.createElement('div');
  productImageWrapper.classList.add('productImageWrapper');

  // Badge
  const badge = document.createElement('div');
  badge.classList.add('badge');
  badge.textContent = badge_text;

  //Image
  const productImage = document.createElement('img');
  productImage.setAttribute('src', image);
  productImage.setAttribute('alt', 'Product Image');

  // productDetails
  const productDetails = document.createElement('div');
  productDetails.classList.add('productDetails');

  // productTitle
  const productTitle = document.createElement('span');
  productTitle.classList.add('productTitle');
  productTitle.textContent = title;

  // Bullet
  const bullet = document.createElement('span');
  bullet.textContent = '•';

  // Brand/Vendor
  const brand = document.createElement('span');
  brand.textContent = vendor;
  brand.classList.add('brandName');

  // priceInfo
  const priceInfo = document.createElement('div');
  priceInfo.classList.add('priceInfo');

  // discountedPrice
  const discountedPrice = document.createElement('span');
  discountedPrice.classList.add('discountedPrice');
  discountedPrice.textContent = `Rs${price}`;

  // actualPrice
  const actualPrice = document.createElement('span');
  actualPrice.classList.add('actualPrice');
  actualPrice.textContent = compare_at_price;

  // discount
  const discount = document.createElement('span');
  discount.classList.add('discount');
  discount.textContent = `${percentageofDiscount}%`;

  // AddToCart
  const addToCart = document.createElement('button');
  addToCart.classList.add('addToCart');
  addToCart.textContent = 'Add to Cart';

  productImageWrapper.appendChild(productImage);
  badge.textContent != '' && productImageWrapper.appendChild(badge);
  productDetails.appendChild(productTitle);
  productDetails.appendChild(bullet);
  productDetails.appendChild(brand);
  priceInfo.appendChild(discountedPrice);
  priceInfo.appendChild(actualPrice);
  priceInfo.appendChild(discount);
  card.appendChild(productImageWrapper);
  card.appendChild(productDetails);
  card.appendChild(priceInfo);
  card.appendChild(addToCart);

  return card;
}
