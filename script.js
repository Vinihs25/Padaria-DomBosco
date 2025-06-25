window.revelar = ScrollReveal({reset:true});

revelar.reveal('.efeito-img-topo',{ //Estou chamando a classe a qual eu quero atribuir o efeito do scrollReveal.
    duration: 2000,
    distance: '90px',
    origin: 'bottom'

});

revelar.reveal('.clientes-efeito', {
    duration: 2000,
    distance: '120px',
    origin: 'left'

});


revelar.reveal('.principais-produtos', {
    duration: 2000,
    distance: '120px',
    origin: 'right'

});

revelar.reveal('.sobre-nos', {
    duration: 2000,
    distance: '120px',
    origin: 'bottom'

});



//Aqui adicionamos um evento de escutar o click do mouse sobre o icone de hamgurguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do mouse, ele adiciona uma classe (flex), que está fazendo nossa caixa (div) visivel, ou seja, ficará totalmente visivel para todos.
});

//Criamos uma função que a ouvir o click do mouse, ele remove uma class, que está fazendo nossa caixa (div) desaparecer ou seja ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");

});

