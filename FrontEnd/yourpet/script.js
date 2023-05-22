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
            console.log(frota)
            frota.forEach(e => {
                console.log(e)
                let item = itemlista.cloneNode(true);
                item.classList.remove("model");
                item.querySelector("#id").innerHTML = 'Id: ' + e.id;
                item.querySelector("#nome").innerHTML = 'Nome: ' + e.nome;
                item.querySelector("#porte").innerHTML = 'Porte: ' + e.porte;
                item.querySelector("#descricao").innerHTML = 'Descrição: ' + e.descricao;
                
                lista.appendChild(item);
            })
        })
}