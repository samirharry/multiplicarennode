// Requires 
const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo = (base) => {

let listarTabla = (base,limite = 10)=>{
    console.log('==================='.green);
    console.log(`==tabla del ${base}===`.green);
    console.log('==================='.green);

    for(let i=1;i<=limite;i++){
        console.log(`${base}*${i}=${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve,reject) => {

        if (!Number(base)) {
            reject(`El valor introducido como base: ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido como limite: ${limite} no es un número`);
            return;
        }
        let data = '';
        
        for(let i=1; i<=limite;i++){
            let result=base*i;
            data += `${base}*${i} = ${result}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`,data,(err)=>{

            if(err) reject(err);
            else {
                resolve(`tabla-${base}-${limite}.txt`);
            }
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}; 