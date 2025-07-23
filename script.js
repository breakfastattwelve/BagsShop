// จัดการ active state ของเมนู
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    // เมื่อคลิกที่เมนู
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ลบ active class จากทุกเมนู
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // เพิ่ม active class ให้เมนูที่คลิก
            this.classList.add('active');
            
            // เพิ่ม effect เมื่อคลิก
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

// ฟีเจอร์ซ่อน/แสดงเมนูเมื่อ scroll
let lastScrollTop = 0;
const bottomNav = document.getElementById('bottomNav');
const scrollThreshold = 50; // ระยะ scroll ที่จะเริ่มซ่อนเมนู

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // ถ้า scroll ลงและ scroll มากกว่า threshold
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // ซ่อนเมนู
        bottomNav.classList.add('hide');
    } else {
        // แสดงเมนู
        bottomNav.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop;
});

// จัดการ badge ของตะกร้าสินค้า
function updateCartBadge(count) {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = count;
        
        // ซ่อน badge ถ้าไม่มีสินค้า
        if (count === 0) {
            cartBadge.style.display = 'none';
        } else {
            cartBadge.style.display = 'flex';
        }
    }
}

// ตัวอย่างการใช้งาน updateCartBadge
// updateCartBadge(5); // เปลี่ยนจำนวนในตะกร้าเป็น 5
// updateCartBadge(0); // ซ่อน badge

// เพิ่ม haptic feedback สำหรับ mobile (ถ้ารองรับ)
if ('vibrate' in navigator) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            navigator.vibrate(10); // สั่น 10ms
        });
    });
}

// จัดการ page visibility เพื่อประหยัดแบตเตอรี่
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // หยุด animations เมื่อผู้ใช้ไม่ได้ดูหน้าเว็บ
        document.querySelector('.cart-badge').style.animationPlayState = 'paused';
    } else {
        // เริ่ม animations ใหม่เมื่อกลับมาดู
        document.querySelector('.cart-badge').style.animationPlayState = 'running';
    }
});