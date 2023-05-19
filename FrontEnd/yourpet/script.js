function load() {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch("http://localhost:3000/Hotel",options)
        .then(resp => { return resp.json() })
        .then(frota => {
            frota.forEach(e => {
                console.log(e)
                let item = itemlista.cloneNode(true);
                item.classList.remove("model");
                item.querySelector("#id").innerHTML = 'id do pet: ' + e.pets[0].id;
                item.querySelector("#nome").innerHTML = 'nome do pet: ' + e.pets[0].nome;
                item.querySelector("#porte").innerHTML = 'porte: ' + e.pets[0].porte;
                item.querySelector("#descricao").innerHTML = 'descrição: ' + e.pets[0].descricao;
                item.querySelector("#hotelId").innerHTML = 'id da Reserva: ' + e.pets[0].hotelId;
                var getDate = e.horaPedido.split('T', 1);
                item.querySelector("#horaReserva").innerHTML = `<input disabled type="date" value="${getDate}">`
                item.querySelector("#delBTN").setAttribute("onclick", `del('${e.pets[0].id}')`);
             
                lista.appendChild(item);
            })
        })
}