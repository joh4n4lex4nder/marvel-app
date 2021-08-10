const items = document.getElementById('items');
const templateCard= document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = []
let dislike = []

document.addEventListener('DOMContentLoaded', () => {
    recogerDates();
})

const recogerDates = async () => {
    try{
        const res = await fetch("../json/data.json")
        const data = await res.json()
        pintarCards(data)
    }
    catch(error){
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(personaje => {
        const {id, name, image} = personaje;
        templateCard.getElementById('nombre').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        const clone = templateCard.cloneNode(true);
        templateCard.querySelector('.btn-info').dataset.id = id
        templateCard.querySelector('.btn-danger').dataset.id = id
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}

items.addEventListener('click', e => {
    addLikes(e)
})

const addLikes = e => {
    if(e.target.classList.contains('btn-info')){
        
        setLikes(e.target.parentElement)
    }
    else if(e.target.classList.contains('btn-danger')){
        setLikes2(e.target.parentElement)
    }
}

const setLikes = objeto => {
    const botonL = {
        id: objeto.querySelector('.btn-info').dataset.id,
        cantidad: 0
    }
    if(like.hasOwnProperty(botonL.id)){
        botonL.cantidad = like[botonL.id].cantidad + 1;
        objeto.querySelector('#like').textContent = botonL.cantidad
    }
    like[botonL.id] = {...botonL}
    console.log(like[botonL.id])
    
}
const setLikes2 = objeto2 => {
    const botonD = {
        id: objeto2.querySelector('.btn-danger').dataset.id,
        cantidadD: 0
    }
    
    if(dislike.hasOwnProperty(botonD.id)){
        botonD.cantidadD = dislike[botonD.id].cantidadD + 1;
        objeto2.querySelector('#dislike').textContent = botonD.cantidadD
    }
    dislike[botonD.id] = {...botonD}
    console.log(dislike[botonD.id])
    
}