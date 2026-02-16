# Hướng dẫn sửa lỗi API cho Gieo Quẻ và Lời Chúc

## ✅ Đã sửa xong!

Tôi đã chuyển logic gọi AI từ thư mục `api/` (backend) sang `src/utils/ai-services.js` để gọi **trực tiếp từ frontend**.

## 🔧 Các thay đổi đã thực hiện:

### 1. Tạo file mới: `src/utils/ai-services.js`
- Chứa 2 hàm: `generateFortune()` và `generateGreeting()`
- Gọi Gemini AI trực tiếp từ frontend
- Không cần backend server

### 2. Cập nhật `FortunePage.jsx`
- Thay thế `fetch('/api/generate-fortune')` bằng `generateFortune(name, birthDate)`
- Import từ `../utils/ai-services`

### 3. Cập nhật `WishesPage.jsx`
- Thay thế `fetch('/api/generate-greeting')` bằng `generateGreeting(aiPrompt)`
- Import từ `../utils/ai-services`

### 4. Cập nhật `.env`
- Đổi `GEMINI_API_KEY` thành `VITE_GEMINI_API_KEY` (Vite yêu cầu prefix `VITE_`)

## 🚀 Cách sử dụng:

### Bước 1: Cấu hình API Key
Mở file `.env` và thay thế API key của bạn:

```bash
VITE_GEMINI_API_KEY=AIzaSy...your_actual_key_here
```

**Lấy API key tại:** https://aistudio.google.com/app/apikey

### Bước 2: Khởi động lại dev server
```bash
npm run dev
```

**LƯU Ý:** Bạn PHẢI khởi động lại server sau khi thay đổi file `.env`!

### Bước 3: Kiểm tra
1. Vào trang **Gieo Quẻ** - nhập tên và ngày sinh, nhấn "Gieo Quẻ Ngay"
2. Vào trang **Lời Chúc** - nhập ý tưởng, nhấn "Gợi ý lời chúc bằng AI"

## 🎯 Tại sao trước đó không hoạt động?

- Thư mục `api/` chứa các **serverless functions** (dùng cho Vercel deployment)
- Khi chạy local với `npm run dev`, Vite chỉ chạy frontend, không có backend
- Vite proxy trong `vite.config.js` chuyển tiếp request đến `localhost:3000`, nhưng không có server nào chạy ở đó
- **Giải pháp:** Gọi Gemini AI trực tiếp từ frontend thay vì qua API endpoint

## 📁 Cấu trúc mới:

```
src/
├── utils/
│   ├── ai-services.js       ← MỚI: Logic gọi Gemini AI
│   └── download-utils.js
├── pages/
│   ├── FortunePage.jsx      ← ĐÃ CẬP NHẬT
│   └── WishesPage.jsx       ← ĐÃ CẬP NHẬT
```

## ⚠️ Lưu ý bảo mật:

Khi deploy lên production (Vercel, Netlify, v.v.), bạn nên:
1. **Không commit** file `.env` lên Git
2. Thêm API key vào **Environment Variables** của platform
3. Hoặc quay lại dùng serverless functions trong `api/` để bảo vệ API key

## 🎉 Kết quả:

- ✅ Gieo quẻ hoạt động
- ✅ Tạo lời chúc hoạt động
- ✅ Không cần backend server
- ✅ Đơn giản hơn cho development
