// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getProductInfo') {
    const productInfo = extractProductInfo();
    sendResponse(productInfo);
  }
});

function extractProductInfo() {
  const productInfo = {
    title: '',
    asin: '',
    price: '',
    category: ''
  };

  // Extract product title
  const titleElement = document.getElementById('productTitle');
  if (titleElement) {
    productInfo.title = titleElement.textContent.trim();
  }

  // Extract ASIN from URL
  const asinMatch = window.location.pathname.match(/\/dp\/([A-Z0-9]{10})/);
  if (asinMatch) {
    productInfo.asin = asinMatch[1];
  }

  // Extract current price
  const priceElement = document.querySelector('.a-price .a-offscreen');
  if (priceElement) {
    productInfo.price = priceElement.textContent.trim();
  }

  // Extract category
  const categoryElement = document.querySelector('#wayfinding-breadcrumbs_feature_div');
  if (categoryElement) {
    const categories = Array.from(categoryElement.querySelectorAll('.a-link-normal'))
      .map(el => el.textContent.trim())
      .filter(text => text);
    productInfo.category = categories.join(' > ');
  }

  return productInfo;
}

// Add a floating button to the page
function addAnalyzeButton() {
  const button = document.createElement('button');
  button.textContent = 'Analyze with Keepa AI';
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: background-color 0.3s;
  `;

  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#0056b3';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#007bff';
  });

  button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'openPopup' });
  });

  document.body.appendChild(button);
}

// Add the button when the page loads
if (window.location.hostname.includes('amazon.com')) {
  addAnalyzeButton();
} 