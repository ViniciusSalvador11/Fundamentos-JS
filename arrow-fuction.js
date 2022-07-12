// jeito usual de declaraação
function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// Arrow fuction
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow fuction com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números de uma a nove";
    }else {
        return num1 + num2;
    }
}

//  Hoisting: arrow fuction se comporta como expressão
