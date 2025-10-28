type ResultadoConversion = {
    valor: number,
    exito: boolean
}

function toEnteroPositivo(cadenaTexto: string): ResultadoConversion{
    const pattern = /^\d+$/
    const exito = pattern.test(cadenaTexto);
    const valor = parseInt(cadenaTexto);

    return{
        valor,
        exito
    }
}

function calcularDivisores(numero: number): Array<number>{
    const lista=[]
    for(let i=1; i<=numero; i++){
        if(numero%i ==0){
            lista.push(i);
        }
    }
    return lista;
}

export {toEnteroPositivo, calcularDivisores};