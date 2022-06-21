function validarArray(arr, n) {
    try {
        if (!arr && !n) throw new ReferenceError('Envie os parametros');
        if (typeof arr !== 'object') throw new TypeError("array precisa ser do tipo object");
        if (typeof num !== 'number') throw new TypeError('precisa ser um numero');
        if (arr.length !== num) throw new RangeError('Tamanho inválido');
        return arr
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e)
        }
    }
}

console.log(validarArray());
