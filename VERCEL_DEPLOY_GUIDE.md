# 🚀 Hướng dẫn Deploy lên Vercel

## ✅ Đã sửa xong!

Code đã được cấu hình đúng để deploy lên **Vercel** với serverless functions.

---

## 📋 Cấu trúc dự án

```
d:\NewYear\
├── api/                          ← Serverless Functions (Vercel)
│   ├── generate-fortune.js       ← API gieo quẻ
│   └── generate-greeting.js      ← API tạo lời chúc
├── src/
│   ├── pages/
│   │   ├── FortunePage.jsx       ← Gọi /api/generate-fortune
│   │   └── WishesPage.jsx        ← Gọi /api/generate-greeting
│   └── utils/
│       └── ai-services.js        ← (Không dùng khi deploy)
└── .env                          ← KHÔNG push lên GitHub
```

---

## 🔐 Cách hoạt động

### Local Development (npm run dev):
- Frontend chạy trên `localhost:5173` (Vite)
- Vite proxy chuyển tiếp `/api/*` → `localhost:3000`
- **VẤN ĐỀ:** Không có server chạy ở port 3000!

### Production (Vercel):
- Frontend được build thành static files
- Thư mục `api/` tự động trở thành **Vercel Serverless Functions**
- Khi gọi `/api/generate-fortune`, Vercel tự động route đến `api/generate-fortune.js`
- API key được lưu an toàn trong **Environment Variables** của Vercel

---

## 🛠️ Hướng dẫn Deploy

### Bước 1: Push code lên GitHub

```bash
git add .
git commit -m "Add Tet 2026 app with AI features"
git push origin main
```

**LƯU Ý:** File `.env` sẽ KHÔNG được push (đã có trong `.gitignore`)

---

### Bước 2: Deploy lên Vercel

#### 2.1. Truy cập Vercel
- Vào https://vercel.com
- Đăng nhập bằng GitHub

#### 2.2. Import Project
1. Nhấn **"Add New..."** → **"Project"**
2. Chọn repository `NewYear` từ GitHub
3. Nhấn **"Import"**

#### 2.3. Cấu hình Project
- **Framework Preset:** Vite
- **Root Directory:** `./` (mặc định)
- **Build Command:** `npm run build` (mặc định)
- **Output Directory:** `dist` (mặc định)

#### 2.4. Thêm Environment Variables
**QUAN TRỌNG:** Nhấn **"Environment Variables"** và thêm:

| Key | Value |
|-----|-------|
| `GEMINI_API_KEY` | `AIzaSy...your_actual_key` |

**Lấy API key tại:** https://aistudio.google.com/app/apikey

#### 2.5. Deploy
- Nhấn **"Deploy"**
- Đợi 1-2 phút
- Xong! 🎉

---

## 🧪 Test trên Production

Sau khi deploy xong, Vercel sẽ cho bạn URL (ví dụ: `https://new-year-abc123.vercel.app`)

1. Vào trang **Gieo Quẻ** → Test gieo quẻ
2. Vào trang **Lời Chúc** → Test tạo lời chúc AI

Nếu gặp lỗi:
- Mở **DevTools** (F12) → Tab **Console** để xem lỗi
- Vào **Vercel Dashboard** → **Deployments** → **Functions** → Xem logs

---

## 🏠 Chạy Local (Development)

Vì Vite không hỗ trợ serverless functions, bạn có 2 cách:

### Cách 1: Dùng Vercel CLI (KHUYẾN NGHỊ)

```bash
# Cài Vercel CLI
npm i -g vercel

# Chạy local với serverless functions
vercel dev
```

Sau đó truy cập: `http://localhost:3000`

### Cách 2: Tạo file `.env.local` và dùng ai-services.js

**Tạo file `.env.local`:**
```bash
VITE_GEMINI_API_KEY=AIzaSy...your_key_here
```

**Sửa tạm thời trong `FortunePage.jsx` và `WishesPage.jsx`:**
```javascript
// Thay vì:
const res = await fetch('/api/generate-fortune', {...});

// Dùng:
import { generateFortune } from "../utils/ai-services";
const responseText = await generateFortune(name, birthDate);
```

**LƯU Ý:** Nhớ revert lại trước khi push lên GitHub!

---

## 🔒 Bảo mật

### ✅ ĐÚNG (Production):
- API key lưu trong **Vercel Environment Variables**
- API được gọi qua serverless functions
- API key KHÔNG lộ ra client

### ❌ SAI (Không nên):
- Gọi Gemini AI trực tiếp từ frontend
- API key lộ trong bundle JavaScript
- Bất kỳ ai cũng có thể lấy được key từ DevTools

---

## 📝 Checklist Deploy

- [ ] Code đã push lên GitHub
- [ ] File `.env` KHÔNG có trong Git
- [ ] Đã tạo project trên Vercel
- [ ] Đã thêm `GEMINI_API_KEY` vào Vercel Environment Variables
- [ ] Deploy thành công
- [ ] Test các tính năng AI trên production URL

---

## 🆘 Troubleshooting

### Lỗi: "Vui lòng cấu hình GEMINI_API_KEY"
→ Kiểm tra lại Environment Variables trên Vercel Dashboard

### Lỗi: "Failed to fetch"
→ Kiểm tra Network tab trong DevTools, xem request có đến `/api/...` không

### Lỗi: "Module not found: @google/generative-ai"
→ Vercel tự động cài dependencies, nhưng nếu lỗi thì thêm vào `package.json`:
```json
"dependencies": {
  "@google/generative-ai": "^0.24.1"
}
```

---

## 🎯 Tóm tắt

| Môi trường | Cách chạy | API Key ở đâu? |
|------------|-----------|----------------|
| **Local** | `vercel dev` | `.env` (local) |
| **Production** | Vercel auto | Environment Variables (Vercel) |

**Kết luận:** Dùng serverless functions trong `api/` là cách TỐT NHẤT để bảo vệ API key khi deploy!
