const btnVermais = document.querySelector('.ver_mais-btn');

btnVermais.addEventListener('mousemove', function(e){
    const x = e.pageX - btnVermais.offsetLeft;
    const y = e.pageY - btnVermais.offsetTop;

    btnVermais.style.setProperty('--x', x + 'px');
    btnVermais.style.setProperty('--y', y + 'px');
})