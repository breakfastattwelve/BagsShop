// Sticky Bottom Navigation Menu JavaScript

class BottomNavigation {
    constructor() {
        this.navItems = document.querySelectorAll('.nav-item');
        this.cartBadge = document.querySelector('.badge');
        this.cartCount = parseInt(this.cartBadge?.textContent) || 0;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.handleActiveState();
        this.setupScrollBehavior();
    }
    
    // จัดการการคลิกเมนู
    bindEvents() {
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveItem(item);
                this.handleNavigation(item);
            });
        });
    }
    
    // เปลี่ยนสถานะ active
    setActiveItem(activeItem) {
        this.navItems.forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
        
        // เพิ่มเอฟเฟกต์ ripple
        this.createRippleEffect(activeItem);
    }
    
    // จัดการการนำทาง
    handleNavigation(item) {
        const navType = this.getNavigationType(item);
        
        switch(navType) {
            case 'home':
                this.navigateToHome();
                break;
            case 'search':
                this.showSearch();
                break;
            case 'heart':
                this.showFavorites();
                break;
            case 'cart':
                this.showCart();
                break;
        }
    }
    
    // ระบุประเภทของการนำทาง
    getNavigationType(item) {
        const icon = item.querySelector('.nav-icon');
        if (icon.classList.contains('home')) return 'home';
        if (icon.classList.contains('search')) return 'search';
        if (icon.classList.contains('heart')) return 'heart';
        if (icon.classList.contains('cart')) return 'cart';
        return null;
    }
    
    // ฟังก์ชันนำทางต่าง ๆ
    navigateToHome() {
        console.log('Navigate to Home');
        // window.location.href = '/';
    }
    
    showSearch() {
        console.log('Show Search');
        // เปิดหน้าค้นหาหรือ modal
    }
    
    showFavorites() {
        console.log('Show Favorites');
        // แสดงรายการโปรด
    }
    
    showCart() {
        console.log('Show Cart');
        this.updateCartCount();
        // แสดงรถเข็น
    }
    
    // อัพเดทจำนวนสินค้าในรถเข็น
    updateCartCount(count = null) {
        if (count !== null) {
            this.cartCount = count;
        } else {
            this.cartCount++;
        }
        
        if (this.cartBadge) {
            this.cartBadge.textContent = this.cartCount;
            this.animateBadge();
        }
    }
    
    // แอนิเมชันสำหรับ badge
    animateBadge() {
        if (!this.cartBadge) return;
        
        this.cartBadge.style.transform = 'scale(1.3)';
        this.cartBadge.style.background = '#ff9500';
        
        setTimeout(() => {
            this.cartBadge.style.transform = 'scale(1)';
            this.cartBadge.style.background = '#ff3b30';
        }, 200);
    }
    
    // เอฟเฟกต์ ripple เมื่อคลิก
    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 122, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.height / 2 - size / 2) + 'px';
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // จัดการพฤติกรรมเมื่อเลื่อน
    setupScrollBehavior() {
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        const updateNavigation = () => {
            const currentScrollY = window.scrollY;
            const navigation = document.querySelector('.bottom-navigation');
            
            if (!navigation) return;
            
            // ซ่อนเมนูเมื่อเลื่อนลง แสดงเมื่อเลื่อนขึ้น (เพิ่มเติม)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // เลื่อนลง - ซ่อนเมนู (ไม่บังคับ)
                // navigation.style.transform = 'translateY(100%)';
            } else {
                // เลื่อนขึ้น - แสดงเมนู
                navigation.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavigation);
                ticking = true;
            }
        });
    }
    
    // จัดการสถานะ active เมื่อโหลดหน้าเว็บ
    handleActiveState() {
        // ตรวจสอบ URL ปัจจุบันและกำหนด active state
        const currentPath = window.location.pathname;
        
        this.navItems.forEach(item => {
            const navType = this.getNavigationType(item);
            
            // กำหนด active state ตาม URL
            if (
                (currentPath === '/' && navType === 'home') ||
                (currentPath.includes('/search') && navType === 'search') ||
                (currentPath.includes('/favorites') && navType === 'heart') ||
                (currentPath.includes('/cart') && navType === 'cart')
            ) {
                item.classList.add('active');
            }
        });
    }
}

// เพิ่ม CSS สำหรับ ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// เริ่มต้นใช้งานเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    const bottomNav = new BottomNavigation();
    
    // ทำให้สามารถเข้าถึงจาก global scope ได้
    window.bottomNav = bottomNav;
});

// ฟังก์ชันยูทิลิตี้เพิ่มเติม
const BottomNavUtils = {
    // เพิ่มการแจ้งเตือน
    showNotification: (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },
    
    // อัพเดทจำนวน badge
    updateBadge: (count) => {
        if (window.bottomNav) {
            window.bottomNav.updateCartCount(count);
        }
    }
};

// เพิ่ม CSS สำหรับ notification
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyle);