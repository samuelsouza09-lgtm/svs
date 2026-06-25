// Pega o botão pelo id "btnTema" que está no HTML
const botao = document.getElementById('btnTema');

// Quando o botão for clicado, executa essa função
botao.addEventListener('click', function() {

  // Adiciona ou remove a classe "escuro" do body
  // classList.toggle = "se não tem, coloca; se já tem, tira"
  document.body.classList.toggle('escuro');

  // Muda o texto do botão dependendo do tema atual
  se (document.body.classList.contains('escuro')) {
    botao.textContent = '☀️ Modo claro';
  } outro {
    botao.textContent = '🌙 Modo escuro';
  }

});
