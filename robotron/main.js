const botoesSomarESubtrair = document.querySelectorAll('[data-controle]');  //todos botões de + e -
const atributosRobo = document.querySelectorAll('[data-atributo]'); // Força, blindagem...

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },
  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

botoesSomarESubtrair.forEach((atributo) => {
  atributo.addEventListener('click', (evento) => {
    manipularQtdePecas(evento.target.dataset.controle, evento.target.parentNode);
    atualizarAtributoRobo(evento.target.dataset.controle, evento.target.dataset.peca);
  });
});

function manipularQtdePecas(operacao, controle) {
  const qtdePeca = controle.querySelector('[data-controle-contador]') 
  if (operacao === '-') {
    qtdePeca.value = parseInt(qtdePeca.value) - 1;
  } else {
    qtdePeca.value = parseInt(qtdePeca.value) + 1;
  }
}

function atualizarAtributoRobo(operacao, peca) {
  atributosRobo.forEach((elemento) => {
    if (operacao === '-') {
      elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.atributo];
    } else {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.atributo];
    }
  });

}
