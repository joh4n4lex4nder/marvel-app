

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

}