# Keepa Analysis AI

Bu proje, Amazon ürünlerinin fiyat geçmişini ve trendlerini analiz etmek için Keepa API'sini kullanan bir Python uygulamasıdır.

## Özellikler

- Amazon ürünlerinin fiyat geçmişini sorgulama
- Fiyat trendlerini görselleştirme
- Fiyat istatistiklerini hesaplama
- Çoklu ASIN sorguları yapabilme

## Kurulum

1. Repository'yi klonlayın:
```bash
git clone https://github.com/YOUR_USERNAME/Keepa_Analysis_AI.git
cd Keepa_Analysis_AI
```

2. Gerekli paketleri yükleyin:
```bash
pip install -r requirements.txt
```

3. Keepa API anahtarınızı alın:
- https://keepa.com/#!api adresinden bir API anahtarı edinin
- API anahtarınızı `keepa_example.py` dosyasındaki `api_key` değişkenine atayın

## Kullanım

```python
import keepa
import pandas as pd
import matplotlib.pyplot as plt

# API anahtarınızı girin
api_key = 'YOUR_API_KEY'
api = keepa.Keepa(api_key)

# Bir ürünün fiyat geçmişini sorgulayın
products = api.query('ASIN_NUMBER')

# Fiyat geçmişini görselleştirin
keepa.plot_product(products[0])
```

## Lisans

Bu proje Apache 2.0 lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın. 