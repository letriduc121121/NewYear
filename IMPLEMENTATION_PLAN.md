# 🎉 PLAN XÂY DỰNG ỨNG DỤNG CHÀO XUÂN NĂM MỚI - REACTJS

## 📋 TỔNG QUAN DỰ ÁN

### Mục tiêu
Xây dựng ứng dụng web chào xuân **Năm Ngựa 2026 (Bính Ngọ)** với ReactJS, bao gồm:
- **Trang chủ**: Đếm ngược đến giao thừa theo lịch âm với slogan "Mã Đáo Thành Công - Vạn Sự Như Ý"
- **Checklist**: Danh sách việc cần làm đón Tết
- **Lời chúc**: Gửi lời chúc Tết đến người thân, bạn bè
- **Gieo quẻ**: Gieo quẻ may mắn đầu năm
- **Lì xì**: Tạo mã QR lì xì điện tử kèm lời chúc

### Chủ đề năm 2026
- **Năm con Ngựa (Bính Ngọ)** - Tết Nguyên Đán: **Thứ Ba, 17/02/2026**
- **Slogan**: "Mã Đáo Thành Công - Vạn Sự Như Ý"
- **Ý nghĩa**: Ngựa tượng trưng cho sự nhanh nhẹn, năng động, thành công
- **Màu sắc may mắn**: Đỏ, Vàng, Nâu, Cam

### Công nghệ sử dụng
- **Frontend Framework**: ReactJS (Vite)
- **Styling**: CSS3 với animations, gradients, glassmorphism
- **Thư viện bổ sung**:
  - `lunar-javascript` hoặc `lunar-calendar` - Chuyển đổi lịch dương/âm
  - `react-countdown` hoặc custom countdown - Đếm ngược thời gian
  - `qrcode.react` - Tạo mã QR
  - `react-router-dom` - Điều hướng trang
  - `framer-motion` - Animations mượt mà
  - `react-icons` - Icons đẹp mắt
  - `react-confetti` - Hiệu ứng pháo hoa/confetti
  - `react-beautiful-dnd` - Drag & drop cho checklist

---

## 🏗️ CẤU TRÚC DỰ ÁN

```
d:/NewYear/
├── public/
│   ├── images/
│   │   ├── tet-decorations/     # Hình ảnh trang trí tết
│   │   ├── fortune-cards/        # Hình ảnh lá bài quẻ
│   │   ├── bank-logos/           # Logo ngân hàng
│   │   └── horse/                # Hình ảnh con ngựa năm 2026
│   └── sounds/
│       └── tet-music.mp3         # Nhạc xuân nền
├── src/
│   ├── assets/
│   │   └── fonts/                # Font chữ Tết
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── TetDecoration.jsx
│   │   ├── countdown/
│   │   │   ├── CountdownTimer.jsx
│   │   │   └── LunarDateDisplay.jsx
│   │   ├── checklist/
│   │   │   ├── ChecklistItem.jsx
│   │   │   ├── ChecklistCategory.jsx
│   │   │   └── ProgressBar.jsx
│   │   ├── wishes/
│   │   │   ├── WishCard.jsx
│   │   │   ├── WishForm.jsx
│   │   │   ├── WishTemplate.jsx
│   │   │   └── ShareWish.jsx
│   │   ├── fortune/
│   │   │   ├── FortuneForm.jsx
│   │   │   ├── FortuneCard.jsx
│   │   │   ├── FortuneResult.jsx
│   │   │   └── ZodiacCalculator.jsx
│   │   └── lixi/
│   │       ├── LixiForm.jsx
│   │       ├── BankSelector.jsx
│   │       ├── QRGenerator.jsx
│   │       └── WishesInput.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ChecklistPage.jsx
│   │   ├── WishesPage.jsx
│   │   ├── FortunetellingPage.jsx
│   │   └── LixiPage.jsx
│   ├── utils/
│   │   ├── lunarCalendar.js      # Xử lý lịch âm
│   │   ├── fortuneTelling.js     # Thuật toán gieo quẻ
│   │   ├── qrGenerator.js        # Tạo QR code
│   │   └── bankData.js           # Danh sách ngân hàng VN
│   ├── data/
│   │   ├── checklistData.js      # Dữ liệu checklist mẫu
│   │   └── wishesTemplates.js    # Mẫu lời chúc
│   ├── styles/
│   │   ├── index.css
│   │   ├── variables.css         # CSS variables (colors, fonts)
│   │   ├── animations.css        # Keyframes animations
│   │   └── responsive.css        # Media queries
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 THIẾT KẾ UI/UX - CONCEPT MỚI

### 🎯 Concept chính: "Tết Hiện Đại - Hồn Xưa"
Kết hợp giữa **minimalism hiện đại** và **họa tiết truyền thống Việt Nam**

### Màu sắc độc đáo

**Palette chính - "Ngày Xuân Rực Rỡ":**
```css
/* Primary Colors - Warm & Vibrant */
--spring-red: #E63946;        /* Đỏ phúc lộc - năng động */
--gold-fortune: #F4A460;      /* Vàng tài lộc - ấm áp */
--jade-green: #06D6A0;        /* Xanh ngọc bích - tươi mới */
--peach-blossom: #FFB5A7;     /* Hồng hoa đào - nhẹ nhàng */

/* Secondary Colors */
--deep-burgundy: #A4243B;     /* Đỏ thẫm - sang trọng */
--cream-white: #FFF8F0;       /* Kem - nền chính */
--charcoal: #2D3142;          /* Xám than - text */
--light-gray: #F8F9FA;        /* Xám nhạt - background */

