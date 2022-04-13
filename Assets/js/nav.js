const botaoMenu = document.querySelector('.btn');
const menu = document.querySelector('.menu');

//toggle ele remove e adiciona quando eu dou um click no objeto que eu defini botaoMenu

botaoMenu.addEventListener('click', function(){
    menu.classList.toggle('menu-ativo')
    botaoMenu.classList.toggle('active')
})


let list = menu.querySelectorAll('.list')

for(let i = 0; i < list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list'
        }
        
        list[i].className = 'list active'
    }
}