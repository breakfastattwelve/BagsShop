/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // เพิ่มการรองรับ safe area สำหรับมือถือ
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
      // เพิ่มฟอนต์ไทย
      fontFamily: {
        'thai': ['Noto Sans Thai', 'sans-serif'],
      },
      // เพิ่มสีสำหรับ theme
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      },
      // เพิ่ม animation สำหรับ bottom nav
      animation: {
        'bounce-soft': 'bounce 1s ease-in-out 2',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // เพิ่ม backdrop blur
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    // เพิ่ม safe area plugin ถ้าต้องการ
    function({ addUtilities }) {
      addUtilities({
        '.pb-safe': {
          'padding-bottom': 'env(safe-area-inset-bottom)',
        },
        '.pt-safe': {
          'padding-top': 'env(safe-area-inset-top)',
        },
      })
    }
  ],
}