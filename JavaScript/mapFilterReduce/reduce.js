var array = [50, 50, 50, 50];
var soma = array.reduce((soma, i) => {
    return soma + i;
});

console.log(soma);