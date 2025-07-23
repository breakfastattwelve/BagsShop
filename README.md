# Sticky Bottom Navigation - React + Vite + Tailwind CSS

ตัวอย่างการสร้าง **Sticky Bottom Navigation Menu** ด้วย React, Vite, JavaScript และ Tailwind CSS

## 🚀 Quick Start

### ติดตั้ง Dependencies

```bash
npm install
```

### รันโปรเจค

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

## 📁 โครงสร้างไฟล์

```
src/
├── components/
│   └── BottomNavigation.jsx    # Component หลักของ Bottom Navigation
├── App.jsx                     # Component หลักของ App
├── main.jsx                    # Entry point
└── index.css                   # Tailwind CSS imports
```

## 🎯 หลักการสำคัญ

### CSS Classes ที่สำคัญ (Tailwind CSS):

```jsx
// ★ คลาสหลักสำหรับ Sticky Bottom Navigation
<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
```

**อธิบาย:**
- `fixed` = `position: fixed` - ลอยอยู่ในตำแหน่งเดิม
- `bottom-0` = `bottom: 0` - ติดด้านล่าง
- `left-0 right-0` = `left: 0; right: 0` - กว้างเต็มหน้าจอ
- `z-50` = `z-index: 50` - อยู่ด้านบนสุด

### React State Management:

```jsx
const [activeTab, setActiveTab] = useState('home');
const [cartCount, setCartCount] = useState(2);
```

## 📱 ฟีเจอร์

- ✅ **Sticky Position** - เมนูลอยอยู่ด้านล่างเสมอ
- ✅ **Active State** - แสดงสถานะปัจจุบัน
- ✅ **Badge Notification** - แสดงจำนวนสินค้าในรถเข็น
- ✅ **Smooth Transition** - เอฟเฟกต์การเปลี่ยนแปลงที่นุ่มนวล
- ✅ **Responsive Design** - รองรับทุกขนาดหน้าจอ
- ✅ **Safe Area Support** - รองรับมือถือรุ่นใหม่
- ✅ **Heroicons** - ไอคอนสวยงาม

## 🔧 การใช้งาน

### 1. Import Component:

```jsx
import BottomNavigation from './components/BottomNavigation';
```

### 2. ใช้ใน App:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-20"> {/* เว้นพื้นที่ให้เมนู */}
        {/* เนื้อหาของคุณ */}
      </main>
      <BottomNavigation />
    </div>
  );
}
```

### 3. การปรับแต่ง:

```jsx
// เปลี่ยนรายการเมนู
const navigationItems = [
  {
    id: 'home',
    label: 'หน้าแรก',
    icon: HomeIcon,
    iconSolid: HomeIconSolid,
    path: '/'
  },
  // เพิ่มเมนูอื่น ๆ
];
```

## 🎨 การแก้ไขสี

แก้ไขสีใน `tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6', // สีหลัก
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

## 📱 Mobile Support

รองรับ Safe Area สำหรับมือถือรุ่นใหม่:

```jsx
<div className="pb-safe"> {/* padding-bottom: env(safe-area-inset-bottom) */}
```

## 🚀 การผนวกกับ React Router

```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleNavClick = (item) => {
  setActiveTab(item.id);
  navigate(item.path); // นำทางไปหน้าใหม่
};
```

## 📦 Dependencies

- **React 18** - JavaScript library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful hand-crafted SVG icons
- **React Router Dom** - Declarative routing for React

## 💡 เคล็ดลับ

1. **ป้องกันเนื้อหาซ้อน**: ใช้ `pb-20` (padding-bottom) ใน main content
2. **การใช้ z-index**: ใช้ `z-50` เพื่อให้เมนูอยู่ด้านบนสุด
3. **Responsive**: ใช้ `max-w-md mx-auto` เพื่อจำกัดความกว้างบนจอใหญ่
4. **Performance**: ใช้ `transition-all duration-200` สำหรับ animation ที่นุ่มนวล

## 🐛 การแก้ปัญหา

**Q: เมนูไม่ลอยอยู่?**
A: ตรวจสอบว่าใช้ `fixed` และ `z-50` แล้ว

**Q: เนื้อหาซ้อนกับเมนู?**
A: เพิ่ม `pb-20` ใน main content

**Q: ไอคอนไม่แสดง?**
A: ติดตั้ง `@heroicons/react`

```bash
npm install @heroicons/react
```

## 📄 License

MIT License - สามารถใช้งานได้อย่างอิสระ
