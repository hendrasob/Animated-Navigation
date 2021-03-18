const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

const navAnimation = (directionFrom, directionTo) => {
    navItems.forEach((navItem, index) => {
        navItem.classList.replace(`slide-${directionFrom}-${index+1}`, `slide-${directionTo}-${index+1}`)
    });
}

const toggleNav = () => {
    // Toggle Menu bars Open/Closed
    menuBars.classList.toggle("change");

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        
        // Animate In - Nav Iems
        navAnimation('out', "in");
        
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        
        // Animate Out - Nav Iems
        navAnimation('in', "out");
    }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
});

