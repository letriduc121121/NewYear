# 🖼️ Hướng dẫn sử dụng ảnh nền và ảnh trọng tâm

## 📁 Cấu trúc ảnh hiện tại

```
public/
  images/
    ├── bg1.png          ✅ Ảnh nền chính (background)
    ├── hours.jpg        ✅ Ảnh ngựa trọng tâm (focal image)
    ├── horse-hero.svg   (Placeholder - không dùng nữa)
    ├── horse-elegant.svg (Placeholder - không dùng nữa)
    └── horse-dynamic.svg (Placeholder - không dùng nữa)
```

## 🎨 Cách ảnh được sử dụng

### 1. **bg1.png** - Ảnh nền toàn trang
- **Vị trí**: Background layer (z-index: 0)
- **Kích thước**: Cover toàn màn hình
- **Hiệu ứng**: 
  - `background-size: cover` - Phủ kín màn hình
  - `background-position: center` - Căn giữa
  - Overlay trắng mờ 10% + blur nhẹ để text dễ đọc

### 2. **hours.jpg** - Ảnh ngựa trọng tâm
- **Vị trí**: Giữa màn hình, phía sau text (z-index: 5)
- **Kích thước**: Max-width 2xl (672px)
- **Hiệu ứng**:
  - Opacity: 15% (rất mờ, làm watermark)
  - Drop shadow: Bóng đỏ nhẹ
  - Animation: Fade in + scale từ 0.9 → 1
  - Duration: 1.5s
  - Pointer-events: none (không chặn click)

## 🎯 Tại sao thiết kế như vậy?

### Background (bg1.png)
- ✅ Tạo không khí Tết
- ✅ Màu sắc hài hòa
- ✅ Không át chủ bài (có overlay mờ)

### Focal Image (hours.jpg)
- ✅ Làm watermark tinh tế
- ✅ Opacity thấp (15%) không che text
- ✅ Tạo điểm nhấn thị giác
- ✅ Animation mượt mà khi load

## 🔧 Tùy chỉnh

### Thay đổi độ mờ của ảnh ngựa:
```javascript
// Trong HomePage.jsx, dòng ~65
animate={{ opacity: 0.15, scale: 1 }}
// Thay 0.15 thành giá trị khác (0.1 - 0.3)
```

### Thay đổi kích thước ảnh ngựa:
```javascript
// Trong HomePage.jsx, dòng ~68
className="w-full max-w-2xl h-auto"
// Thay max-w-2xl thành: max-w-xl, max-w-3xl, max-w-4xl
```

### Thay đổi overlay nền:
```javascript
// Trong HomePage.jsx, dòng ~58
className="absolute inset-0 z-0 bg-white/10 backdrop-blur-[2px]"
// Thay bg-white/10 thành bg-white/5 (ít hơn) hoặc bg-white/20 (nhiều hơn)
```

## 📊 Layers (từ dưới lên trên)

1. **z-0**: Background image (bg1.png)
2. **z-0**: White overlay + blur
3. **z-5**: Focal image (hours.jpg) - opacity 15%
4. **z-10**: Decorations (lanterns, blossoms)
5. **z-20**: Main content (text, countdown)

## ✨ Hiệu ứng đặc biệt

### Ảnh ngựa (hours.jpg):
```css
filter: drop-shadow(0 0 40px rgba(164, 36, 59, 0.3))
```
- Tạo bóng đỏ nhẹ xung quanh
- Làm nổi bật hình ngựa
- Hài hòa với theme Tết

### Animation:
```javascript
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 0.15, scale: 1 }}
transition={{ duration: 1.5, ease: 'easeOut' }}
```
- Fade in từ trong suốt
- Scale từ 90% → 100%
- Mượt mà, không giật

## 🎨 Kết quả

Khi mở trang, bạn sẽ thấy:
1. ✅ Ảnh nền bg1.png phủ toàn màn hình
2. ✅ Ảnh ngựa hours.jpg ở giữa (rất mờ, như watermark)
3. ✅ Text và countdown rõ ràng, dễ đọc
4. ✅ Decorations (đèn lồng, hoa) xung quanh
5. ✅ Tất cả hài hòa, không át nhau

## 📝 Lưu ý

- **Ảnh nền**: Nên dùng PNG hoặc JPG, kích thước 1920x1080 trở lên
- **Ảnh ngựa**: Nên có background trong suốt (PNG) hoặc nền sáng
- **Tối ưu**: Nén ảnh trước khi dùng (tinypng.com) để load nhanh
- **Fallback**: Nếu ảnh không load, sẽ hiển thị màu nền trắng kem

## 🚀 Performance

- **bg1.png**: ~200-500KB (tùy chất lượng)
- **hours.jpg**: ~100-300KB
- **Load time**: < 1s với internet tốc độ trung bình
- **Optimization**: Đã dùng `background-size: cover` để tối ưu

---

**Chúc bạn có giao diện Tết đẹp mắt!** 🎊🐴
