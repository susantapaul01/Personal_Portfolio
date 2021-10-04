
// ============== Navbar button  start ==============
let navBtn1 = document.getElementById('nav-Btn1');
let navBtn2 = document.getElementById('nav-Btn2');
let navList = document.getElementById('nav-item');

navBtn1.addEventListener('click', navShow);
navBtn2.addEventListener('click', navHide);

function navShow() {
    navList.classList.add('navlist-show');
    navBtn2.classList.add('show');
    navBtn1.classList.add('hide');
}
function navHide() {
    navList.classList.remove('navlist-show');
    navBtn2.classList.remove('show');
    navBtn1.classList.remove('hide');
}
// ============== Navbar button end ==============