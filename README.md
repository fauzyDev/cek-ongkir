# API Cek Ongkir 🚀

API sederhana untuk mengecek ongkos kirim menggunakan Express.js dan Axios.

## Fitur
- Mendapatkan daftar kota asal dan tujuan.
- Menghitung biaya pengiriman berdasarkan kota asal, kota tujuan, dan berat paket.

## Instalasi

1. Clone repository ini:

   ```bash
   git clone https://github.com/username/cek-ongkir-api.git
   cd cek-ongkir-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` dan tambahkan konfigurasi berikut:

   ```env
   API_KEY=your_shipping_api_key
   BASE_URL=https://api.shipping.com
   PORT=5000
   ```

4. Jalankan aplikasi:

   ```bash
   npm start
   ```

   Aplikasi akan berjalan di `http://localhost:5000`.

## Endpoint

### 1. Mendapatkan Daftar Kota

**Endpoint:**
```http
GET /api/cities
```

**Response:**
```json
[
  {
    "city_id": "1",
    "city_name": "Jakarta"
  },
  {
    "city_id": "2",
    "city_name": "Bandung"
  }
]
```

### 2. Mengecek Ongkos Kirim

**Endpoint:**
```http
POST /api/shipping-cost
```

**Request Body:**
```json
{
  "origin": "1",
  "destination": "2",
  "weight": 1000
}
```

**Response:**
```json
{
  "origin": "Jakarta",
  "destination": "Bandung",
  "weight": 1000,
  "cost": 20000
}
```
## Lisensi

[MIT](LICENSE)

---
