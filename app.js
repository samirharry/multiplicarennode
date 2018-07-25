const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch( comando ){

    case 'listar' :
        console.log('Listar');

        listarTabla(argv.base,argv.limite);
    break;
    case 'crear' :
        console.log('Crear');
        
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log('Archivo creado:', `${archivo}`.green))
            .catch(e => console.log(e)); 
    break;
    default:
        console.log('Comando no reconocido');
        
}

//console.log( process.argv );

/* let parametro=argv[2];
let base = parametro.split('=')[1]; 
*/