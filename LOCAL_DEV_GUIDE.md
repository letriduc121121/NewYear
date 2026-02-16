# 🚀 HƯỚNG DẪN CHẠY LOCAL

## ⚠️ Vấn đề hiện tại

Khi chạy `npm run dev`, API gieo quẻ và lời chúc **KHÔNG hoạt động** vì:
- Vite proxy chuyển `/api/*` → `localhost:3000`
- Không có server backend chạy ở port 3000
- Serverless functions trong `api/` chỉ hoạt động trên Vercel

## ✅ Giải pháp: Dùng Vercel CLI

### Bước 1: Cấu hình API Key

Mở file `.env` và thay thế API key thật:

```bash
GEMINI_API_KEY=AIzaSy...your_actual_key_here
```

**Lấy API key tại:** https://aistudio.google.com/app/apikey

### Bước 2: Chạy với Vercel CLI

```bash
vercel dev
```

Sau đó truy cập: **http://localhost:3000**

### Bước 3: Test

1. Vào trang **Gieo Quẻ** → Nhập tên và ngày sinh → Nhấn "Gieo Quẻ Ngay"
2. Vào trang **Lời Chúc** → Nhập ý tưởng → Nhấn "Gợi ý lời chúc bằng AI"

---

## 🎯 So sánh

| Lệnh | Port | API hoạt động? | Khi nào dùng? |
|------|------|----------------|---------------|
| `npm run dev` | 5173 | ❌ KHÔNG | Chỉ làm UI, không test API |
| `vercel dev` | 3000 | ✅ CÓ | Test đầy đủ (UI + API) |

---

## 📝 Lưu ý

- File `.env` KHÔNG được push lên GitHub (đã có trong `.gitignore`)
- Khi deploy lên Vercel, thêm `GEMINI_API_KEY` vào Environment Variables
- Serverless functions tự động hoạt động trên Vercel production

---

## 🆘 Nếu gặp lỗi

### Lỗi: "Vercel CLI not found"
```bash
npm install -g vercel
```

### Lỗi: "GEMINI_API_KEY not configured"
→ Kiểm tra lại file `.env` có đúng API key chưa

### Lỗi: Port 3000 đã được dùng
```bash
# Tắt process đang dùng port 3000 hoặc dùng port khác
vercel dev --listen 3001
```
