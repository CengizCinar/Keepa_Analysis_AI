# Amazon Ürün Analiz Aracı

Bu araç, Keepa API kullanarak Amazon ürünlerinin detaylı analizini yapar.

## Özellikler

- Buy Box analizi ve kazanma oranları
- Sales Rank grafikleri ve istatistikleri
- FBA satıcı stok ve fiyat bilgileri

## Kurulum

1. Virtual Environment oluşturma (Seçenek 1 - Kullanıcı dizininde):
```powershell
python -m venv C:\Users\%USERNAME%\venvs\keepa-analysis
C:\Users\%USERNAME%\venvs\keepa-analysis\Scripts\activate
```

VEYA

1. Virtual Environment oluşturma (Seçenek 2 - Sistem genelinde):
```powershell
python -m venv C:\venvs\keepa-analysis
C:\venvs\keepa-analysis\Scripts\activate
```

2. Gerekli paketleri yükleme:
```powershell
pip install -r requirements.txt
```

## Kullanım

1. Virtual environment'ı aktifleştirin:
```powershell
# Seçenek 1 için:
C:\Users\%USERNAME%\venvs\keepa-analysis\Scripts\activate

# VEYA Seçenek 2 için:
C:\venvs\keepa-analysis\Scripts\activate
```

2. Scripti çalıştırın:
```powershell
python analyze_product.py
```

## Notlar

- Virtual environment projenin dışında tutulduğu için, her yeni terminal oturumunda aktifleştirme komutunu çalıştırmanız gerekir.
- Grafik dosyaları her çalıştırmada yeniden oluşturulur.
- Keepa API anahtarınızı `analyze_product.py` dosyasında güncelleyin. 