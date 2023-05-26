const lista = document.querySelector('.list')
const itemlista = document.querySelector('.item-list')
const userID = localStorage.getItem('userID')

function load() {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch("http://localhost:3000/Pet",options)
        .then(resp => { return resp.json() })
        .then(frota => {
            frota.forEach(e => {
                let item = itemlista.cloneNode(true);
                item.classList.remove("model");
                item.querySelector("#id").innerHTML = '<strong>Id: </strong>' + e.id;
                item.querySelector("#nome").innerHTML = '<strong>Nome: </strong>' + e.nome;
                item.querySelector("#porte").innerHTML = '<strong>Porte: </strong>' + e.porte;
                item.querySelector("#descricao").innerHTML = '<strong>Descricao: </strong>' + e.descricao;
                
                lista.appendChild(item);
            })
        })
}