/* Accent Colors */
--lotus-pink: #FFD6E8;        /* Hồng sen */
--bamboo-green: #7CB342;      /* Xanh tre */
--sunrise-orange: #FF6B35;    /* Cam bình minh */
```

**Gradients - Hiện đại & Sống động:**
```css
--gradient-sunrise: linear-gradient(135deg, #FFB5A7 0%, #FF6B35 50%, #E63946 100%);
--gradient-fortune: linear-gradient(90deg, #F4A460 0%, #FFD700 100%);
--gradient-jade: linear-gradient(180deg, #06D6A0 0%, #1B998B 100%);
--gradient-sky: linear-gradient(to bottom, #87CEEB 0%, #FFF8F0 100%);
--gradient-card: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,240,0.9) 100%);
```

### Phong cách thiết kế độc đáo

**1. Layout Style:**
- **Asymmetric Grid Layout** - Bố cục không đối xứng năng động
- **Card-based Design** - Thiết kế thẻ với depth & shadows
- **Parallax Scrolling** - Cuộn nhiều lớp tạo chiều sâu
- **Sticky Navigation** - Menu dính thông minh

**2. Visual Elements:**
- **Họa tiết Việt Nam hiện đại:**
  - Hoa văn thêu - simplified line art
  - Mây rồng - minimal strokes
  - Lá dong, lá tre - abstract shapes
  - Pháo hoa - particle effects
  
- **3D Micro-interactions:**
  - Cards tilt on hover (perspective transform)
  - Buttons với ripple effect
  - Smooth page transitions
  - Loading animations với họa tiết truyền thống

**3. Glassmorphism & Neumorphism:**
```css
/* Glass Effect */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

/* Soft Neumorphism */
.neuo-card {
  background: #FFF8F0;
  box-shadow: 
    12px 12px 24px rgba(163, 177, 198, 0.3),
    -12px -12px 24px rgba(255, 255, 255, 0.8);
  border-radius: 24px;
}
```

### Typography - Hiện đại & Dễ đọc

**Font System:**
```css
/* Headings - Bold & Impactful */
--font-display: 'Playfair Display', serif;        /* Tiêu đề lớn */
--font-heading: 'Montserrat', sans-serif;         /* Tiêu đề phụ */

/* Body - Clean & Readable */
--font-body: 'Inter', sans-serif;                 /* Nội dung */
--font-vietnamese: 'Be Vietnam Pro', sans-serif;  /* Tiếng Việt */

/* Decorative - Traditional Touch */
--font-calligraphy: 'Dancing Script', cursive;    /* Thư pháp */

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 4rem;      /* 64px */
```

### Navigation - Sáng tạo & Thân thiện

**Floating Bottom Navigation (Mobile-first):**
```
┌─────────────────────────────────────┐
│                                     │
│         CONTENT AREA                │
│                                     │
│                                     │
└─────────────────────────────────────┘
  ┌───────────────────────────────┐
  │  🏠  ✅  �  🔮  🧧          │ <- Floating
  └───────────────────────────────┘
```
- Position: Fixed bottom, floating với shadow
- Background: Glass effect
- Active indicator: Smooth slide animation
- Ripple effect on tap

**Desktop: Sidebar Navigation**
```
┌────┐ ┌──────────────────────────┐
│ 🏠 │ │                          │
│ ✅ │ │    MAIN CONTENT          │
│ 💌 │ │                          │
│ 🔮 │ │                          │
│ 🧧 │ │                          │
│    │ │                          │
└────┘ └──────────────────────────┘
```
- Expandable on hover
- Icons + Labels
- Smooth transitions

### Decorative Elements - Tinh tế & Có ý nghĩa

**1. Animated Background:**
- **Gradient mesh** thay đổi nhẹ theo time of day
- **Floating elements:**
  - Pháo hoa particles (top)
  - Hoa đào/mai rơi (falling animation)
  - Cánh bướm xuân (flutter)
  - Đèn lồng đung đưa (swing)

**2. SVG Illustrations - Custom:**
- Vẽ custom SVG cho:
  - Con ngựa stylized (năm 2026)
  - Cây mai/đào minimalist
  - Bánh chưng geometric
  - Pháo hoa abstract
  - Lì xì flat design

**3. Micro-animations:**
```javascript
// Coin drop animation khi check checklist
// Confetti burst khi complete task
// Sakura petals khi hover
// Number flip cho countdown
// Card flip cho fortune telling
```

### Responsive Strategy

**Breakpoints:**
```css
--mobile: 375px;      /* Mobile S */
--mobile-m: 425px;    /* Mobile M */
--tablet: 768px;      /* Tablet */
--laptop: 1024px;     /* Laptop */
--desktop: 1440px;    /* Desktop */
--wide: 1920px;       /* Wide screen */
```

**Adaptive Design:**
- Mobile: Single column, bottom nav
- Tablet: 2-column grid, side nav
- Desktop: Asymmetric 3-column, sidebar nav
- Wide: Max-width container, extra spacing

---

## 📄 CHI TIẾT CÁC TRANG

### 1. TRANG CHỦ (HomePage) - THEO MOCKUP

#### Layout Structure
```
┌───────────────────────────────────────────────────────┐
│                   NAVIGATION BAR                       │ 
│  🏠 Trang chủ  📋 Checklist  💬 Lời chúc  🔮 Gieo quẻ  🧧 │
├───────────────────────────────────────────────────────┤
│           🏮 (Đèn lồng trái)                🏮 (Đèn lồng phải) │
│                                                        │
│           ─── YEAR OF THE HORSE ───                   │
│                      2026                              │
│               HAPPY NEW YEAR                           │
│      "Mã Đáo Thành Công — Vạn Sự Như Ý"              │
│                                                        │
│           ĐẾM NGƯỢC ĐẾN GIAO THỪA                     │
│                                                        │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐            │
│   │  04  │  │  08  │  │  01  │  │  15  │            │
│   │ NGÀY │  │ GIỜ  │  │ PHÚT │  │ GIÂY │            │
│   └──────┘  └──────┘  └──────┘  └──────┘            │
│                                                        │
│      Mùng 1 Tết Bính Ngọ, Thứ Ba, 17/02/2026         │
│                                                        │
│         🌸 (Hoa mai rơi)    🐴 (Ngựa)    🌸 (Hoa đào) │
└───────────────────────────────────────────────────────┘
```

#### 1. Navigation Bar
```jsx
<nav className="navbar">
  <NavItem icon="🏠" label="Trang chủ" to="/" />
  <NavItem icon="📋" label="Checklist" to="/checklist" />
  <NavItem icon="💬" label="Lời chúc" to="/wishes" />
  <NavItem icon="🔮" label="Gieo quẻ" to="/fortune" />
  <NavItem icon="🧧" label="Lì xì" to="/lixi" />
</nav>
```
**Style:**
- Background: `rgba(255, 255, 255, 0.8)` với backdrop-filter
- Padding: `12px 0`
- Border-bottom: `1px solid rgba(139, 69, 19, 0.1)`
- Sticky position on scroll

#### 2. Hero Section
**Decorations:**
- **Đèn lồng trái + phải**: 
  - Position: `absolute top: -20px`
  - Animation: `swing 3s ease-in-out infinite`
  - Colors: Gradient đỏ-vàng

**Typography Hierarchy:**
```jsx
<section className="hero">
  <div className="hero-ornament">🏮</div>
  
  <h2 className="year-subtitle">
    ─── YEAR OF THE HORSE ───
  </h2>
  
  <h1 className="year-number">2026</h1>
  
  <h2 className="greeting">HAPPY NEW YEAR</h2>
  
  <p className="slogan">
    "Mã Đáo Thành Công — Vạn Sự Như Ý"
  </p>
  
  <div className="hero-ornament">🏮</div>
</section>
```

**CSS Specifications:**
```css
.year-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 4px;
  color: #A67C52;
  margin-bottom: 16px;
}

.year-number {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 128px;
  color: #B23A48;
  line-height: 1;
  margin: 0;
  text-shadow: 2px 2px 8px rgba(178, 58, 72, 0.2);
}

.greeting {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 2px;
  color: #8B4513;
  margin-top: 8px;
}

.slogan {
  font-family: 'Dancing Script', cursive;
  font-style: italic;
  font-size: 20px;
  color: #D4AF37;
  margin-top: 24px;
}
```

#### 3. Countdown Section
```jsx
<section className="countdown-section">
  <h3 className="countdown-title">ĐẾM NGƯỢC ĐẾN GIAO THỪA</h3>
  
  <div className="countdown-container">
    <CountdownBox value={days} label="NGÀY" />
    <CountdownBox value={hours} label="GIỜ" />
    <CountdownBox value={minutes} label="PHÚT" />
    <CountdownBox value={seconds} label="GIÂY" />
  </div>
</section>
```

**CountdownBox Component:**
```jsx
<div className="countdown-box">
  <div className="countdown-number">{value.toString().padStart(2, '0')}</div>
  <div className="countdown-label">{label}</div>
</div>
```

**CSS:**
```css
.countdown-box {
  background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,248,231,0.9));
  border: 2px solid rgba(178, 58, 72, 0.15);
  border-radius: 16px;
  padding: 24px 32px;
  min-width: 120px;
  box-shadow: 0 8px 24px rgba(139, 69, 19, 0.08);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.countdown-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(139, 69, 19, 0.12);
}

