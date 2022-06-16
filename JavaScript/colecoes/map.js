function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('lucas', 'Admin');
usuarios.set('roberto', 'Admin');
usuarios.set('matheus', 'user');

console.log(getAdmins(usuarios));