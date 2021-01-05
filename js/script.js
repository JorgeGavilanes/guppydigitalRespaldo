//menubar
let burgerMenu = document.getElementById('burger-menu');
let show = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})



//darkmode
const darkBtn = document.querySelector('.btn-dark');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('oscuro')
}
darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('oscuro');

    if(setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('oscuro', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('oscuro', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('oscuro');

// Check dark mode is on or off on page reload
if(setDarkMode === 'on') {
    darkMode();
}




//menu que desaparece
window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})



//preloader
window.addEventListener("load", function(){
    setTimeout(() => {
        document.getElementById("preloader").style.display="none";
    }, 1000);
});
