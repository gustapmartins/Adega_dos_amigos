const form = document.querySelector('.formulario')
const items = document.querySelector('.items')
const objetos = JSON.parse(localStorage.getItem("objetos")) || []

objetos.forEach((element) => {
    adicionaAvaliacao(element)
});

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nomeInfo = {
        nome: e.target.nome.value,
        topico: e.target.topico.value,
        avaliacao: e.target.avaliacao.value,
        data: e.target.dia.value,
        estrela: e.target.star.value,
    }

    adicionaAvaliacao(nomeInfo)

    objetos.push(nomeInfo)

    localStorage.setItem('objetos', JSON.stringify(objetos))

})

function adicionaAvaliacao(itens) {

    const item = document.createElement('div')
    item.classList.add('item')

    const avaliacao = document.createElement('div')
    avaliacao.classList.add('avaliacao')

    const data = document.createElement('div')
    data.classList.add('data')

    const p = document.createElement('p')
    p.innerHTML += itens.data

    const icons = document.createElement('div')
    icons.classList.add('icons')


    let estrela = document.createElement('i')


    for (let i = 0; i < itens.estrela; i++) {
        estrela.innerHTML += '<ion-icon name="star"></ion-icon>'
    }

    item.appendChild(avaliacao)
    avaliacao.appendChild(icons)
    avaliacao.appendChild(data)
    icons.appendChild(estrela)
    data.appendChild(p)

    //---------------------------------------------

    const texto = document.createElement('div')
    texto.classList.add('texto')

    const h1 = document.createElement('h1')
    h1.innerHTML += itens.topico

    const userAvalia = document.createElement('p')
    userAvalia.innerHTML += itens.avaliacao

    const nome = document.createElement('span')
    nome.innerHTML += itens.nome

    item.appendChild(texto)
    texto.appendChild(h1)
    texto.appendChild(userAvalia)
    texto.appendChild(nome)
    items.appendChild(item)
}