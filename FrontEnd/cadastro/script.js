const inpName = document.getElementById("name");
const inpEmail = document.getElementById("email");
const inpPassword = document.getElementById("psw");
const inpTel = document.getElementById("tel");

function cadastrarUsuario() {
  var dados = {
    nome: inpName.value,
    email: inpEmail.value,
    senha: inpPassword.value,
    telefone: inpTel.value,
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
        alert("Usuário cadastrado com sucesso!");
      else console.log(resp);
    })
    .catch((err) => console.error(err));
}
