# Bottom Navigation React Component

Bottom Navigation Menu สำหรับ React ที่สร้างด้วย Vite และ Tailwind CSS

## 🚀 การติดตั้งและใช้งาน

### 1. ติดตั้ง Dependencies

```bash
cd bottom-navigation-app
npm install
npm run dev
```

### 2. Dependencies ที่ต้องการ

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-icons": "^4.x"
  },
  "devDependencies": {
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

## 📁 โครงสร้างไฟล์

```
src/
├── components/
│   ├── BottomNavigation.jsx          # Basic version
│   ├── BottomNavigationAdvanced.jsx  # Advanced version
│   └── BottomNavigationWithRouter.jsx # React Router version
├── App.jsx
├── App.css
└── index.css
```

## 🎯 คุณสมบัติ

### Basic Version (`BottomNavigation.jsx`)
- ✅ Fixed position ที่ด้านล่าง
- ✅ Active state
- ✅ Badge สำหรับตะกร้า
- ✅ Responsive design
- ✅ Haptic feedback

### Advanced Version (`BottomNavigationAdvanced.jsx`)
- ✅ ทุกอย่างจาก Basic version
- ✅ Auto hide/show เมื่อ scroll
- ✅ Icon animation เมื่อ active
- ✅ Ripple effect
- ✅ Dark mode support
- ✅ Advanced animations

## 💻 วิธีใช้งาน

### Basic Usage

```jsx
import BottomNavigation from './components/BottomNavigation'

function App() {
  return (
    <div>
      {/* Your content */}
      <BottomNavigation />
    </div>
  )
}
```

### Advanced Usage

```jsx
import BottomNavigationAdvanced from './components/BottomNavigationAdvanced'

function App() {
  return (
    <div>
      {/* Your content */}
      <BottomNavigationAdvanced />
    </div>
  )
}
```

### With React Router

```jsx
import { BrowserRouter } from 'react-router-dom'
import BottomNavigationWithRouter from './components/BottomNavigationWithRouter'

function App() {
  return (
    <BrowserRouter>
      {/* Your routes */}
      <BottomNavigationWithRouter cartCount={3} />
    </BrowserRouter>
  )
}
```

## 🎨 การปรับแต่ง

### 1. เปลี่ยนสี

```jsx
// ใน component
className={`
  ${activeMenu === item.id 
    ? 'text-blue-500'  // เปลี่ยนสี active
    : 'text-gray-600'
  }
`}
```

### 2. เปลี่ยน Icons

```jsx
import { FiHome, FiSearch } from 'react-icons/fi'

const menuItems = [
  { id: 'home', icon: FiHome, label: 'หน้าแรก' },
  // ...
]
```

### 3. เพิ่ม/ลดเมนู

```jsx
const menuItems = [
  { id: 'home', icon: AiOutlineHome, label: 'หน้าแรก' },
  { id: 'search', icon: AiOutlineSearch, label: 'ค้นหา' },
  // เพิ่มเมนูใหม่ที่นี่
  { id: 'profile', icon: AiOutlineUser, label: 'โปรไฟล์' },
]
```

## 🔧 Tailwind Config

ตรวจสอบให้แน่ใจว่ามีการตั้งค่า Tailwind ถูกต้อง:

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 📱 Responsive Breakpoints

Component จะปรับขนาดอัตโนมัติตาม breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Component รองรับ dark mode อัตโนมัติผ่าน Tailwind CSS classes:

```jsx
className="bg-white dark:bg-gray-900"
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT
