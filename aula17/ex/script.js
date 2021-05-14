const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>A raiz quadrada do seu número é = ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? R: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>O seu número é NaN? R: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando o seu número para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando o seu número para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>O seu número com duas casas decimais ${numero.toFixed(2)}</p>`;