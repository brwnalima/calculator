// VARIÁVEIS > query só funcionou especificando a tag antes

const display = document.querySelector('div.display')
const btn = document.querySelector('div.calculator__keys');

// faz com queo btn.textContent vá para o display

btn.addEventListener('click', e => {

    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    let n1
    let n2 = 2

    const somar = (numUm, numDois) => {
        let resultado = numUm + numDois
        return alert(resultado)
    }
    /*  
      const subtrair = () => {
          console.log("subtraindo");
      }
      
      const multiplicar = () => {
          console.log("multiplicando");
      }
      
      const dividir = () => {
          console.log("dividindo");
      }
  */

    if (key.matches('button.key--operator')) {

        switch (action) {
            case "add":
                display.textContent = somar(n1, n2)
                break;
            case "subtract":
                alert("somar")
                break;
            case "multiply":
                alert("somar")
                break;
            case "divide":
                alert("somar")
                break;
            default:
                break;
        }
    }

    if (key.matches('button.number')) {

        if (displayedNum === '0') {
            display.textContent = keyContent
            n1 = display.textContent
        } else {
            display.textContent = displayedNum + keyContent
            n1 = display.textContent
        }
    }

    if (key.matches('button.clear')) {
        display.textContent = 0
        n1 = 0
        n2 = 0
    }

    if (key.matches('button.decimal')) {
        display.textContent = displayedNum + "."
    }

    console.log(n1);
    console.log(n2);


})

/*


*/

