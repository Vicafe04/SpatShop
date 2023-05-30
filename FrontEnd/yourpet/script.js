const cards = document.querySelector('.cards')
const card = document.querySelector('.card')
const userID = localStorage.getItem('userID')
const removeBTN = document.querySelector('.remove')

function load() {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch("http://localhost:3000/Pet", options)
        .then(resp => { return resp.json() })
        .then(pet => {
            pet.forEach(e => {
                novoCard(e.id, e.nome, e.porte, e.descricao)
            })
        })
}

function novoCard(id, nome, porte, descricao) {

    const cards = document.querySelector("#cards");
    const card = document.createElement("div");
    const Pid = document.createElement("p");
    const Pnome = document.createElement("p");
    const Pporte = document.createElement("p");
    const Pdescricao = document.createElement("p");
    const remover = document.createElement("button");
    remover.classList.add("remove")
    card.classList.add("card")
    Pid.innerHTML = id;
    Pnome.innerHTML = nome;
    Pporte.innerHTML = porte;
    Pdescricao.innerHTML = descricao;
    remover.innerHTML = "remover";
    remover.addEventListener("click", ()=>{
        deletar(id)
    })
    card.appendChild(Pid)
    card.appendChild(Pnome)
    card.appendChild(Pporte)
    card.appendChild(Pdescricao)
    card.appendChild(remover)
    cards.appendChild(card)
}

function revealModal() {
    reserva.classList.toggle('oculto');
}

function deletar(id){
    console.log(id)
}

