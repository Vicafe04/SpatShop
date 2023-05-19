const abrirModal = document.getElementById('abrirModal');
const modal = document.getElementById('meuModal');
const fechar = document.getElementsByClassName('fechar')[0];
const cadastrarServicoBtn = document.querySelector('.btn');
const lista = document.getElementById('lista-dados');

abrirModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

cadastrarServicoBtn.addEventListener('click', async () => {
  const idPet = document.querySelector('input[type="text"]').value;
  const tipoServico = document.querySelector('#raca').value;

  try {
    const response = await fetch('http://localhost:3000/Servicos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idPet, tipoServico })
    });

    alert('Serviço cadastrado com sucesso!');

    modal.style.display = 'none';

  } catch (error) {
    console.error(error);
    alert('Erro ao cadastrar serviço');
  }
});

function exibirDados(dados) {
  const lista = document.getElementById('lista-dados');

  dados.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.nome; 

    lista.appendChild(li);
  });
}

fetch('http://localhost:3000/Servicos') 
  .then(response => response.json())
  .then(data => exibirDados(data))
  .catch(error => console.error(error));

  function exibirDados(dados) {
    const lista = document.getElementById('lista-dados');
  
    dados.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.nome; 
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Deletar';
      deleteBtn.addEventListener('click', () => {
        deletarServico(item.id); 
      });
  
      li.appendChild(deleteBtn);
      lista.appendChild(li);
    });
  }
  

  function deletarServico(id) {
    
    fetch(`http://localhost:3000/Servicos/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          
          const listItem = document.querySelector(`li[data-id="${id}"]`);
          listItem.remove();
        } else {
          console.error('Erro ao deletar o serviço.');
        }
      })
      .catch(error => console.error(error));
  }
  
  
  fetch('http://localhost:3000/Servicos') 
    .then(response => response.json())
    .then(data => exibirDados(data))
    .catch(error => console.error(error));