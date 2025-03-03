// Select all icons in the top nav and nav menus
const navIcons = document.querySelectorAll('.nav-icon')
const navMenus = document.querySelectorAll('.nav-pop-menu-container')

// Add event listeners to each nav icon
navIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Check if connected menu is active
        if (navMenus[index].classList.contains('menu-active')) {
            // Remove 'menu-active' class from active menu
            navMenus[index].classList.remove('menu-active')
        } else {
            // Remove 'menu-active' class from all menus
            navMenus.forEach(menu => {
                menu.classList.remove('menu-active')
            })
            // Add 'menu-active' class to correct menu
            navMenus[index].classList.add('menu-active')
        }
    })
})

// Select all mobile top nav flyout headers, header chevron icons and each header's list of links
const mobileNavHeaders = document.querySelectorAll('.nav-menu-pop-header')
const mobileNavHeaderIcons = document.querySelectorAll('.nav-menu-pop-header-icon')
const mobileSubLinks = document.querySelectorAll('.nav-menu-pop-sub-list')

// Add event listeners to each mobile top nav flyout header
mobileNavHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
        mobileNavHeaderIcons[index].classList.toggle('icon-rotate')
        mobileSubLinks[index].classList.toggle('sub-list-inactive')
    })
}) 