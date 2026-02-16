# 🎨 Hệ thống Hình ảnh & Decorations

## ✅ Đã hoàn thành

### 📁 Cấu trúc thư mục
```
public/
  images/
    ├── horse-hero.svg          (Placeholder - thay bằng .png)
    ├── horse-elegant.svg       (Placeholder - thay bằng .png)
    ├── horse-dynamic.svg       (Placeholder - thay bằng .png)
    └── README.md

src/
  components/
    ├── HorseIllustration.jsx   (SVG component - không dùng nữa)
    ├── BlossomDecoration.jsx   (SVG hoa đào/mai)
    ├── LanternDecoration.jsx   (SVG đèn lồng)
    ├── GoldenParticles.jsx     (Hiệu ứng hạt vàng)
    └── ImageWithFallback.jsx   (Auto fallback PNG→SVG)
```

### 🎯 Cách hoạt động

#### 1. Placeholder SVG (Hiện tại)
- Trang web đang dùng **SVG placeholders** tạm thời
- Bạn sẽ thấy hình ngựa đơn giản với text "Placeholder"
- Vẫn hoạt động bình thường, chỉ là chưa đẹp

#### 2. Sau khi lưu ảnh PNG từ Gemini
- Lưu 3 ảnh vào `d:\NewYear\public\images\`
- Tên file: `horse-hero.png`, `horse-elegant.png`, `horse-dynamic.png`
- Component `ImageWithFallback` sẽ **tự động** dùng PNG
- Nếu PNG không tồn tại → tự động fallback sang SVG

### 🖼️ Sử dụng ảnh trong HomePage

#### Background (horse-hero.png)
```jsx
<div style={{ 
  backgroundImage: 'url(/images/horse-hero.png), url(/images/horse-hero.svg)',
  opacity: 0.05 
}} />
```
- Vị trí: Fixed background toàn trang
- Opacity: 5% (watermark mờ)

#### Elegant Horse (horse-elegant.png)
```jsx
<ImageWithFallback
  src="/images/horse-elegant.png"
  fallbackSrc="/images/horse-elegant.svg"
  className="w-64 md:w-96 opacity-20"
/>
```
- Vị trí: Góc phải hero section
- Opacity: 20%
- Animation: Slide in từ phải

#### Dynamic Horse (horse-dynamic.png)
```jsx
<ImageWithFallback
  src="/images/horse-dynamic.png"
  fallbackSrc="/images/horse-dynamic.svg"
  className="w-20 h-20 md:w-24 md:h-24"
/>
```
- Vị trí: Giữa 2 hoa ở bottom
- Kích thước: 80x80px (desktop)
- Hover effect: Scale + rotate

### 📋 Hướng dẫn lưu ảnh từ Gemini

**Bước 1:** Từ 3 ảnh bạn đã tạo, lưu với tên:
1. `horse-hero.png` - Ảnh ngựa với hoa và đèn lồng
2. `horse-elegant.png` - Ảnh ngựa thanh lịch
3. `horse-dynamic.png` - Ảnh ngựa năng động (có text)

**Bước 2:** Copy vào thư mục:
```
d:\NewYear\public\images\
```

**Bước 3:** Refresh trình duyệt (F5 hoặc Ctrl+R)

### 🎨 SVG Decorations (Đã tích hợp)

Các decorations này **không cần** thay thế, đang hoạt động tốt:

1. **BlossomDecoration** 🌸
   - Hoa đào (peach) và hoa mai (plum)
   - Animation xoay tròn
   - Dùng ở nhiều nơi trong trang

2. **LanternDecoration** 🏮
   - Đèn lồng đỏ với chữ "福"
   - Animation đung đưa
   - Ở 2 góc trên trang

3. **GoldenParticles** ✨
   - 15 hạt vàng rơi chậm
   - Hiệu ứng lấp lánh
   - Background toàn app

### 🔧 Troubleshooting

**Q: Ảnh không hiển thị sau khi lưu?**
- Kiểm tra tên file (phải lowercase, có dấu gạch ngang)
- Hard refresh: Ctrl + Shift + R
- Xóa cache browser

**Q: Muốn dùng ảnh khác?**
- Chỉ cần thay file PNG trong `public/images/`
- Giữ nguyên tên file
- Không cần sửa code

**Q: Ảnh bị vỡ/méo?**
- Nên dùng ảnh có background trong suốt (PNG)
- Kích thước đề xuất: 1000x1000px trở lên
- Nếu quá lớn (>500KB), compress tại tinypng.com

### ✨ Kết quả cuối cùng

Sau khi lưu 3 ảnh PNG, trang chủ sẽ có:

- ✅ Ảnh nền ngựa watermark (rất mờ, elegant)
- ✅ Ngựa elegant ở góc phải (slide in animation)
- ✅ Ngựa dynamic ở giữa bottom (hover effects)
- ✅ Đèn lồng đung đưa (2 góc trên)
- ✅ Hoa xoay tròn (4 góc)
- ✅ Hạt vàng rơi (background)
- ✅ Countdown đẹp mắt
- ✅ Responsive hoàn hảo

### 📊 Performance

- **SVG placeholders**: ~5KB mỗi file
- **PNG images**: Tùy chất lượng (khuyến nghị 100-300KB/file)
- **Auto fallback**: Không ảnh hưởng performance
- **Lazy loading**: Tự động với modern browsers

---

**Lưu ý:** Hiện tại app đang chạy với SVG placeholders. Bạn có thể xem trước layout ngay. Khi nào lưu ảnh PNG từ Gemini vào, ảnh sẽ tự động thay thế!

🎊 **Chúc bạn thành công!** 🐴
