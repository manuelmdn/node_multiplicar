const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('El valor introducido no es un número');
            return;
        }

        console.log(`==========`.yellow);
        console.log(`==========`.yellow);
        console.log(`Imprimiendo base ${base}`.yellow);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base * i}`.rainbow);
        }
        console.log(`==========`.yellow);
        console.log(`==========`.yellow);
    });
}
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${ base * i}\n`);
        }

        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}