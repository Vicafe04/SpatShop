var password = document.querySelector('#psw')
var email = document.querySelector('#email')
var btn = document.querySelector('#btn');
var acc = false;

const urlLogin = 'http://localhost:3000/login'

function login() {
   
    let dados = {
        email: email.value,
        senha: password.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch("http://localhost:3000/login", options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            if ((dados.email == data.email) && (dados.senha == data.senha)) {
                acc = true;
            }

            if (acc == true) {
                alert("Acesso permitido");
                localStorage.setItem('userID', data.id);
                window.location.href = "../home/index.html";
            } else {
                alert("Acesso negado");
            }
        })
}