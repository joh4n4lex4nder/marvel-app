const items = document.getElementById('items');
const templateCard= document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

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
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}

