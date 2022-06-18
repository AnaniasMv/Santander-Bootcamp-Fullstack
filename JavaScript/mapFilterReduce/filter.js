const array = [1, 2, 3, 4, 5, 6];

function pares(n){
    return n % 2 == 0;
}
console.log(array.filter(pares));