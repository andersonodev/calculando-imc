// Capturar evento de submit do formulario

const form = document.querySelector('#forms');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso && !altura) {
        result('Peso e altura inválido', false)
        return;
    }

    if (!peso) {
        result('Peso inválido', false);
        return;
    };

    if (!altura) {
        result('Altura inválida', false)
        return;
    };
    
    

    console.log('cheguei mona')

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    result(msg, true);
    
   
});

function getNivelImc (imc) {
    const indice = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return `${indice[5]}`
    }
    
    if (imc >= 34.9) {
        return indice[4];
    }

    if (imc >= 29.9) {
        return indice[3];
    }

    if (imc >= 24.9) {
        return indice[2];
    }

    if (imc >= 18.5) {
        return indice[1];
    }

    if (imc < 18.5) {
        return indice[0];
    };
};



function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);

}


function criaP () {
    const p = document.createElement('p'); //cria o parágrafo
    return p;
 }

function result (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();


    if (isValid) { 
        p.classList.add('validado'); // cria uma class nova
    } else {
        p.classList.add('nao-validado'); // cria uma class nova
    }

    p.innerHTML = msg;
    resultado.appendChild(p); // adiciona o parágrafo
}
