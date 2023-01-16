const matrizEspiralSentidoHorario = (n) => {
   
    // definiendo variables
   
    let contador = 1;
    let inicioFila = Math.floor(n / 2); 
    let inicioCol = Math.floor(n / 2); 
    let nlimiteFila = inicioFila;
    let nlimiteCol = inicioCol;
    console.log(inicioFila)
    let matriz = new Array(inicioCol);
    
    // generando dimension matriz segun n 

    for (let x = 0; x < n; x++) {
        matriz[x] = new Array(n);
    }

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            matriz[x][y] = 0;
        }
    }

    // rellenando matriz 
    
    while (contador <= (Math.pow(n, 2))) {
        //primer relleno 
        for (x = inicioCol; x <= nlimiteCol; x++) {
            matriz[inicioFila][x] = contador;
            contador++;
        }
        //Segundo relleno
        for (x = inicioFila + 1; x <= nlimiteFila; x++) {
            matriz[x][nlimiteCol] = contador;
            contador++;
        }
        //tercer relleno 
        for (x = nlimiteCol - 1; x >= inicioCol; x--) {
            matriz[nlimiteFila][x] = contador;
            contador++;
        }
        // cuarto relleno 
        for (x = nlimiteFila - 1; x > inicioFila; x--) {
            matriz[x][inicioCol] = contador;
            contador++;
        }

        inicioFila = inicioFila - 1;
        inicioCol = inicioCol - 1;
        nlimiteFila = nlimiteFila + 1;
        nlimiteCol = nlimiteCol + 1;
    }

    return matriz;
}

let matriz = matrizEspiralSentidoHorario(1003)

//funcion para sumar toda las diagonales

function sumaDiagonales(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
        suma += matriz[i][matriz.length - i - 1];
    }
    return suma - matriz[Math.floor(matriz.length/2)][Math.floor(matriz.length/2)]
}

console.log(sumaDiagonales(matriz))