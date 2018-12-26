const { crearArchivo, listarTabla } = require('./tabla/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(() => console.log(`Tabla creada`))
            .catch(err => console.log(err.red));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`.rainbow))
            .catch(err => console.log(err.red));
        break;
    default:
        console.log('Método no reconocido');
        break;

}
//let argv2 = process.argv;
//let param = argv2[2];

//console.log(param);