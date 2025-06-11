async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function abrirEmNovaAba(url) {
  window.open(url, '_blank');
}

async function animacaoEmBotton() {
  // Seleciona o elemento com o ID "meuElemento"
  const meuElemento = document.getElementById("confirmar");
  
  // Adiciona a classe "novaClasse" ao elemento
  meuElemento.classList.add("spinner-border spinner-border-sm");
  sleep(3000)
  // Para remover uma classe, pode usar o método classList.remove()
  meuElemento.classList.remove("spinner-border spinner-border-sm");
}