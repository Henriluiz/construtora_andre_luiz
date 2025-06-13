async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function abrirEmNovaAba(url) {
  window.open(url, '_blank');
}
function recarregarPagina() {
  location.reload(); // Recarrega a página
}

async function animacaoEmBotton() {
  const btn = document.getElementById("confirmar");
  const textoOriginal = btn.innerHTML; // Salva o texto original
  
  // Ativa spinner
  btn.innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Enviando...
  `;
  btn.disabled = true; // Desabilita o botão durante o processamento

  await sleep(3000); // Espera 3 segundos

  // Restaura estado original
  btn.innerHTML = textoOriginal;
  btn.disabled = false;
  recarregarPagina()
  alert("Cadastro Concluído!")
}