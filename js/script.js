// Turn the menu hamburguer into a X
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none'
    }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Estagiário","Desenvolvedor","Estudante"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    loop: true
});

// ---------------------- TESTE -----------------------
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#chk')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('light-mode')
})
// ----------------------------------------------------
