from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

# Add the parent directory to Python path to import keepa module
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from keepa.keepa_api import KeepaAPI

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Keepa API with your API key
keepa_api = KeepaAPI()

@app.route('/analyze', methods=['POST'])
def analyze_product():
    try:
        data = request.get_json()
        asin = data.get('asin')
        
        if not asin:
            return jsonify({'error': 'ASIN is required'}), 400

        # Get product data from Keepa
        product_data = keepa_api.get_product_data(asin)
        
        # Analyze the data
        analysis_result = analyze_product_data(product_data)
        
        return jsonify(analysis_result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def analyze_product_data(product_data):
    # Implement your analysis logic here
    # This is a placeholder that returns dummy data
    return {
        'price_analysis': {
            'current_price': '$99.99',
            'average_price': '$89.99',
            'trend': 'Increasing'
        },
        'rank_analysis': {
            'current_rank': '#1,234',
            'category': 'Electronics',
            'trend': 'Stable'
        },
        'recommendations': [
            'Price is currently higher than average',
            'Sales rank is improving',
            'Consider monitoring for price drops'
        ]
    }

if __name__ == '__main__':
    app.run(debug=True) 