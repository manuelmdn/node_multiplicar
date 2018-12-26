const opts = {
    base: {
        alias: 'b',
        demand: true,
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', { opts })
    .command('crear', 'crea un archivo de texto con la tabla de multiplicar', { opts })
    .help()
    .argv;

module.exports = {
    argv
}