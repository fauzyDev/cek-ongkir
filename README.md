# API Cek Ongkir 🚀

API sederhana untuk mengecek ongkos kirim menggunakan Express.js dan Axios.

## Fitur
- Mendapatkan daftar kota asal dan tujuan.
- Menghitung biaya pengiriman berdasarkan kota asal, kota tujuan, dan berat paket.

## Instalasi

1. Clone repository ini:

   ```bash
   git clone https://github.com/fauzyDev/cek-ongkir.git
   cd cek-ongkir-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` dan tambahkan konfigurasi berikut:

   ```env
   API_KEY=your_api_key
   BASE_URL=https://rajaongkir.komerce.id/api/v1
   PORT=5000
   ```

4. Jalankan aplikasi:

   ```bash
   npm start
   ```

   Aplikasi akan berjalan di `http://localhost:5000`.

## Endpoint

### 1. Mendapatkan API Key

**Endpoint:**
```http
GET /api/generate-api-key
```

**Response:**
```json
{
    "status": 200,
    "data": {
        "api_key": "your_api_key"
    },
    "message": "Sucess"
}
```

### Gunakan API Key pada headers

```json
{
  "token-api": "your_token", 
}
```

### 2. Mendapatkan Daftar Kota/Kabupaten/Provinsi

**Endpoint:**
```http
GET /api/ongkir-destination
```

**Request Body:**
```json
{
  "search": "jakarta", // isi dengan nama kota/kabupaten/provinsi
}
```

**Response:**
```json
{
  "status": 200,
  "data": [
      {
        "id": 4816,
        "label": "-, BANDUNG, BANDUNG, JAWA BARAT, 40614",
        "province_name": "JAWA BARAT",
        "city_name": "BANDUNG",
        "district_name": "BANDUNG",
        "subdistrict_name": "-",
        "zip_code": "40614"
      }
    ],
  "message": "Sucess"
}
```

### 3. Mengecek Ongkos Kirim

**Endpoint:**
```http
POST /api/ongkir-cost
```

**Request Body:**

  Content-Type: application/x-www-form-urlencoded

```json
{
  "origin": "4816", // id kota/kabupaten/provinsi asal
  "destination": "4868", // id kota/kabupaten/provinsi tujuan
  "weight": 1000, // example 1000 = 1kg
  "courier": "jne", // jne:sicepat:jnt
  "price": "lowest" // default lowest, lowest/higher
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
