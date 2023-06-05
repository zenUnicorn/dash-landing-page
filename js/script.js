const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

//This part adds the open class by toggling the class open into the btn so that we can have the X transition
btn.addEventListener('click', ()=> {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})