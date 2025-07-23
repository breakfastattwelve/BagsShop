import React from 'react';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                bagzz
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20"> {/* เพิ่ม padding-bottom เพื่อไม่ให้เนื้อหาซ้อนกับ bottom nav */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                This season's latest
              </h2>
              <p className="text-xl mb-8">
                ค้นพบคอลเลคชั่นใหม่ล่าสุดของเรา
              </p>
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                ดูสินค้าทั้งหมด
              </button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              สินค้าแนะนำ
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      กระเป๋า {item}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      คำอธิบายสินค้าสั้น ๆ
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        ฿1,{item}99
                      </span>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">
                        เพิ่มลงรถเข็น
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              หาตามหรือประเภท
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Artsy', 'Berkely', 'Capucines', 'Metropolis'].map((category) => (
                <div key={category} className="text-center">
                  <div className="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                  <button className="text-blue-600 font-medium text-sm border-b border-blue-600 hover:text-blue-700 transition-colors">
                    SHOP NOW
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content for scrolling test */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                🎯 ทดสอบ Sticky Bottom Navigation
              </h3>
              <p className="text-yellow-700">
                เลื่อนหน้าเว็บขึ้นลงเพื่อดูว่าเมนูด้านล่างยังคงลอยอยู่ในตำแหน่งเดิม แม้ว่าคุณจะเลื่อนไปที่ไหนก็ตาม!
              </p>
            </div>

            {/* Additional content for scrolling */}
            {[1, 2, 3, 4, 5].map((section) => (
              <div key={section} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  เนื้อหาทดสอบ {section}
                </h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ★ Bottom Navigation Component ★ */}
      <BottomNavigation />
    </div>
  );
}

export default App;