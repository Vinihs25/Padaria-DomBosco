//HamburgerButton 
//Aqui adicionamos um evento de escutar o click do mouse sobre o icone de hamgurguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do mouse, ele adiciona uma classe (flex), que está fazendo nossa caixa (div) visivel, ou seja, ficará totalmente visivel para todos.
});

//Criamos uma função que a ouvir o click do mouse, ele remove uma class, que está fazendo nossa caixa (div) desaparecer ou seja ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");

});