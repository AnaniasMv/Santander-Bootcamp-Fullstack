//solução 1
/*
function verificaPalindromo(str) {
    if (!str) return "string inexistente";

    return str.split("").reverse().join("") === str;
}
*/

//solução 2

function verificaPalindromo2(str) {
    if (!str) return "string inexistente";
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("never odd or even"))



