const lista = document.querySelector('.list')
const itemlista = document.querySelector('.item-list')
const opcList = document.querySelector('.opcList')
const userID = localStorage.getItem('userID')
const inpId = document.querySelector('#inpId')
const descricao = document.querySelector('#observations')
function load() {
    fetch("http://localhost:3000/Servicos")
        .then(resp => { return resp.json() })
        .then(reserva => {
            reserva.forEach(e => {
                let item = itemlista.cloneNode(true);
                item.classList.remove("model");
                item.querySelector("#PetId").innerHTML = 'nome do pet: ' + e.petId;
                item.querySelector("#area").innerHTML = 'pet info: '+ e.area;
                item.querySelector("#servico").innerHTML = 'id da Reserva: ' + e.servico;
                item.querySelector("#descricao").innerHTML = 'id da Reserva: ' + e.descricao;
                item.querySelector("#delBTN").setAttribute("onclick", `del('${e.id}')`);
                lista.appendChild(item);
            })
        })
}
function loadPet() {
    fetch("http://localhost:3000/Pet")
        .then(resp => { return resp.json() })
        .then(Pet => {
            Pet.forEach(e => {
                if (e.userId == userID) {
                    const opc = document.createElement("option");
                    opc.innerHTML = e.nome
                    opc.value = e.id
                    opcList.appendChild(opc);
                }
            })
        })
}
function del(id) {
    if (confirm("Confirma a exclusão da reserva")) {
        const options = {
            method: 'DELETE'
        };
        fetch(`http://localhost:3000/Hotel/${id}`, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 200) {
                    window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados, Erro:" + err));
    }
}
function reservar() {
    if(descricao.value == null)
    descricao.value = "";
    let dados = {
        descricao: descricao.value,
        petId: Number(inpId.value)
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };
    fetch("http://localhost:3000/Hotel", options)
        .then(response => {
            return response.json();
        })
        .then(resp => {
            console.log(resp)
            if (resp != null) {
                alert("Reserva cadastrada, obrigada pela preferencia ;)")
                window.location.reload()
            } else {
                
                console.log(resp)
            }
        })
        .catch(err => console.error(err));
}
opcList.addEventListener("change", () => {
    document.querySelector("#inpId").value = opcList.value
})