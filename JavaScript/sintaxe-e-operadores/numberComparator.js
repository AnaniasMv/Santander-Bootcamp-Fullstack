
function comparator(a, b) {
    (a == b) ? console.log('os numeros ' + a + ' e ' + b + ' sao iguais') : console.log('os numeros ' + a + ' e ' + b + ' não são iguais');
    var soma = a + b;
    if (soma > 10 && soma < 20) {
        console.log('Sua soma é de ' + soma + ' que é maior que 10 e menor que 20');
    } else if (soma < 10 && soma < 20) {
        console.log('Sua soma é de ' + soma + ' que é menor que 10 e menor que 20');
    } else if (soma > 10 && soma > 20) {
        console.log('Sua soma é de ' + soma + ' que é maior que 10 e maior que 20');
    }
}

comparator(50, 5);