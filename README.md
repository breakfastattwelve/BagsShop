# Bottom Navigation Menu Tutorial

เมนูนำทางด้านล่างแบบ Sticky (Bottom Navigation) ที่จะติดอยู่ด้านล่างของหน้าจอตลอดเวลาเมื่อ scroll

## 📁 ไฟล์ในโปรเจค

### 1. Basic Version
- `bottom-navigation.html` - เวอร์ชันพื้นฐาน
- `styles.css` - สไตล์พื้นฐาน

### 2. Advanced Version
- `bottom-navigation-advanced.html` - เวอร์ชันขั้นสูง
- `styles-advanced.css` - สไตล์ขั้นสูงพร้อม animations
- `script.js` - JavaScript สำหรับ interactions

## 🎯 คุณสมบัติหลัก

### Basic Version
- ✅ เมนูติดอยู่ด้านล่างของหน้าจอ (position: fixed)
- ✅ Responsive design
- ✅ รองรับ safe area สำหรับ iPhone X
- ✅ Badge สำหรับแสดงจำนวนสินค้าในตะกร้า

### Advanced Version (เพิ่มเติม)
- ✅ Active state เมื่อเลือกเมนู
- ✅ Animations (bounce, pulse, ripple effect)
- ✅ ซ่อน/แสดงเมนูเมื่อ scroll
- ✅ Dark mode support
- ✅ Haptic feedback บน mobile

## 💻 วิธีใช้งาน

### 1. โครงสร้าง HTML พื้นฐาน
```html
<nav class="bottom-nav">
    <a href="#" class="nav-item">
        <i class="fas fa-home"></i>
        <span>หน้าแรก</span>
    </a>
    <!-- เมนูอื่นๆ -->
</nav>
```

### 2. CSS ที่สำคัญ
```css
.bottom-nav {
    position: fixed;  /* ติดอยู่กับหน้าจอ */
    bottom: 0;        /* ชิดด้านล่าง */
    left: 0;
    right: 0;
    z-index: 1000;    /* อยู่ด้านบนของเนื้อหาอื่น */
}
```

### 3. JavaScript Features
```javascript
// เปลี่ยนจำนวนในตะกร้า
updateCartBadge(5);

// Active state จะเปลี่ยนอัตโนมัติเมื่อคลิก
```

## 🎨 การปรับแต่ง

### เปลี่ยนสี
```css
/* เปลี่ยนสี active state */
.nav-item.active {
    color: #your-color;
}

/* เปลี่ยนสี badge */
.cart-badge {
    background-color: #your-color;
}
```

### เปลี่ยน icons
ใช้ Font Awesome icons อื่นๆ จาก [Font Awesome](https://fontawesome.com/icons)

### ปรับขนาด
```css
.bottom-nav {
    height: 70px; /* เปลี่ยนความสูง */
}

.nav-item i {
    font-size: 28px; /* เปลี่ยนขนาด icon */
}
```

## 📱 Responsive Breakpoints
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🔧 การติดตั้ง

1. Copy ไฟล์ทั้งหมดไปยังโปรเจคของคุณ
2. เชื่อมต่อ CSS และ JavaScript:
```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```
3. ตรวจสอบให้แน่ใจว่ามี Font Awesome:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

## 💡 Tips

1. **Performance**: ใช้ `will-change: transform` กับ elements ที่มี animation
2. **Accessibility**: เพิ่ม `aria-label` ให้กับ navigation items
3. **SEO**: ใช้ semantic HTML (`<nav>`) สำหรับ navigation
4. **UX**: ทดสอบบนอุปกรณ์จริงเพื่อตรวจสอบ touch targets

## 🤝 การสนับสนุน

หากมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม สามารถติดต่อได้ที่...

---

Happy Coding! 🚀