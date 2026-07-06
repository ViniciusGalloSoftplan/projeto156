function copiarEndereco(e) {
  e.preventDefault();
  const endereco = "Serviço de Informações ao Cidadão\nRua Antonio Correa Barbosa, 2233 – Chácara Nazareth\nCentro Cívico da Prefeitura Municipal de Piracicaba – 10º andar";
  navigator.clipboard.writeText(endereco).then(() => showToast()).catch(() => showToast());
}

function showToast() {
  const t = document.getElementById('toast');
  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(60px)';
  }, 2200);
}

// Setup copy address button
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.querySelector('.card-action[href="#"]');
  if (copyBtn) {
    copyBtn.addEventListener('click', copiarEndereco);
  }
});