.countdown-number {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 56px;
  color: #B23A48;
  line-height: 1;
  margin-bottom: 8px;
}

.countdown-label {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  color: #A67C52;
  text-transform: uppercase;
}
```

#### 4. Footer Text
```jsx
<p className="lunar-date">
  Mùng 1 Tết Bính Ngọ, Thứ Ba, 17/02/2026
</p>
```

**Style:**
```css
.lunar-date {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #8B4513;
  text-align: center;
  margin-top: 40px;
  opacity: 0.8;
}
```

#### 5. Decorative Elements

**Background Pattern:**
```css
.homepage {
  background-color: #F5F1E8;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(178, 58, 72, 0.05) 0%, transparent 50%);
  position: relative;
  overflow: hidden;
}
```

**Floating Elements:**
- **Hoa mai/đào rơi**: 
  ```jsx
  <div className="flower-fall">
    {[...Array(20)].map((_, i) => (
      <span 
        key={i} 
        className="flower"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}
      >
        🌸
      </span>
    ))}
  </div>
  ```

- **Con ngựa (Horse silhouette)**:
  - Position: Subtle watermark ở giữa background
  - Opacity: 0.03-0.05
  - Size: Large, centered
  - Color: Sepia tone

**Đèn lồng swing animation:**
```css
@keyframes swing {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.lantern {
  animation: swing 3s ease-in-out infinite;
  transform-origin: top center;
}
```

#### Features:
- ✅ Countdown tự động cập nhật mỗi giây
- ✅ Flip animation cho số khi thay đổi
- ✅ Responsive: Stack vertical trên mobile
- ✅ Accessibility: Proper ARIA labels
- ✅ SEO: Semantic HTML5 tags
- ✅ Performance: Optimized animations (GPU accelerated)

---

### 2. TRANG NHÌN LẠI NĂM CŨ (ChecklistPage)

#### Concept mới: "Year in Review - Những Việc Đã Làm Được"
Thay vì to-do list, đây là nơi người dùng **tự hào nhìn lại những thành tựu** trong năm qua.

#### Mục đích
- Ghi nhận những việc đã hoàn thành trong năm 2025
- Tạo cảm giác tích cực, tự hào trước khi bước sang năm mới
- Khi tích đủ → Tạo certificate/infographic đẹp để lưu làm kỷ niệm

#### Layout - "Achievement Board"
```
┌───────────────────────────────────────────────────────┐
│         🎊 NHÌN LẠI NĂM 2025 - NHỮNG ĐIỀU ĐÃ LÀM      │
│                                                        │
│  "Mỗi việc nhỏ bạn hoàn thành đều xứng đáng tự hào"   │
│                                                        │
│  ┌──────────────────────────────────────────────┐    │
│  │ 🌟 Hoàn thành: 12/20 (60%)                   │    │
│  │ ████████████░░░░░░░░                         │    │
│  │ [Còn 8 thành tựu nữa để mở quà!]            │    │
│  └──────────────────────────────────────────────┘    │
│                                                        │
│  💼 CÔNG VIỆC & SỰ NGHIỆP                             │
│  ☑️ Hoàn thành dự án lớn                              │
│  ☑️ Được tăng lương/thăng chức                        │
│  ☐ Học được kỹ năng mới                               │
│  ☐ Thay đổi công việc mới                             │
│                                                        │
│  ❤️ GIA ĐÌNH & BẠN BÈ                                 │
│  ☑️ Đi du lịch cùng gia đình                          │
│  ☑️ Tổ chức sinh nhật cho người thân                  │
│  ☐ Gặp gỡ bạn cũ                                      │
│                                                        │
│  💪 SỨC KHỎE & PHÁT TRIỂN BẢN THÂN                    │
│  ☑️ Tập thể dục đều đặn                               │
│  ☐ Đọc được 5+ cuốn sách                              │
│  ☐ Học ngôn ngữ mới                                   │
│                                                        │
│  💰 TÀI CHÍNH                                          │
│  ☑️ Tiết kiệm được tiền                               │
│  ☐ Đầu tư thành công                                  │
│                                                        │
│  🎯 MỤC TIÊU CÁ NHÂN                                  │
│  ☑️ Hoàn thành mục tiêu đề ra                         │
│  ☐ Thử thách bản thân                                 │
│                                                        │
│  [+ Thêm thành tựu]                                   │
│                                                        │
│  [ TẠO HÌNH ẢNH KỶ NIỆM ] ← Hiện khi đủ 100%         │
└───────────────────────────────────────────────────────┘
```

#### Danh mục thành tựu (Categories)

```javascript
const achievementCategories = [
  {
    id: 'career',
    name: 'Công việc & Sự nghiệp',
    icon: '💼',
    color: '#E63946',
    items: [
      { id: 1, text: 'Hoàn thành dự án lớn', done: false },
      { id: 2, text: 'Được tăng lương/thăng chức', done: false },
      { id: 3, text: 'Học được kỹ năng mới', done: false },
      { id: 4, text: 'Thay đổi công việc tốt hơn', done: false },
      { id: 5, text: 'Được công nhận/khen thưởng', done: false }
    ]
  },
  {
    id: 'family',
    name: 'Gia đình & Bạn bè',
    icon: '❤️',
    color: '#FFB5A7',
    items: [
      { id: 6, text: 'Đi du lịch cùng gia đình', done: false },
      { id: 7, text: 'Tổ chức tiệc sinh nhật cho người thân', done: false },
      { id: 8, text: 'Gặp gỡ bạn cũ', done: false },
      { id: 9, text: 'Dành nhiều thời gian cho gia đình', done: false },
      { id: 10, text: 'Giúp đỡ người thân khi khó khăn', done: false }
    ]
  },
  {
    id: 'health',
    name: 'Sức khỏe & Phát triển bản thân',
    icon: '💪',
    color: '#06D6A0',
    items: [
      { id: 11, text: 'Tập thể dục đều đặn', done: false },
      { id: 12, text: 'Đọc được 5+ cuốn sách', done: false },
      { id: 13, text: 'Học ngôn ngữ mới', done: false },
      { id: 14, text: 'Giảm/tăng cân thành công', done: false },
      { id: 15, text: 'Khám sức khỏe định kỳ', done: false }
    ]
  },
  {
    id: 'finance',
    name: 'Tài chính',
    icon: '💰',
    color: '#F4A460',
    items: [
      { id: 16, text: 'Tiết kiệm được tiền', done: false },
      { id: 17, text: 'Đầu tư thành công', done: false },
      { id: 18, text: 'Trả hết nợ', done: false },
      { id: 19, text: 'Mua được tài sản lớn', done: false }
    ]
  },
  {
    id: 'personal',
    name: 'Mục tiêu cá nhân',
    icon: '🎯',
    color: '#FF6B35',
    items: [
      { id: 20, text: 'Hoàn thành mục tiêu đầu năm đề ra', done: false },
      { id: 21, text: 'Thử thách bản thân với điều mới', done: false },
      { id: 22, text: 'Vượt qua nỗi sợ hãi', done: false },
      { id: 23, text: 'Giúp đỡ cộng đồng/từ thiện', done: false }
    ]
  }
];
```

#### Components

**1. Progress Section with Milestone Rewards**
```jsx
<div className="achievement-progress">
  <div className="progress-header">
    <h3>
      <span className="icon">🌟</span>
      Hoàn thành: {completed}/{total} ({percentage}%)
    </h3>
    {percentage < 100 && (
      <p className="motivational-text">
        Còn {total - completed} thành tựu nữa để mở quà!
      </p>
    )}
  </div>
  
  <div className="progress-bar-wrapper">
    <div className="progress-bar">
      <div 
        className="progress-fill"
        style={{ width: `${percentage}%` }}
      >
        <span className="progress-text">{percentage}%</span>
      </div>
    </div>
    
    {/* Milestone markers */}
    <div className="milestones">
      <div className={`milestone ${percentage >= 25 ? 'reached' : ''}`} style={{left: '25%'}}>
        <span className="milestone-icon">🎁</span>
        <span className="milestone-label">25%</span>
      </div>
      <div className={`milestone ${percentage >= 50 ? 'reached' : ''}`} style={{left: '50%'}}>
        <span className="milestone-icon">🎉</span>
        <span className="milestone-label">50%</span>
      </div>
      <div className={`milestone ${percentage >= 75 ? 'reached' : ''}`} style={{left: '75%'}}>
        <span className="milestone-icon">🏆</span>
        <span className="milestone-label">75%</span>
      </div>
      <div className={`milestone ${percentage >= 100 ? 'reached' : ''}`} style={{left: '100%'}}>
        <span className="milestone-icon">👑</span>
        <span className="milestone-label">100%</span>
      </div>
    </div>
  </div>
</div>
```

**2. Achievement Item**
```jsx
<div className={`achievement-item ${done ? 'completed' : ''}`}>
  <div className="checkbox-wrapper">
    <input 
      type="checkbox" 
      checked={done}
      onChange={() => toggleAchievement(id)}
      className="achievement-checkbox"
      id={`achievement-${id}`}
    />
    <label htmlFor={`achievement-${id}`} className="checkbox-label">
      <span className="checkmark">✓</span>
    </label>
  </div>
  
  <div className="achievement-content">
    <span className="achievement-text">{text}</span>
    {done && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="completion-badge"
      >
        ✨
      </motion.div>
    )}
  </div>
  
  <button 
    className="delete-btn" 
    onClick={() => deleteAchievement(id)}
    title="Xóa"
  >
    ×
  </button>
