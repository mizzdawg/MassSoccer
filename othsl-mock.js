// Select all icons in the top nav and nav menus
// const navIcons = document.querySelectorAll('.nav-icon')
// const navMenus = document.querySelectorAll('.nav-pop-menu-container')
// const menuOverlays = document.querySelectorAll('.nav-pop-menu-overlay')

// // Add event listeners to each nav icon
// navIcons.forEach((icon, index) => {
//     icon.addEventListener('click', () => {
//         const activeMenu = navMenus[index];

//         // Check if menu is active
//         if (activeMenu.classList.contains('menu-active')) {
//             // Remove 'menu-active' class from active menu
//             activeMenu.classList.remove('menu-active')
//         } else {
//             // Remove 'menu-active' class from all menus
//             navMenus.forEach(menu => { menu.classList.remove('menu-active') })
//             // Add 'menu-active' class to correct menu
//             activeMenu.classList.add('menu-active')
//         }
//     })
// })

const navHamburger = document.querySelector('.ham-icon')
const accountIcon = document.querySelector('.acct-icon')
const leftNav = document.querySelector('.left-nav-pop')
const rightNav = document.querySelector('.right-nav-pop')
const leftNavX = document.querySelector('.nav-menu-x-icon')
const rightNavX = document.querySelector('.acct-menu-x-icon')
const navOverlay = document.querySelector('.nav-pop-menu-overlay')

function toggleNav(nav) {
    // toggle menu-active class
    nav.classList.toggle('menu-active')
    navOverlay.classList.toggle('overlay-active')
}

navHamburger.addEventListener('click', () => {
    toggleNav(leftNav)
})

accountIcon.addEventListener('click', () => {
    toggleNav(rightNav)
})
leftNavX.addEventListener('click', () => {
    toggleNav(leftNav)
})
rightNavX.addEventListener('click', () => {
    toggleNav(rightNav)
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