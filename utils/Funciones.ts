type ResultadoConversion = {
  valor: number;
  exito: boolean;
};

function toEnteroPositivo(cadenaTexto: string): ResultadoConversion {
  const pattern = /^\d+$/;
  const exito = pattern.test(cadenaTexto);
  const valor = parseInt(cadenaTexto);

  return {
    valor,
    exito,
  };
}

async function calcularDivisores(numero: number): Promise<Array<number>> {
  return new Promise((resolve, reject) => {
    const lista = [];
    for (let i = 1; i <= numero; i++) {
      if (numero % i == 0) {
        lista.push(i);
      }
    }
    resolve(lista);
  });
}

export { toEnteroPositivo, calcularDivisores };