</div>
```

**3. Category Section (Collapsible)**
```jsx
<div className="achievement-category">
  <button 
    className="category-header"
    onClick={() => toggleCategory(id)}
    style={{ '--category-color': color }}
  >
    <span className="category-icon">{icon}</span>
    <span className="category-name">{name}</span>
    <span className="category-count">
      {completedInCategory}/{totalInCategory}
    </span>
    <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
      ▼
    </span>
  </button>
  
  <AnimatePresence>
    {isExpanded && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="category-items"
      >
        {items.map(item => (
          <AchievementItem key={item.id} {...item} />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>
```

#### Completion Celebration & Image Generator

**Khi đạt 100%:**

```jsx
{percentage === 100 && (
  <div className="completion-celebration">
    <Confetti 
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={200}
      recycle={false}
    />
    
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', damping: 10 }}
      className="completion-modal"
    >
      <h2>🎊 CHÚC MỪNG! 🎊</h2>
      <p>Bạn đã hoàn thành tất cả thành tựu năm 2025!</p>
      <p>Hãy tạo hình ảnh kỷ niệm để lưu giữ khoảnh khắc này!</p>
      
      <button 
        className="create-certificate-btn"
        onClick={generateCertificate}
      >
        🎨 TẠO HÌNH ẢNH KỶ NIỆM
      </button>
    </motion.div>
  </div>
)}
```

#### Certificate/Infographic Generator

**Template Design Options:**

```javascript
const certificateTemplates = [
  {
    id: 'classic',
    name: 'Cổ điển',
    preview: '/templates/classic.jpg'
  },
  {
    id: 'modern',
    name: 'Hiện đại',
    preview: '/templates/modern.jpg'
  },
  {
    id: 'minimalist',
    name: 'Tối giản',
    preview: '/templates/minimal.jpg'
  }
];
```

**Certificate Content:**
```jsx
<div 
  id="achievement-certificate" 
  className={`certificate template-${selectedTemplate}`}
  style={{
    width: '1200px',
    height: '1600px',
    background: 'linear-gradient(135deg, #FFB5A7 0%, #FF6B35 50%, #E63946 100%)',
    padding: '60px',
    position: 'relative'
  }}
>
  {/* Decorative border */}
  <div className="certificate-border">
    <svg className="corner top-left">...</svg>
    <svg className="corner top-right">...</svg>
    <svg className="corner bottom-left">...</svg>
    <svg className="corner bottom-right">...</svg>
  </div>
  
  {/* Header */}
  <div className="certificate-header">
    <h1 className="certificate-title">
      NHÌN LẠI NĂM 2025
    </h1>
    <p className="certificate-subtitle">
      Year in Review - Achievements Unlocked
    </p>
  </div>
  
  {/* User info */}
  <div className="certificate-user">
    <h2 className="user-name">{userName || 'Tên của bạn'}</h2>
    <p className="completion-date">
      Hoàn thành ngày: {new Date().toLocaleDateString('vi-VN')}
    </p>
  </div>
  
  {/* Stats Grid */}
  <div className="achievement-stats">
    <div className="stat-card">
      <div className="stat-number">{completedCount}</div>
      <div className="stat-label">Thành tựu đạt được</div>
    </div>
    
    <div className="stat-card">
      <div className="stat-number">{categoryCount}</div>
      <div className="stat-label">Lĩnh vực chinh phục</div>
    </div>
    
    <div className="stat-card">
      <div className="stat-number">100%</div>
      <div className="stat-label">Hoàn thành</div>
    </div>
  </div>
  
  {/* Categories breakdown */}
  <div className="categories-summary">
    <h3>Những điều đã làm được:</h3>
    {categories.map(cat => {
      const completed = cat.items.filter(i => i.done);
      return completed.length > 0 && (
        <div key={cat.id} className="category-summary">
          <span className="cat-icon">{cat.icon}</span>
          <span className="cat-name">{cat.name}</span>
          <div className="cat-achievements">
            {completed.map((item, idx) => (
              <span key={idx} className="achievement-tag">
                ✓ {item.text}
              </span>
            ))}
          </div>
        </div>
      );
    })}
  </div>
  
  {/* Inspirational quote */}
  <div className="certificate-quote">
    <p>
      "Mỗi bước nhỏ bạn đi đều đáng tự hào.
      <br/>
      Năm mới 2026 - Tiếp tục tỏa sáng! 🌟"
    </p>
  </div>
  
  {/* Footer decoration */}
  <div className="certificate-footer">
    <div className="decoration-left">🎊</div>
    <div className="year-badge">2025</div>
    <div className="decoration-right">🎉</div>
  </div>
</div>
```

**Generate & Download Function:**

```javascript
import html2canvas from 'html2canvas';

const generateCertificate = async () => {
  // Show loading
  setIsGenerating(true);
  
  try {
    // Get certificate element
    const certificate = document.getElementById('achievement-certificate');
    
    // Temporarily show it (if hidden)
    certificate.style.display = 'block';
    certificate.style.position = 'absolute';
    certificate.style.left = '-9999px';
    
    // Generate canvas with high quality
    const canvas = await html2canvas(certificate, {
      scale: 2, // Higher quality
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true
    });
    
    // Convert to blob
    canvas.toBlob((blob) => {
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const userName = localStorage.getItem('user-name') || 'user';
      link.download = `thanh-tuu-2025-${userName}-${Date.now()}.png`;
      link.href = url;
      link.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
      certificate.style.display = 'none';
      
      // Show success
      toast.success('🎉 Đã tải xuống hình ảnh thành công!');
    }, 'image/png');
    
  } catch (error) {
    console.error('Error generating certificate:', error);
    toast.error('Có lỗi xảy ra. Vui lòng thử lại!');
  } finally {
    setIsGenerating(false);
  }
};
```

**Preview Modal:**
```jsx
<Modal isOpen={showPreview} onClose={() => setShowPreview(false)}>
  <div className="certificate-preview-modal">
    <h2>Xem trước hình ảnh kỷ niệm</h2>
    
    {/* Template selector */}
    <div className="template-selector">
      {certificateTemplates.map(template => (
        <button
          key={template.id}
          className={`template-option ${selectedTemplate === template.id ? 'active' : ''}`}
          onClick={() => setSelectedTemplate(template.id)}
        >
          <img src={template.preview} alt={template.name} />
          <span>{template.name}</span>
        </button>
      ))}
    </div>
    
    {/* User name input */}
    <div className="user-input">
      <label>Tên của bạn:</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Nhập tên để hiển thị trên hình"
        maxLength={30}
      />
    </div>
    
    {/* Preview */}
    <div className="preview-container">
      <div className="preview-wrapper" style={{ transform: 'scale(0.5)' }}>
        {/* Certificate JSX here */}
      </div>
    </div>
    
    {/* Actions */}
    <div className="modal-actions">
      <button onClick={() => setShowPreview(false)} className="btn-cancel">
        Hủy
      </button>
      <button 
        onClick={generateCertificate} 
        className="btn-download"
        disabled={isGenerating}
      >
        {isGenerating ? '⏳ Đang tạo...' : '📥 Tải xuống'}
      </button>
    </div>
  </div>
</Modal>
```

#### Styling

```css
.achievement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--cream-white);
  border-radius: 12px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.achievement-item:hover {
  border-color: var(--spring-red);
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.1);
}

.achievement-item.completed {
  background: linear-gradient(135deg, rgba(6, 214, 160, 0.1), rgba(6, 214, 160, 0.05));
  border-color: var(--jade-green);
}

.achievement-item.completed .achievement-text {
  color: var(--jade-green);
  font-weight: 500;
}

.checkbox-wrapper {
  position: relative;
}

.achievement-checkbox {
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid var(--charcoal);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.achievement-checkbox:checked {
  background: var(--jade-green);
  border-color: var(--jade-green);
}

.achievement-checkbox:checked + .checkbox-label .checkmark {
  opacity: 1;
  transform: scale(1);
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: white;
  font-weight: bold;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--jade-green), var(--spring-red));
  border-radius: 12px;
  transition: width 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
}

.progress-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.milestone {
  position: absolute;
  top: -30px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: 0.4;
  transition: all 0.3s ease;
}

.milestone.reached {
  opacity: 1;
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

.milestone-icon {
  font-size: 24px;
  filter: grayscale(100%);
}

.milestone.reached .milestone-icon {
  filter: grayscale(0%);
  animation: rotate 0.6s ease;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

#### Features List
- ✅ Check/Uncheck achievements
- ✅ 5 categories với màu sắc riêng
- ✅ Add custom achievements
- ✅ Progress bar với milestone markers (25%, 50%, 75%, 100%)
- ✅ Confetti animation khi đạt milestone
- ✅ LocalStorage persistence
- ✅ Collapsible categories
- ✅ **Certificate generator khi 100%**
- ✅ **3 template designs**
- ✅ **High-quality image export (html2canvas)**
- ✅ **Customizable user name**
- ✅ **Preview before download**
- ✅ Motivational messages

---

### 3. TRANG LỜI CHÚC TẾT (WishesPage)

#### Mục đích
Tạo và gửi lời chúc Tết đẹp đến người thân, bạn bè với templates có sẵn hoặc tự soạn.

#### Layout
```
┌───────────────────────────────────────────────┐
│           GỬI LỜI CHÚC TẾT 2026               │
│                                                │
│  📱 Chọn người nhận                           │
│  ┌──────────────────────────────────────┐    │
│  │ 👤 Tên người nhận                    │    │
│  └──────────────────────────────────────┘    │
│                                                │
│  💌 Chọn mẫu lời chúc hoặc tự viết            │
│                                                │
│  [Mẫu 1] [Mẫu 2] [Mẫu 3] [Tự viết]          │
│                                                │
│  ┌──────────────────────────────────────┐    │
│  │  Chúc mừng năm mới Bính Ngọ!         │    │
│  │  Mã đáo thành công, vạn sự như ý!    │    │
│  │  Tài lộc dồi dào, sức khỏe bền bỉ!   │    │
│  │  An khang thịnh vượng!                │    │
│  │                                       │    │
│  │  Kính chúc,                           │    │
│  │  [Tên của bạn]                        │    │
│  └──────────────────────────────────────┘    │
│                                                │
│  🎨 Chọn thiết kế                             │
│  [Classic] [Modern] [Minimalist]              │
│                                                │
│  📤 [Xem trước] [Gửi qua Email] [Copy]       │
└───────────────────────────────────────────────┘
```

#### Mẫu lời chúc có sẵn

```javascript
const wishTemplates = [
  {
    id: 1,
    category: 'Tổng quát',
    title: 'Chúc Tết truyền thống',
    content: `Chúc mừng năm mới Bính Ngọ!
Mã đáo thành công, vạn sự như ý!
Tài lộc dồi dào, sức khỏe bền bỉ!
An khang thịnh vượng!`,
    style: 'classic'
  },
  {
    id: 2,
    category: 'Dành cho gia đình',
    title: 'Chúc bố mẹ',
    content: `Kính chúc Bố Mẹ năm mới Bính Ngọ
Dồi dào sức khỏe, an khang hạnh phúc
Tuổi thọ vạn năm, phúc lộc đầy nhà
Con luôn yêu quý và biết ơn Bố Mẹ!`,
    style: 'classic'
  },
  {
    id: 3,
    category: 'Dành cho bạn bè',
    title: 'Chúc bạn bè',
    content: `Happy New Year! 🎊
Năm Ngựa 2026 - Phi nước đại thành công!
Công việc thuận lợi, tình duyên viên mãn
Tiền vào như nước, lộc đến như mưa!
Chúc bạn luôn vui khỏe và hạnh phúc! ❤️`,
    style: 'modern'
  },
  {
    id: 4,
    category: 'Dành cho đồng nghiệp',
    title: 'Chúc đồng nghiệp/Sếp',
    content: `Kính chúc quý Anh/Chị năm mới Bính Ngọ
Công danh thăng tiến, sự nghiệp phát đạt
Tài lộc dồi dào, vạn sự như ý
Luôn mạnh khỏe và thành công!`,
    style: 'formal'
  },
  {
    id: 5,
    category: 'Dành cho người yêu',
    title: 'Chúc người yêu',
    content: `Năm mới Bính Ngọ đến rồi!
Chúc em luôn xinh đẹp, tươi trẻ
Anh yêu em nhiều hơn mỗi ngày ❤️
Cùng nhau viết tiếp câu chuyện tình yêu
Mãi mãi bên nhau, hạnh phúc trọn đời! 💕`,
    style: 'romantic'
  },
  {
    id: 6,
    category: 'Ngắn gọn',
    title: 'Lời chúc ngắn',
    content: `🎊 Happy Tết 2026! 🐴
Mã đáo thành công!
Vạn sự như ý! 🧧`,
    style: 'minimalist'
  }
];
```

#### Components

**1. WishTemplate Selector**
```jsx
<div className="template-selector">
  {wishTemplates.map(template => (
    <div 
      key={template.id}
      className={`template-card ${selectedTemplate?.id === template.id ? 'active' : ''}`}
      onClick={() => setSelectedTemplate(template)}
    >
      <div className="template-title">{template.title}</div>
      <div className="template-category">{template.category}</div>
      <div className="template-preview">
        {template.content.substring(0, 50)}...
      </div>
    </div>
  ))}
</div>
```

**2. Wish Editor**
```jsx
<div className="wish-editor">
  <textarea
    value={wishContent}
    onChange={(e) => setWishContent(e.target.value)}
    placeholder="Nhập lời chúc của bạn..."
    rows={10}
  />
  <div className="char-count">{wishContent.length}/500</div>
</div>
```

**3. Style Selector**
```jsx
<div className="style-selector">
  <button onClick={() => setStyle('classic')}>Classic</button>
  <button onClick={() => setStyle('modern')}>Modern</button>
  <button onClick={() => setStyle('minimalist')}>Minimalist</button>
</div>
```

**4. Preview Card** với design styles khác nhau

```jsx
<div className={`wish-card style-${selectedStyle}`}>
  <div className="card-decoration-top">
    {selectedStyle === 'classic' && '🏮🏮🏮'}
    {selectedStyle === 'modern' && '✨'}
    {selectedStyle === 'minimalist' && '━━━'}
  </div>
  
  <div className="card-content">
    <pre>{wishContent}</pre>
  </div>
  
  <div className="card-decoration-bottom">
    {selectedStyle === 'classic' && '🌸🌸🌸'}
    {selectedStyle === 'modern' && '🎊'}
    {selectedStyle === 'minimalist' && '━━━'}
  </div>
  
  <div className="card-signature">
    {senderName}
  </div>
</div>
```

#### Actions

**1. Copy to Clipboard**
```javascript
const copyToClipboard = () => {
  navigator.clipboard.writeText(wishContent);
  toast.success('Đã sao chép lời chúc!');
};
```

**2. Download as Image**
```javascript
import html2canvas from 'html2canvas';

const downloadAsImage = async () => {
  const element = document.querySelector('.wish-card');
  const canvas = await html2canvas(element);
  const link = document.createElement('a');
  link.download = 'loi-chuc-tet-2026.png';
  link.href = canvas.toDataURL();
  link.click();
};
```

**3. Share to Social Media**
```javascript
const shareToFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(wishContent)}`;
  window.open(url, '_blank');
};

const shareToZalo = () => {
  // Zalo share API
};
```

#### Styling Examples

**Classic Style:**
```css
.wish-card.style-classic {
  background: linear-gradient(135deg, #FFF8E7, #FFF0DB);
  border: 3px double #B23A48;
  border-radius: 16px;
  padding: 32px;
  font-family: 'Be Vietnam Pro', serif;
  color: #8B4513;
  box-shadow: 0 12px 40px rgba(178, 58, 72, 0.15);
}
```

**Modern Style:**
```css
.wish-card.style-modern {
  background: linear-gradient(135deg, #B23A48, #D4AF37);
  color: white;
  border-radius: 24px;
  padding: 40px;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

**Minimalist Style:**
```css
.wish-card.style-minimalist {
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  padding: 40px;
  font-family: 'Inter', sans-serif;
  color: #333;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
```

#### Features List
- ✅ 10+ mẫu lời chúc có sẵn
- ✅ Tùy chỉnh nội dung
- ✅ 3 style thiết kế khác nhau
- ✅ Preview realtime
- ✅ Copy to clipboard
- ✅ Download as image
- ✅ Share to social media (FB, Zalo)
- ✅ Lưu lời chúc đã gửi (LocalStorage)
- ✅ Character counter

---

### 4. TRANG GIEO QUẺ MAY MẮN (FortunetellingPage)

#### Form Input:
- **Họ và tên**: Text input
- **Ngày sinh (dương lịch)**: Date picker
- Nút "Gieo Quẻ May Mắn" với animation

#### Thuật toán gieo quẻ:
1. **Tính tuổi theo can chi**
   - Chuyển đổi ngày sinh dương → âm
   - Xác định năm sinh theo can chi (Giáp Tý, Ất Sửu...)
   - Tính cung mệnh theo ngày/tháng/năm

2. **Gieo quẻ random**
   - Sử dụng thuật toán ngẫu nhiên có trọng số
   - Kết hợp thông tin cá nhân (tên, ngày sinh)
   - Random 1 trong các quẻ:
     - **Đại Cát** (15%): Phát tài, thăng tiến
     - **Trung Cát** (35%): Bình an, thuận lợi
     - **Tiểu Cát** (30%): May mắn nhỏ
     - **Bình** (15%): Bình thường
     - **Hung** (5%): Cần cẩn thận

3. **Hiển thị kết quả**
   - Animation lật bài như tarot card
   - Hiển thị:
     - Tên quẻ
     - Màu sắc quẻ (đỏ/vàng/xanh)
     - Lời giải quẻ (về: Tài lộc, Sức khỏe, Tình duyên, Sự nghiệp)
     - Cung mệnh theo tuổi
     - Màu sắc may mắn năm nay
     - Hướng đi tốt
   - Confetti effect khi kết quả tốt

#### Dữ liệu quẻ:
```javascript
const fortuneData = {
  "dai-cat": {
    name: "Đại Cát",
    description: "Quẻ thượng thượng, vạn sự như ý",
    fortune: "Năm nay tài lộc dồi dào, công danh thăng tiến...",
    color: "#FFD700",
    luckyColor: ["Đỏ", "Vàng"],
    luckyDirection: "Đông Nam"
  },
  // ... các quẻ khác
}
```

#### Features:
- Animation xáo quẻ trước khi hiển thị
- Share result to social media
- Print/Download result
- "Gieo lại" button

---

### 5. TRANG LÌ XÌ ĐIỆN TỬ (LixiPage)

#### Form Input:

1. **Thông tin người nhận lì xì**
   - Tên người nhận (optional)
   - Số tiền lì xì (selectbox: 10k, 20k, 50k, 100k, custom)

2. **Thông tin ngân hàng**
   - Dropdown chọn ngân hàng:
     - Vietcombank
     - VietinBank
     - BIDV
     - Techcombank
     - MB Bank
     - ACB
     - Sacombank
     - VPBank
     - ... (20+ ngân hàng phổ biến)
   - Số tài khoản
   - Tên chủ tài khoản

3. **Lời chúc**
   - Textarea cho lời chúc tự do
   - Hoặc chọn mẫu có sẵn:
     - "Chúc mừng năm mới, vạn sự như ý!"
     - "An khang thịnh vượng, sức khỏe dồi dào!"
     - "Tiền vào như nước, lộc đến như mưa!"
     - ... (10+ mẫu sẵn)

#### Tạo mã QR:

1. **QR Code Format**
   - Chuẩn VietQR (EMVCo)
   - Bao gồm:
     - Bank code (VCB, CTG, BIDV...)
     - Số tài khoản
     - Số tiền (nếu có)
     - Nội dung chuyển khoản: "[Lời chúc]"

2. **Hiển thị QR**
   - QR code size lớn, rõ ràng
   - Background màu đỏ/vàng tết
   - Khung trang trí hoa mai, đào
   - Hiển thị thông tin:
     - Ngân hàng
     - Số tài khoản (ẩn một phần: **** **** 1234)
     - Số tiền
     - Lời chúc

3. **Actions**
   - Download QR as image (PNG/JPG)
   - Share to social media
   - Print
   - Copy link
   - "Tạo lì xì mới" button

#### Danh sách ngân hàng:
```javascript
const banks = [
  { code: "VCB", name: "Vietcombank", logo: "/images/banks/vcb.png", bin: "970436" },
  { code: "CTG", name: "VietinBank", logo: "/images/banks/vietinbank.png", bin: "970415" },
  { code: "BIDV", name: "BIDV", logo: "/images/banks/bidv.png", bin: "970418" },
  // ... 20+ ngân hàng
]
```

#### QR Generator API:
- Sử dụng VietQR API: `https://img.vietqr.io/image/[BANK]-[ACCOUNT]-[TEMPLATE].jpg?amount=[AMOUNT]&addInfo=[MESSAGE]`
- Hoặc library: `qrcode.react` để generate local

---

## 🔧 CÁC CHỨC NĂNG KỸ THUẬT

### 1. Xử lý Lịch Âm

```javascript
// utils/lunarCalendar.js
export const getLunarDate = (solarDate) => {
  // Sử dụng thư viện lunar-javascript
  // Trả về: { day, month, year, canChi }
}

export const getTetDate = (year) => {
  // Tính ngày Tết âm lịch năm [year]
  // Trả về: Date object
}

export const getCountdownToTet = () => {
  // Tính thời gian còn lại đến giao thừa
  // Trả về: { days, hours, minutes, seconds }
}
```

### 2. Đếm ngược thời gian

```javascript
// components/countdown/CountdownTimer.jsx
- Update mỗi giây
- Hiển thị animation flip numbers
- Khi hết giờ: Chuyển sang "Chúc Mừng Năm Mới!" với pháo hoa
```

### 3. Thuật toán gieo quẻ

```javascript
// utils/fortuneTelling.js
export const calculateFortune = (name, birthDate) => {
  // 1. Chuyển birthDate sang lunar
  // 2. Tính cung mệnh
  // 3. Hash name + date để tạo seed
  // 4. Random weighted quẻ
  // 5. Trả về fortune object
}

export const getZodiacSign = (birthYear) => {
  // Tính con giáp
}
```

### 4. Tạo QR VietQR

```javascript
// utils/qrGenerator.js
export const generateVietQR = ({
  bankCode,
  accountNumber,
  accountName,
  amount,
  message
}) => {
  const template = "compact2";
  const url = `https://img.vietqr.io/image/${bankCode}-${accountNumber}-${template}.jpg?amount=${amount}&addInfo=${encodeURIComponent(message)}&accountName=${encodeURIComponent(accountName)}`;
  return url;
}
```

---

## 🎯 CÁC BƯỚC THỰC HIỆN

### Phase 1: Setup & Cấu trúc (1-2h)
1. ✅ Khởi tạo Vite React project
2. ✅ Cài đặt dependencies cần thiết
3. ✅ Tạo cấu trúc thư mục
4. ✅ Setup React Router
5. ✅ Tạo CSS variables và design system

### Phase 2: Components cơ bản (2-3h)
1. ✅ Header, Footer, Navigation (5 items)
2. ✅ TetDecoration component (hoa rơi, đèn lồng)
3. ✅ Layout wrapper
4. ✅ Basic responsive setup

### Phase 3: Trang chủ & Countdown (2-3h)
1. ✅ HomePage layout theo mockup
2. ✅ Implement lunar calendar utils
3. ✅ CountdownTimer component với flip animation
4. ✅ LunarDateDisplay component
5. ✅ Hero section với decorations
6. ✅ Background patterns và horse watermark

### Phase 4: Trang Checklist (2-3h)
1. ✅ ChecklistPage layout
2. ✅ Progress bar component
3. ✅ ChecklistItem với checkbox
4. ✅ Categories (4 categories mặc định)
5. ✅ Add/Delete items
6. ✅ LocalStorage persistence
7. ✅ Confetti khi hoàn thành 100%

### Phase 5: Trang Lời Chúc (2-3h)
1. ✅ WishesPage layout
2. ✅ WishTemplate components
3. ✅ Wish editor với character counter
4. ✅ 3 style designs (Classic, Modern, Minimalist)
5. ✅ Preview card
6. ✅ Copy/Download/Share functions
7. ✅ html2canvas integration

### Phase 6: Trang Gieo Quẻ (3-4h)
1. ✅ FortunetellingPage layout
2. ✅ FortuneForm component
3. ✅ Implement fortune algorithm
4. ✅ FortuneResult component với animations
5. ✅ Card flip animation
6. ✅ Dữ liệu quẻ chi tiết

### Phase 7: Trang Lì Xì (3-4h)
1. ✅ LixiPage layout
2. ✅ LixiForm component
3. ✅ BankSelector với logos
4. ✅ QRGenerator component
5. ✅ VietQR integration
6. ✅ Download/Share functionality

### Phase 8: Polish & Effects (2-3h)
1. ✅ Thêm animations với Framer Motion
2. ✅ Confetti effects
3. ✅ Particle effects (hoa rơi)
4. ✅ Micro-interactions
5. ✅ Loading states
6. ✅ Toast notifications

### Phase 9: Testing & Optimization (1-2h)
1. ✅ Test trên mobile
2. ✅ Test QR codes
3. ✅ Performance optimization
4. ✅ SEO meta tags
5. ✅ Final polish

---

## 📦 DEPENDENCIES CHÍNH

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "react-icons": "^4.12.0",
    "react-confetti": "^6.1.0",
    "qrcode.react": "^3.1.0",
    "lunar-javascript": "^1.6.12",
    "react-countdown": "^2.3.5",
    "react-beautiful-dnd": "^13.1.1",
    "html2canvas": "^1.4.1",
    "react-toastify": "^9.1.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}
```

---

## 🎨 ĐIỂM NHẤN NỔI BẬT

### Thiết kế
- ❤️ Giao diện sang trọng, hiện đại với chủ đề Năm Ngựa 2026
- ✨ Animations mượt mà, chuyên nghiệp
- 🎆 Hiệu ứng pháo hoa, hoa rơi
- 📱 Responsive hoàn hảo mobile/tablet/desktop
- � Thiết kế theo mockup với màu cream/beige sang trọng

### Tính năng
- ⏰ Đếm ngược chính xác đến giao thừa âm lịch
- ✅ Checklist chuẩn bị đón Tết với progress tracking
- 💌 Tạo lời chúc Tết với 10+ mẫu và 3 styles
- 🔮 Gieo quẻ may mắn với thuật toán thông minh
- 💰 Tạo QR lì xì chuẩn VietQR
- 🏦 Hỗ trợ 20+ ngân hàng Việt Nam
- 📥 Download, Share, Print đa dạng

### UX
- 🎊 Confetti effects khi đạt milestone
- 🎴 Animation xáo bài, lật quẻ chuyên nghiệp
- 🌸 Hiệu ứng hoa mai, đào rơi liên tục
- 💾 LocalStorage để lưu dữ liệu người dùng
- 📋 Toast notifications cho các actions
- ⚡ Performance tối ưu

---

## 📝 GHI CHÚ KỸ THUẬT

### Lịch Âm 2026
- Tết Nguyên Đán 2026 (Bính Ngọ): **17/02/2026**
- Giao thừa: 23:59 ngày 16/02/2026
- Slogan: "Mã Đáo Thành Công - Vạn Sự Như Ý"

### VietQR Format
- Template: compact, compact2, print, qr_only
- URL: `https://img.vietqr.io/image/[BANK]-[ACCOUNT]-[TEMPLATE].jpg`
- Params: `amount`, `addInfo`, `accountName`

### Fortune Algorithm
- Sử dụng hash(name + birthdate) làm seed
- Weighted random: Tốt (50%), Trung bình (35%), Xấu (15%)
- Kết hợp can chi, cung mệnh

### LocalStorage Keys
- `tet-checklist`: Danh sách việc cần làm
- `tet-wishes-sent`: Lịch sử lời chúc đã gửi
- `tet-user-preferences`: Tùy chỉnh của người dùng

---

## 🚀 KẾT QUẢ MONG ĐỢI

Một ứng dụng web:
- ✨ Giao diện **WOW** ngay từ cái nhìn đầu tiên
- ⚡ Mượt mà, nhanh, không lag
- 📱 Responsive hoàn hảo trên mọi thiết bị
- 🎯 Tính năng đầy đủ (5 trang chính), hoạt động chính xác
- 🎨 Thiết kế **premium**, **hiện đại** theo mockup
- 🧧 Chủ đề Tết đậm đà bản sắc Việt Nam - Năm Ngựa

---

## 🎊 BONUS IDEAS (Nếu có thời gian)

- 🎮 Mini game: Bắn pháo hoa
- 🧨 Mini game: Xin quẻ tại chùa
- 📜 Xem tử vi chi tiết theo tuổi
- 🎁 Vòng quay may mắn
- 📸 Khung ảnh Tết để chụp ảnh
- 🗓️ Lịch vạn niên âm/dương
- 📖 Câu chuyện về Tết, phong tục
- 🎤 Lời chúc tết bằng giọng nói (Text-to-Speech)
- 📊 Thống kê chi tiêu Tết
- 🎵 Player nhạc xuân

---

**Tổng thời gian ước tính: 18-26 giờ**

**Độ khó: Trung bình - Cao**

**Yêu cầu kiến thức:**
- ReactJS (Hooks, Router, Context)
- CSS/Animations
- API Integration
- Lunar Calendar concepts
- VietQR standard
- LocalStorage
- Canvas/Image manipulation
