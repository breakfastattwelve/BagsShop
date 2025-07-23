import { useState } from 'react'
import BottomNavigation from './components/BottomNavigation'
import BottomNavigationAdvanced from './components/BottomNavigationAdvanced'
import './App.css'

function App() {
  const [showAdvanced, setShowAdvanced] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Bottom Navigation Demo
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            React + Vite + Tailwind CSS
          </p>
        </div>
      </header>

      {/* Toggle Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          {showAdvanced ? 'ดู Basic Version' : 'ดู Advanced Version'}
        </button>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            คุณสมบัติของ {showAdvanced ? 'Advanced' : 'Basic'} Bottom Navigation
          </h2>
          
          {showAdvanced ? (
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ เมนูติดอยู่ด้านล่างเมื่อ scroll</li>
              <li>✅ ซ่อน/แสดงอัตโนมัติเมื่อ scroll ขึ้น/ลง</li>
              <li>✅ Active state พร้อม animation</li>
              <li>✅ Icon เปลี่ยนเมื่อ active</li>
              <li>✅ Badge แสดงจำนวนพร้อม animation</li>
              <li>✅ Ripple effect เมื่อกด</li>
              <li>✅ รองรับ Dark mode</li>
              <li>✅ Haptic feedback บน mobile</li>
            </ul>
          ) : (
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ เมนูติดอยู่ด้านล่างเมื่อ scroll</li>
              <li>✅ Active state</li>
              <li>✅ Badge แสดงจำนวน</li>
              <li>✅ Responsive design</li>
            </ul>
          )}
        </div>

        {/* Demo Content */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              ทดสอบการ Scroll
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ลอง scroll หน้าจอขึ้นลงเพื่อดูการทำงานของเมนู
              {showAdvanced && ' (Advanced version จะซ่อนเมื่อ scroll ลง และแสดงเมื่อ scroll ขึ้น)'}
            </p>
          </div>

          {/* Generate content for scrolling */}
          {[...Array(20)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Content Block {index + 1}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      {showAdvanced ? <BottomNavigationAdvanced /> : <BottomNavigation />}
    </div>
  )
}

export default App
