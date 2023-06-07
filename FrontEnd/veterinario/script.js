const lista = document.querySelector('.list')
const itemlista = document.querySelector('.item-list')
const opcList = document.querySelector('.opcList')
const inpId = document.querySelector('#inpId')
const descricao = document.querySelector('#ob')
const userID = localStorage.getItem('userID')

function load() {
    fetch("http://localhost:3000/Servicos")
        .then(resp => { return resp.json() })
        .then(reserva => {
            reserva.forEach(e => {
                let item = itemlista.cloneNode(true);
                item.classList.remove("model");
                item.querySelector("#servico").innerHTML = 'nome do serviço: ' + e.servicTrab;    
                item.querySelector("#profissional").innerHTML = 'nome do funcionario ' + e.nomeEmpreg;
                item.querySelector("#descricao").innerHTML = 'servico info: '+ e.descricao;
                item.querySelector("#servicoId").innerHTML = 'id do servico: ' + e.id;
                lista.appendChild(item);
            })
        })
}
function loadServ() {
    fetch("http://localhost:3000/Servicos")
        .then(resp => { return resp.json() })
        .then(Pet => {
            Pet.forEach(e => {
                if (e.userId == userID) {
                    const opc = document.createElement("option");
                    opc.innerHTML = e.servicTrab
                    opc.innerHTML = e.nomeEmpreg
                    opc.innerHTML = e.descricao
                    opc.value = e.id
                    opcList.appendChild(opc);
                }
            })
        })
}
function del(id) {
    if (confirm("Confirma a exclusão do serviço")) {
        const options = {
            method: 'DELETE'
        };
        fetch(`http://localhost:3000/Servicos/${id}`, options)
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
        servico: Number(inpId.value)
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };
    fetch("http://localhost:3000/Servicos", options)
        .then(response => {
            return response.json();
        })
        .then(resp => {
            console.log(resp)
            if (resp != null) {
                alert("Serviço cadastrado)")
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