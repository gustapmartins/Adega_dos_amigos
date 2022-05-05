const form = document.querySelector('.formulario')
const items = document.querySelector('.items')

form.addEventListener('submit', (e) => {
    e.preventDefault()


    const nome = e.target.nome
    const topico = e.target.topico
    const data = e.target.dia
    const avali = e.target.avaliacao
    const estrelas = e.target.star

    adicionaAvaliacao(nome.value, topico.value, estrelas.value, data.value, avali.value)

    nome.value = ''
    topico.value = ''
    data.value = ''
    avali.value = ''
    estrelas.value = ''
})

function adicionaAvaliacao(user, topico, valorEstrela, dataDia, avali) {

    const item = document.createElement('div')
    item.classList.add('item')

    const avaliacao = document.createElement('div')
    avaliacao.classList.add('avaliacao')

    const data = document.createElement('div')
    data.classList.add('data')

    const p = document.createElement('p')
    p.innerHTML += dataDia

    const icons = document.createElement('div')
    icons.classList.add('icons')


    let estrela = document.createElement('i')


    for (let i = 0; i < valorEstrela; i++) {
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
    h1.innerHTML += topico

    const userAvalia = document.createElement('p')
    userAvalia.innerHTML += avali

    const nome = document.createElement('span')
    nome.innerHTML += user

    item.appendChild(texto)
    texto.appendChild(h1)
    texto.appendChild(userAvalia)
    texto.appendChild(nome)

    items.appendChild(item)

    const nomeInfo = [{
        nome: user,
        topico: topico,
        estrela: valorEstrela,
        data: dataDia,
        avaliacao: avali
    }]

    localStorage.setItem('formulario', JSON.stringify(nomeInfo))
}