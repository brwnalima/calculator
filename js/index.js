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
    let n2
    let operatorPressed = false;

    const somar = (numUm, numDois) => numUm + numDois

    if (key.matches('button.key--operator')) {
        operatorPressed = true
        display.textContent = '0'

        switch (action) {
            case "add":
                somar(n1, n2)
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
        if (!operatorPressed) {
            n1 = parseInt(displayedNum + keyContent);
            display.textContent = n1;
        } else {
            n2 = parseInt(displayedNum + keyContent);
            display.textContent = n2;
        }
    }



    if (key.matches('button.clear')) {
        display.textContent = 0
        n1 = 0
        n2 = 0
        operatorPressed = false
    }

    if (key.matches('button.decimal')) {
        display.textContent = displayedNum + "."
    }

    console.log(n1);
    console.log(n2);

})


/*
    
    O SOMAR ESTÁ FUNCIONANDO MAIS OU MENOS, AINDA N CONSEGUI DEFINIR O N2

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