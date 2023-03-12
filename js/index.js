// VARIÁVEIS > query só funcionou especificando a tag antes

const display = document.querySelector('div.display')
const btn = document.querySelector('div.calculator__keys');

// faz com queo btn.textContent vá para o display

btn.addEventListener('click', e => {
    if (e.target.matches('button.number')) {
            const btnContent = e.target.textContent
            display.textContent = btnContent
    }
})

const somar = (n1, n2) => {
    return n1 + n2
}

const subtrair = () => {
    console.log("subtraindo");
}

const multiplicar = () => {
    console.log("multiplicando");
}

const dividir = () => {
    console.log("dividindo");
}



