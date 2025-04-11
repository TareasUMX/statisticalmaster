// StatisticalMaster Custom Scripts

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const navMenu = document.querySelector('nav');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
});