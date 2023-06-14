const cards = document.querySelector('.cards')
const card = document.querySelector('.card')
const userID = localStorage.getItem('userID')
const removeBTN = document.querySelector('.remove')
const inpNome = document.getElementById('inpNome')
const inpPorte = document.getElementById('inpPorte')
const inpDescricao = document.getElementById('inpDescricao')

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
    const strgId = document.createElement("strong");
    const strgNome = document.createElement("strong");
    const strgPorte = document.createElement("strong");
    const strgescricao = document.createElement("strong");
    const remover = document.createElement("button");
    remover.classList.add("remove")
    card.classList.add("card")
    strgId.innerHTML = id;
    strgNome.innerHTML = nome;
    strgPorte.innerHTML = porte;
    strgescricao.innerHTML = descricao;
    remover.innerHTML = "remover";
    remover.addEventListener("click", () => {
        deletar(id)
    })
    card.appendChild(remover)
    card.appendChild(strgId)
    card.appendChild(strgNome)
    card.appendChild(strgPorte)
    card.appendChild(strgescricao)
    cards.appendChild(card)
}

function revealModal() {
    reserva.classList.toggle('oculto');
}

function deletar(id) {
    const options = {
        method: 'DELETE'
    };
    fetch(`http://localhost:3000/Pet/${id}`, options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {
                window.location.reload();
            }
        })
        .catch(err => alert("Erro ao enviar dados, Erro:" + err));
}

function cadastrarPet() {
    var dados = {
        nome: inpNome.value,
        porte: inpPorte.value,
        descricao: inpDescricao.value,
        userId: Number(userID),
    }
    console.log(dados);
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    }

    fetch("http://localhost:3000/Pet", options)
        .then((resp) => resp.status)
        .then((resp) => {
            if (resp == 201)
                window.location.reload();
            else console.log(resp);
        })
        .catch((err) => console.error(err));
}