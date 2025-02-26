document.addEventListener('DOMContentLoaded', function() {
  const analyzeButton = document.getElementById('analyzeButton');
  const loadingDiv = document.getElementById('loading');
  const errorDiv = document.getElementById('error');
  const analysisDiv = document.getElementById('analysis');
  const priceAnalysisDiv = document.getElementById('priceAnalysis');
  const rankAnalysisDiv = document.getElementById('rankAnalysis');
  const recommendationsDiv = document.getElementById('recommendations');

  // Initially hide loading and analysis sections
  loadingDiv.style.display = 'none';
  errorDiv.style.display = 'none';
  analysisDiv.style.display = 'none';

  analyzeButton.addEventListener('click', async () => {
    // Show loading state
    loadingDiv.style.display = 'block';
    analyzeButton.disabled = true;
    errorDiv.style.display = 'none';
    analysisDiv.style.display = 'none';

    try {
      // Get the current tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // Check if we're on an Amazon product page
      if (!tab.url.includes('amazon.com')) {
        throw new Error('Not an Amazon product page');
      }

      // Extract ASIN from URL (this is a simple example, might need to be more robust)
      const asin = extractASIN(tab.url);
      if (!asin) {
        throw new Error('Could not find product ASIN');
      }

      // Make API call to your Python backend
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ asin: asin })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();

      // Update UI with analysis results
      priceAnalysisDiv.innerHTML = formatPriceAnalysis(data.price_analysis);
      rankAnalysisDiv.innerHTML = formatRankAnalysis(data.rank_analysis);
      recommendationsDiv.innerHTML = formatRecommendations(data.recommendations);

      // Show analysis section
      analysisDiv.style.display = 'block';

    } catch (error) {
      console.error('Analysis failed:', error);
      errorDiv.style.display = 'block';
      errorDiv.textContent = error.message || 'Analysis failed. Please try again.';
    } finally {
      loadingDiv.style.display = 'none';
      analyzeButton.disabled = false;
    }
  });
});

function extractASIN(url) {
  // Regular expression to match ASIN in Amazon URLs
  const asinMatch = url.match(/\/dp\/([A-Z0-9]{10})/);
  if (asinMatch) {
    return asinMatch[1];
  }
  return null;
}

function formatPriceAnalysis(priceAnalysis) {
  return `
    <p><strong>Current Price:</strong> ${priceAnalysis.current_price}</p>
    <p><strong>Average Price:</strong> ${priceAnalysis.average_price}</p>
    <p><strong>Price Trend:</strong> ${priceAnalysis.trend}</p>
  `;
}

function formatRankAnalysis(rankAnalysis) {
  return `
    <p><strong>Current Rank:</strong> ${rankAnalysis.current_rank}</p>
    <p><strong>Category:</strong> ${rankAnalysis.category}</p>
    <p><strong>Rank Trend:</strong> ${rankAnalysis.trend}</p>
  `;
}

function formatRecommendations(recommendations) {
  return `
    <ul>
      ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
    </ul>
  `;
} 