var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

document.getElementById("adicionar").addEventListener("click", function () {
    if (this.id == 'adicionar') {
        currentNumber = currentNumber + 1;
    }
    currentNumberWrapper.innerHTML = currentNumber;
});


document.getElementById("subtrair").addEventListener("click", function () {
    if (this.id == 'subtrair') {
        currentNumber = currentNumber - 1;
    }
    currentNumberWrapper.innerHTML = currentNumber;
});





