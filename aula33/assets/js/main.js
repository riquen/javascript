const elementos = [
    { tag: 'p', texto: 'Lorem' },
    { tag: 'div', texto: 'Ipsum' },
    { tag: 'section', texto: 'Dolor' },
    { tag: 'footer', texto: 'Sit' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const elemento = document.createElement(tag);
    elemento.innerHTML = texto;
    div.appendChild(elemento);
}

container.appendChild(div);