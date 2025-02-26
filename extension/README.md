# Keepa Analysis AI Chrome Extension

This Chrome extension provides AI-powered analysis of Amazon products using Keepa data. It helps users make informed decisions about product prices and trends.

## Features

- Real-time product analysis on Amazon pages
- Price history analysis
- Sales rank tracking
- AI-powered recommendations
- Easy-to-use popup interface
- Floating analysis button on Amazon product pages

## Installation

1. Clone this repository or download the extension folder
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `extension` folder

## Backend Setup

1. Make sure you have Python 3.7+ installed
2. Install the required packages:
   ```bash
   pip install flask flask-cors
   ```
3. Start the backend server:
   ```bash
   python server.py
   ```

## Usage

1. Visit any Amazon product page
2. Click the extension icon in your browser toolbar or use the floating "Analyze with Keepa AI" button
3. Wait for the analysis to complete
4. View detailed price analysis, sales rank information, and AI recommendations

## Development

The extension consists of the following components:

- `manifest.json`: Extension configuration
- `popup.html`: Main extension interface
- `popup.js`: Interface functionality
- `content.js`: Amazon page integration
- `server.py`: Python backend for data analysis

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 