const inpName = document.getElementById("name");
const inpEmail = document.getElementById("email");
const inpTel = document.getElementById("tel");
const inpPassword = document.getElementById("psw");
const inpConfirmPassword = document.getElementById("confirm_psw");
const equalPSW = document.getElementById('psw_check')

function cadastrarUsuario() {
  if(inpPassword.value == inpConfirmPassword.value){
    var dados = {
      nome: inpName.value,
      email: inpEmail.value,
      telefone: inpTel.value,
      senha: inpPassword.value,
    };
    console.log(dados);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    };
  
    fetch("http://localhost:3000/cadastro", options)
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 201)
        window.location.href='../login/index.html'
        else console.log(resp);
      })
      .catch((err) => console.error(err));
    }else{
      alert("SENHAS NÃO COINCIDEM")
    }
}
