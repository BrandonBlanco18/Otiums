var menu = document.querySelectorAll(".opcion");










function toggleDesktopMenu() {
    const  isAsideClosed = shoppingCartContainer .classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer .classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu() {
    const  isAsideClosed = shoppingCartContainer .classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}




menu.forEach(function(item){
    item.addEventListener('click', function(i){
        var elemento = i.target.parentNode;
        elemento.children[1].classList.toggle('activo');
    })
})