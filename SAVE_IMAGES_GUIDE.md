# 🐴 Hướng dẫn lưu ảnh ngựa từ Gemini

## 📥 Các bước thực hiện:

### Bước 1: Lưu 3 ảnh từ Gemini

Từ các ảnh bạn đã tạo với Gemini, hãy lưu chúng với tên như sau:

1. **Ảnh thứ nhất** (ngựa với hoa và đèn lồng - nền kem):
   - Tên file: `horse-hero.png`
   - Mục đích: Làm ảnh nền watermark cho toàn trang

2. **Ảnh thứ hai** (ngựa thanh lịch - nền kem/trắng):
   - Tên file: `horse-elegant.png`
   - Mục đích: Decoration ở góc phải hero section

3. **Ảnh thứ ba** (ngựa năng động - có text "Mã Đáo Thành Công"):
   - Tên file: `horse-dynamic.png`
   - Mục đích: Icon ở phần bottom decorations

### Bước 2: Copy vào thư mục

Lưu tất cả 3 file vào:
```
d:\NewYear\public\images\
```

### Bước 3: Kiểm tra

Sau khi lưu xong, cấu trúc thư mục sẽ như sau:

```
d:\NewYear\
├── public\
│   └── images\
│       ├── horse-hero.png
│       ├── horse-elegant.png
│       └── horse-dynamic.png
```

### Bước 4: Refresh trình duyệt

Mở trình duyệt tại `http://localhost:5173/` và refresh (F5 hoặc Ctrl+R)

## 🎨 Cách ảnh được sử dụng:

### 1. horse-hero.png
- **Vị trí**: Background toàn trang
- **Opacity**: 5% (rất mờ)
- **Hiệu ứng**: Watermark cố định

### 2. horse-elegant.png
- **Vị trí**: Góc phải hero section
- **Opacity**: 20%
- **Hiệu ứng**: Slide in từ phải, animation fade

### 3. horse-dynamic.png
- **Vị trí**: Giữa 2 hoa ở bottom
- **Kích thước**: 80x80px (desktop), 64x64px (mobile)
- **Hiệu ứng**: Hover scale + rotate

## 🔧 Nếu ảnh không hiển thị:

1. **Kiểm tra tên file**: Phải chính xác (lowercase, có dấu gạch ngang)
2. **Kiểm tra định dạng**: Nên dùng PNG để có background trong suốt
3. **Kiểm tra đường dẫn**: File phải nằm trong `public/images/`
4. **Hard refresh**: Ctrl + Shift + R (hoặc Cmd + Shift + R trên Mac)
5. **Xóa cache**: Mở DevTools (F12) → Network → Disable cache

## 📝 Lưu ý:

- Ảnh nên có background trong suốt (PNG) để đẹp hơn
- Kích thước đề xuất: 1000x1000px trở lên
- Nếu ảnh quá lớn (>500KB), có thể compress tại tinypng.com

## ✅ Sau khi hoàn thành:

Trang chủ sẽ có:
- ✨ Ảnh nền ngựa watermark
- 🎨 Ngựa elegant ở góc phải
- 🐴 Ngựa dynamic ở giữa bottom
- 🏮 Đèn lồng đung đưa
- 🌸 Hoa xoay tròn
- ⏱️ Countdown đẹp mắt

Chúc bạn thành công! 🎊
