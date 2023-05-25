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
                item.querySelector("#id").innerHTML = 'Id:<br/>' + e.id;
                item.querySelector("#nome").innerHTML = 'Nome:<br/>' + e.nome;
                item.querySelector("#porte").innerHTML = 'Porte:<br/>' + e.porte;
                
                lista.appendChild(item);
            })
        })
}