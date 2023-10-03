const navbar = document.querySelector('.navbar');
const mobileNavBar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function(){
    mobileNavBar.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    if (this.window.pageYOFFset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});