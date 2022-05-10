/* eslint-disable no-unused-expressions */
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const botaoEnviar = document.getElementById('btn-entrar');

function login(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
botaoEnviar.addEventListener('click', login);

const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function disableSubmit() {
  if (agreement.checked === true) {
    btnSubmit.removeAttribute('disabled');
  }
}
agreement.addEventListener('click', disableSubmit);

/* Referencia para o contador da pagina https://webdesignemfoco.com/cursos/exercicios/exercicio-de-programacao-05-js-contagem-e-limite-de-caracteres */
((_win, doc) => {
  const msg = doc.querySelector('#textarea');
  msg.addEventListener('keyup', (event) => {
    const sub = event.target.maxLength - event.target.textLength;
    doc.querySelector('#counter').innerHTML = `Máximo de caracteres: ${sub}`;
  }, false);
})(window, document);

const inputFamily = document.getElementsByName('family');

function creatFamily() {
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      return inputFamily[index].value;
    }
  }
}
const inputTech = document.querySelector('.conteudo-tech').getElementsByTagName('input');

function createTech() {
  const valueInputTech = [];
  for (let index = 0; index < inputTech.length; index += 1) {
    if (inputTech[index].checked) {
      valueInputTech.push(inputTech[index].value);
    }
  }
  return valueInputTech.join(', ');
}

function createAvaliacao() {
  const valueAvaliacao = document.querySelectorAll('.rate');
  for (let index = 0; index < valueAvaliacao.length; index += 1) {
    if (valueAvaliacao[index].checked) {
      return valueAvaliacao[index].value;
    }
  }
}
const createForm = (event) => {
  event.preventDefault();
  const valueForm = document.getElementById('evaluation-form');
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const home = document.getElementById('house').value;
  const textArea = document.getElementById('textarea').value;
  const family = creatFamily();
  const tech = createTech();
  const avaliação = createAvaliacao();

  valueForm.innerHTML = `<p> Nome: ${firstName} ${lastName}</p><p>Email: ${email}</p>
 <p>Casa: ${home}</p><p>Família: ${family}</p><p>Matérias: ${tech}</p>
  Avaliação: ${avaliação}</p><p>Observações: ${textArea}</p>`;
};

btnSubmit.addEventListener('click', createForm);
