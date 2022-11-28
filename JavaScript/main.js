const form = document.getElementById('form');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

let formEValido = false;

function validaForm() {
    return parseInt(campoA.value) < parseInt(campoB.value);
}

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Valores validados!`;

    formEValido = validaForm(e.target.value);

    if (formEValido) {
        successMessage.innerHTML = mensagemSucesso;
        successMessage.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.classList.add('error');
        errorMessage.style.display = 'block';
    }
});

function removeMessage(){
    if (successMessage.style.display === 'block'){
        successMessage.style.display = 'none';
    }
}

document.getElementById('campo-b').addEventListener('keyup', function(e) {
    campoB.classList.remove('error');
    errorMessage.style.display = 'none';
})