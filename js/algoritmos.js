let proceso = []; //arreglo con los nombres de los procesos
let rcpu = []; //arreglo con las rafagas de CPU
let mix = []; //Arreglo con (tll, Quantums, Prioridad, etc), depende del tipo de algoritmo que vayas a usar
let repetidos = 0; ////Cuantos tiempos de llegada se repiten, ejem. 2 y 4
let arrayTllRepetidos = []; //Arreglo con la cantidad de cada tiempo de llamada reptidos ejem. 3 en tiempo 2 y 2 en tiempo 4
let tllInicial = 0; //Sirve para saber en que tll entró el primer proceso
let quant = 0; // Variable global del quantum en RR
let colores = ["rgb(63, 59, 108)" , "rgb(98, 79, 130)" , "rgb(108, 74, 182)" , "#14DB69", "#30FCD7", "#20BFE6", "#2485FF", "#FFA724", "#A8E620", "#2036E6", "#30FCD7", "#64DB14"];
function obtenDatos() {
  let padre = document.getElementById("contenido_tabla");
  let divConDatos = padre.childNodes;
  for (let i = 1; i < divConDatos.length; i++) {
    let datosDelDivPadre = divConDatos[i].childNodes; //Jalo todos los divs que tienen inputs
    for (let j = 0; j < datosDelDivPadre.length; j++) {
      //cada div tiene 3 inputs, los cuales guardan nombre, rcpu y (tll,Q etc)
      let dato = datosDelDivPadre[j].firstChild;
      if (dato.value == "") {
        console.log("Campos vacios");
        break;
      }
      //Voy guardando en arreglos los valores de cada input
      if (j == 0) {
        proceso.push(dato.value);
      } else {
        if (j == 1) {
          rcpu.push(parseInt(dato.value));
        } else {
          mix.push(parseInt(dato.value));
        }
      }
    }
  }
  //Si mi boton contiene el id de SRTF, realiza ese algoritmo
  let btn = document.getElementById("SRTF");
  if (btn.id != null) {
    proceosSRTF();
  }
}

function obtenDatosSJF() {
  let padre = document.getElementById("contenido_tabla");
  let divConDatos = padre.childNodes;
  for (let i = 1; i < divConDatos.length; i++) {
    let datosDelDivPadre = divConDatos[i].childNodes; //Jalo todos los divs que tienen inputs
    for (let j = 0; j < datosDelDivPadre.length; j++) {
      //cada div tiene 3 inputs, los cuales guardan nombre, rcpu y (tll,Q etc)
      let dato = datosDelDivPadre[j].firstChild;
      if (dato.value == "") {
        console.log("Campos vacios");
        break;
      }
      //Voy guardando en arreglos los valores de cada input
      if (j == 0) {
        proceso.push(dato.value);
      } else {
        if (j == 1) {
          rcpu.push(parseInt(dato.value));
        } else {
          mix.push(parseInt(dato.value));
        }
      }
    }
  }
  //Si mi boton contiene el id de SRTF, realiza ese algoritmo
  let btn = document.getElementById("SJF");
  if (btn.id != null) {
    procesoSJF();
  }
}

function obtenDatosRR() {
  let padre = document.getElementById("contenido_tabla");
  let divConDatos = padre.childNodes;
  for (let i = 1; i < divConDatos.length; i++) {
    let datosDelDivPadre = divConDatos[i].childNodes; //Jalo todos los divs que tienen inputs
    for (let j = 0; j < datosDelDivPadre.length; j++) {
      //cada div tiene 3 inputs, los cuales guardan nombre, rcpu y (tll,Q etc)
      let dato = datosDelDivPadre[j].firstChild;
      if (dato.value == "") {
        console.log("Campos vacios");
        break;
      }
      //Voy guardando en arreglos los valores de cada input
      if (j == 0) {
        proceso.push(dato.value);
      } else {
        if (j == 1) {
          rcpu.push(parseInt(dato.value));
        } else {
          if (i == 1) {
            quant = dato.value;
          }
        }
      }
    }
  }

  //Si mi boton contiene el id de SRTF, realiza ese algoritmo
  let btn = document.getElementById("RR");
  if (btn.id != null) {
    /*console.log (quant);
    for(let k=0; k<proceso.length; k++){
      console.log(proceso[k] + "\n");
      console.log(rcpu[k] + "\n");
    }*/
    procesoRR();
  }
}

function obtenDatosPP() {
  let padre = document.getElementById("contenido_tabla");
  let divConDatos = padre.childNodes;
  for (let i = 1; i < divConDatos.length; i++) {
    let datosDelDivPadre = divConDatos[i].childNodes; //Jalo todos los divs que tienen inputs
    for (let j = 0; j < datosDelDivPadre.length; j++) {
      //cada div tiene 3 inputs, los cuales guardan nombre, rcpu y (tll,Q etc)
      let dato = datosDelDivPadre[j].firstChild;
      if (dato.value == "") {
        console.log("Campos vacios");
        break;
      }
      //Voy guardando en arreglos los valores de cada input
      if (j == 0) {
        proceso.push(dato.value);
      } else {
        if (j == 1) {
          rcpu.push(parseInt(dato.value));
        } else {
          mix.push(parseInt(dato.value));
        }
      }
    }
  }
  //Si mi boton contiene el id de SRTF, realiza ese algoritmo
  let btn = document.getElementById("clsPP");
  if (btn.id != null) {
    procesoPP();
  }
}

function obtenDatosFIFO() {
  let padre = document.getElementById("contenido_tabla");
  let divConDatos = padre.childNodes;
  for (let i = 1; i < divConDatos.length; i++) {
    let datosDelDivPadre = divConDatos[i].childNodes; //Jalo todos los divs que tienen inputs
    for (let j = 0; j < datosDelDivPadre.length; j++) {
      //cada div tiene 3 inputs, los cuales guardan nombre, rcpu y (tll,Q etc)
      let dato = datosDelDivPadre[j].firstChild;
      if (dato.value == "") {
        console.log("Campos vacios");
        break;
      }
      //Voy guardando en arreglos los valores de cada input
      if (j == 0) {
        proceso.push(dato.value);
      } else {
        if (j == 1) {
          rcpu.push(parseInt(dato.value));
        } else {
          mix.push(parseInt(dato.value));
        }
      }
    }
  }
  //Si mi boton contiene el id de SRTF, realiza ese algoritmo
  let btn = document.getElementById("clsFIFO");
  if (btn.id != null) {
    procesoFIFO();
  }
}

function obtenDatosSJF() {
  let padre = document.getElementById("contenido_tabla");
  let divConDatos = padre.childNodes;
  for (let i = 1; i < divConDatos.length; i++) {
    let datosDelDivPadre = divConDatos[i].childNodes; //Jalo todos los divs que tienen inputs
    for (let j = 0; j < datosDelDivPadre.length; j++) {
      //cada div tiene 3 inputs, los cuales guardan nombre, rcpu y (tll,Q etc)
      let dato = datosDelDivPadre[j].firstChild;
      if (dato.value == "") {
        console.log("Campos vacios");
        break;
      }
      //Voy guardando en arreglos los valores de cada input
      if (j == 0) {
        proceso.push(dato.value);
      } else {
        if (j == 1) {
          rcpu.push(parseInt(dato.value));
        } else {
          mix.push(parseInt(dato.value));
        }
      }
    }
  }
  //Si mi boton contiene el id de SRTF, realiza ese algoritmo
  let btn = document.getElementById("clsSJF");
  if (btn.id != null) {
    procesoSJF();
  }
}

/////////////////////////////////////////////INICIO FUNCIONES ALGORITMO SRTF/////////////////////////////////////////////////////////////

function proceosSRTF() {
  let rafagasARestar = [];
  let datos_grafica = [];
  let acumulador = 0;
  let tllRepetidos = 0;
  let sinTllRepetidos = [];
  let datos_tabla = [];
  let tmesrtf = 0;
  //Creo un diccionario con todos los valores obtenidos, el dic tiene nombre,rcpu y tll del proceso
  for (let c = 0; c < proceso.length; c++) {
    datos_tabla.push(
      (dicc = {
        proceso: proceso[c],
        rafagas: parseInt(rcpu[c]),
        tll: parseInt(mix[c]),
      })
    );
  }
  //Ordeno el diccionario según el tiempo de llegada
  datos_tabla.sort((a, b) => a.tll - b.tll);
  //Si hay tiempo de llegada repetidos, los mando al final
  sinTllRepetidos = verificaTiempoLlegadasRepetidos(datos_tabla);
  datos_tabla.splice(0, datos_tabla.length);
  datos_tabla = sinTllRepetidos;
  arrayTllRepetidos.forEach((x) => datos_tabla.push(x));
  tllRepetidos = repetidos;
  console.log(datos_tabla);

  //Creo un array con la diferencia entre un proceso y su sucesor, a excepcion del ulitmo proceso
  for (let x = 0; x < datos_tabla.length - (1 + tllRepetidos); x++) {
    rafagasARestar.push(parseInt(datos_tabla[x + 1].tll - datos_tabla[x].tll));
  }
  //console.log(rafagasARestar)
  //Creo un diccionario que me servira para crear la grafica, en este diccionario guardo nombre del proceso y el numero de rafagas en se llevan acumuladas
  tllInicial = datos_tabla[0].tll;
  acumulador = acumulador + datos_tabla[0].tll;
  for (let y = 0; y < datos_tabla.length - (1 + tllRepetidos); y++) {
    datos_tabla[y].rafagas = datos_tabla[y].rafagas - rafagasARestar[y];
    acumulador = acumulador + rafagasARestar[y];
    if (datos_tabla[y].rafagas < 0) {
      datos_tabla[y].rafagas = 0;
    }
    if (y == 0) {
      datos_grafica.push(
        (dicc = {
          process: datos_tabla[y].proceso,
          cuenta: acumulador,
          espera: tllInicial,
        })
      );
    } else {
      datos_grafica.push(
        (dicc = {
          process: datos_tabla[y].proceso,
          cuenta: acumulador,
          espera: datos_grafica[y - 1].cuenta,
        })
      );
    }
  }
  //Elimino los procesos cuyas rafagas de cpu sean 0, ya que este proceso termino
  let newData = borraDatosTabla(datos_tabla);
  datos_tabla.splice(0, datos_tabla.length);
  datos_tabla = newData;
  let indices = 0;
  let nombreP;
  //Una vez que todos los procesos a excepcion del ulitmo, entra el que tiene menos rafagas
  while (datos_tabla.length != 0) {
    let tllMenor = 0;
    indices = obtenIndicesMinimos(datos_tabla);
    if (indices.length != 1) {
      for (let i = 0; i < indices.length - 1; i++) {
        if (datos_tabla[indices[i]].tll < datos_tabla[indices[i + 1]].tll) {
          tllMenor = indices[i];
        } else {
          tllMenor = indices[i + 1];
        }
      }
      acumulador = acumulador + datos_tabla[tllMenor].rafagas;
      datos_tabla[tllMenor].rafagas =
        datos_tabla[tllMenor].rafagas - datos_tabla[tllMenor].rafagas;
      nombreP = datos_tabla[tllMenor].proceso;
      datos_grafica.push(
        (dicc = {
          process: datos_tabla[tllMenor].proceso,
          cuenta: acumulador,
          espera: datos_grafica[datos_grafica.length - 1].cuenta,
        })
      );
    } else {
      acumulador = acumulador + datos_tabla[indices[0]].rafagas;
      datos_tabla[indices[0]].rafagas =
        datos_tabla[indices[0]].rafagas - datos_tabla[indices[0]].rafagas;
      nombreP = datos_tabla[indices[0]].proceso;
      datos_grafica.push(
        (dicc = {
          process: datos_tabla[indices[0]].proceso,
          cuenta: acumulador,
          espera: datos_grafica[datos_grafica.length - 1].cuenta,
        })
      );
    }
    let newData = borraDatosTabla(datos_tabla, nombreP);
    datos_tabla.splice(0, datos_tabla.length);
    datos_tabla = newData;
    console.log(datos_tabla);
  }
  for (let i = 0; i < datos_grafica.length; i++) {
    console.log(i + ": " + tmesrtf);
    tmesrtf = tmesrtf + datos_grafica[i].espera;
  }
  console.log(datos_grafica);
  console.log(datos_tabla);
  console.log("Indices:" + indices);
  generaGrafica(datos_grafica);
  console.log("GOLS");
  datosOperaciones(datos_grafica, tmesrtf);

  proceso = [];
  rcpu = [];
  mix = [];
  repetidos = 0;
  arrayTllRepetidos = [];
  tllInicial = 0;
}

function borraDatosTabla(datos_tabla) {
  let newDatos_tabla = datos_tabla.filter((item) => item.rafagas !== 0);
  return newDatos_tabla;
}

function obtenIndicesMinimos(datos_tabla) {
  let indices = [];
  let min = Math.min(...datos_tabla.map((x) => parseInt(x.rafagas)));
  for (let i = 0; i < datos_tabla.length; i++) {
    if (datos_tabla[i].rafagas == min) {
      indices.push(i);
    }
  }
  return indices;
}

function verificaTiempoLlegadasRepetidos(datos_tabla) {
  let duplicados = [];
  let newDT = [];
  let aux = [];
  const tempArray = [...datos_tabla].sort();

  for (let i = 0; i < tempArray.length - 1; i++) {
    //Creo un array con los elementos que se repitw su tll
    console.log(tempArray[i].tll);
    if (tempArray[i + 1].tll == tempArray[i].tll) {
      duplicados.push(tempArray[i]);
    }
  }
  repetidos = duplicados.length; //Cuantos tiempos de llegada se repiten, ejem. 2 y 4
  if (repetidos != 0) {
    for (let i = 0; i < duplicados.length; i++) {
      //por cada tiempo de llegada en el arreglo
      aux = datos_tabla.filter((item) => item.tll == duplicados[i].tll);
      //creo arreglo temporal con los objetos que tenga el tiempo de llegada repetido
      newDT = datos_tabla.filter((item) => item.tll !== duplicados[i].tll);
      //creo arreglo temporeal sin los objetos que tenga el tiempo de llegada repetido
      let min = Math.min(...aux.map((x) => parseInt(x.rafagas)));
      //De los los objetos con tiempo de llegada igual, saco la rafaga menor
      for (let j = 0; j < aux.length; j++) {
        //recorro el arreglo con los repetidos para saber cual es que tiene menor ragafas
        if (aux[j].rafagas != min) {
          // Si las rafgas son las mismas al menor de las rafagas
          let tllOriginal = aux[j].tll;
          //guardo el tiempo de llegada
          aux[j].tll = Number.MAX_SAFE_INTEGER;
          //incremento mucho el tiempode llegada
          aux.sort((a, b) => a.tll - b.tll);
          //acomo el arreglo para que el objeto que quiero sacar de la lista quede al ultimo
          pop = aux.pop();
          //lo saco de la lista
          pop.tll = tllOriginal;
          //le devuelvo su tiempo de llegada original
          arrayTllRepetidos.push(pop);
          //guardo el elemento eliminado
        }
      }
      newDT = newDT.concat(aux); //concateno las lista sin el elemento eliminado
    }
  }
  if (newDT.length == 0) {
    newDT = datos_tabla.slice();
    return newDT;
  } else {
    return newDT.sort((a, b) => a.tll - b.tll);
  }
}

/////////////////////////////////////////////FIN FUNCIONES ALGORITMO SRTF/////////////////////////////////////////////////////////////

/////////////////////////////////////////////INICIO ROUND ROBIN /////////////////////////////////////////////////////////////////

function procesoRR() {
  let buffer_proceso = [];
  let intervalosGrafica = [];
  intervalosGrafica[0] = 0;
  let rcpuM = rcpu[0];
  let procesoN = 0;
  let cont = 0;
  let tamInter = 0;
  let datos_grafica = [];
  let nombresGrafica = [];
  for (let i = 0; i < proceso.length; i++) {
    buffer_proceso[i] = rcpu[i];
    if (rcpu[i] > rcpuM) {
      rcpuM = rcpu[i];
      procesoN = i;
    }
    if (rcpuM == rcpu[0]) {
      procesoN = 0;
    }
    //console.log(buffer_proceso[i]);
  }
  let tmeRR = 0;

  while (buffer_proceso[procesoN] > 0) {
    for (let k = 0; k < proceso.length; k++) {
      if (buffer_proceso[k] > 0) {
        // la rafaga de CPU es mayor a 0
        if (buffer_proceso[k] >= quant) {
          // La rafaga de CPU es mayor al Quantum asignado
          buffer_proceso.splice(
            k,
            1,
            parseInt(buffer_proceso[k]) - parseInt(quant)
          ); // se le resta lo que tiene el buffer menos el quantum
          //buffer_proceso[k] = parseInt(buffer_proceso[k]) - parseInt(quant);
          if (cont == 0) {
            intervalosGrafica.splice(
              parseInt(k + 1),
              0,
              parseInt(intervalosGrafica[k]) + parseInt(quant)
            );
            nombresGrafica.splice(k, 0, proceso[k]);

            //intervalosGrafica[parseInt(k+1)]= parseInt(intervalosGrafica[k]) + parseInt(quant);
          } else {
            tamInter = parseInt(intervalosGrafica.length) - 1;
            intervalosGrafica.splice(
              parseInt(tamInter + 1),
              0,
              parseInt(intervalosGrafica[tamInter]) + parseInt(quant)
            );
            nombresGrafica.splice(parseInt(tamInter + 1), 0, proceso[k]);
            //intervalosGrafica[parseInt(tamInter + 1)] = parseInt(intervalosGrafica [tamInter]) + parseInt(quant);
          }
        } else {
          tamInter = parseInt(intervalosGrafica.length) - 1;
          intervalosGrafica.splice(
            parseInt(tamInter + 1),
            0,
            parseInt(intervalosGrafica[tamInter]) + parseInt(buffer_proceso[k])
          );
          nombresGrafica.splice(parseInt(tamInter + 1), 0, proceso[k]);
          //intervalosGrafica[parseInt(tamInter + 1)] = parseInt(intervalosGrafica [tamInter]) + parseInt(buffer_proceso[k]);
          buffer_proceso.splice(k, 1, "0");
        }
      }
    }
    cont++;
  }

  for (let s = 0; s < intervalosGrafica.length; s++) {
    console.log(intervalosGrafica[s]);
    console.log(nombresGrafica[s]);
  }

  for (let i = 0; i < proceso.length; i++) {
    tmeRR += intervalosGrafica[i];
  }

  tmeRR = parseFloat(tmeRR / proceso.length);

  for (let m = 0; m < intervalosGrafica.length - 1; m++) {
    datos_grafica.push(
      (dicc = {
        process: nombresGrafica[m],
        cuenta: intervalosGrafica[m + 1],
        espera: intervalosGrafica[m],
      })
    );
  }

  generaGrafica(datos_grafica);
  datosOperaciones2(datos_grafica, tmeRR);
  proceso = [];
  rcpu = [];
  mix = [];
  repetidos = 0;
  arrayTllRepetidos = [];
  tllInicial = 0;
}

/////////////////////////////////////////////FIN ROUND ROBIN////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////INICIO SJF ///////////////////////////////////////////////////////////
let indiceS = 0;
let nombreMenor;
let repetido = [];
let procesos = [];
let rafagas = [];
let tll = [];
let nombreProcesoRepetido;
let menorRafaga;
let datos = [];
let datos_grafica = [];

function procesoSJF() {
  let valorMenor = 0;
  let datos_tabla = [];
  let nombreProceso;

  let contador = 0;

  for (let c = 0; c < proceso.length; c++) {
    datos_tabla.push(
      (dicc = {
        proceso: proceso[c],
        rafagas: parseInt(rcpu[c]),
        tll: parseInt(mix[c]),
      })
    );
  }

  valorMenor = mix[0];
  nombreProceso = proceso[0];
  contador++;
  for (let i = 1; i < proceso.length; i++) {
    if (mix[i] < valorMenor) {
      valorMenor = mix[i];
      nombreProceso = proceso[i];
      indiceS = i;
    }
  }

  //agregamos el proceso con el menor tiempo de llegada
  procesos.splice(0, 0, proceso[indiceS]);
  rafagas.splice(0, 0, rcpu[indiceS]);
  tll.splice(0, 0, datos_tabla[indiceS].tll);
  datos.splice(0, 0, rcpu[indiceS]);
  //Borramos el proceso de menor tiempo de llegada
  let tablaNueva = borraDatosTabla(datos_tabla, nombreProceso);
  let repetido;
  while (tablaNueva.length != 0) {
    encontrarRcpuMenor(tablaNueva);
    repetido = verificarRepetido(tablaNueva, menorRafaga);
    if (repetido == false) {
      procesos.splice(procesos.length, 0, tablaNueva[indiceS].proceso);
      rafagas.splice(rafagas.length, 0, tablaNueva[indiceS].rafagas);
      tll.splice(rafagas.length, 0, tablaNueva[indiceS].tll);
      datos.splice(datos.length,0,parseInt(datos[datos.length - 1] + tablaNueva[indiceS].rafagas));
      tablaNueva = borraDatosTabla(tablaNueva, nombreMenor);
    } else {
      insertarRepetidos(tablaNueva, menorRafaga);
      tablaNueva = borraDatosTablaRafaga(tablaNueva, menorRafaga);
    }
  }

  

  let esperaM = [];
  //esperaM.splice(0, 0, 0);
  for (let a = 0; a < datos.length; a++) {
    esperaM.splice(esperaM.length, 0, (datos[a] - rafagas[a]) - tll[a]);
  }

  for (let c = 0; c < proceso.length; c++) {
    datos_grafica.push(
      (dicc = {
        process: procesos[c],
        cuenta: parseInt(datos[c]),
        espera: parseInt(esperaM[c]),
      })
    );
  }

  let tme = 0;
  for (let a = 0; a < datos.length; a++) {
    tme = tme + esperaM[a];
  }
  tme = tme / proceso.length;
  generaGrafica(datos_grafica);
  datosOperaciones2(datos_grafica, tme);
}

function verificarRepetido(datos_tabla, menorRafaga) {
  let rafaga = 0;
  let contador = 0;
  for (let j = 0; j < datos_tabla.length; j++) {
    if (menorRafaga == datos_tabla[j].rafagas) {
      contador++;
    }
  }

  if (contador > 1) {
    return true;
  } else {
    return false;
  }
}

function borraDatosTabla(datos_tabla, nombreProceso) {
  let newDatos_tabla = datos_tabla.filter(
    (item) => item.proceso !== nombreProceso
  );
  return newDatos_tabla;
}

function borraDatosTablaRafaga(datos_tabla, menorRafaga) {
  let newDatos_tabla = datos_tabla.filter(
    (item) => item.rafagas !== menorRafaga
  );
  return newDatos_tabla;
}

function encontrarRcpuMenor(datos_tabla) {
  menorRafaga = datos_tabla[0].rafagas;
  for (let s = 0; s < datos_tabla.length; s++) {
    if (datos_tabla[s].rafagas <= menorRafaga) {
      menorRafaga = datos_tabla[s].rafagas;
      nombreMenor = datos_tabla[s].proceso;
      indiceS = s;
    }
  }
}

function insertarRepetidos(tablaNueva, menorRafaga) {
  let nueva = tablaNueva.filter((item) => item.rafagas == menorRafaga);
  let indiceMenor = 0;
  let limite = nueva.length;
  for (let i = 0; i < limite; i++) {
    indiceMenor = encontrarTllMenor(nueva);
    procesos.splice(procesos.length, 0, nueva[indiceMenor].proceso);
    rafagas.splice(rafagas.length, 0, nueva[indiceMenor].rafagas);
    tll.splice(rafagas.length, 0, nueva[indiceMenor].tll);
    datos.splice(datos.length,0,parseInt(datos[datos.length - 1] + tablaNueva[indiceS].rafagas)
    );
    nueva = borraDatosTabla(nueva, nombreProcesoRepetido);
  }
}

function encontrarTllMenor(nueva_tabla) {
  let menor = nueva_tabla[0].tll;
  nombreProcesoRepetido = nueva_tabla[0].proceso;
  let indice = 0;
  for (let j = 0; j < nueva_tabla.length; j++) {
    if (nueva_tabla[j].tll < menor) {
      menor = nueva_tabla[j].tll;
      indice = j;
      nombreProcesoRepetido = nueva_tabla[j].proceso;
    }
  }
  return indice;
}

////////////////////////////////////////////FIN SJF ///////////////////////////////////////////////////////////
/////////////////////////////////////////////INICIO PP////////////////////////////////////////////////////////////////////////
function procesoPP() {
  let datos_tabla = [];
  let Atr = [];
  let Ate = [];
  let te = 0;
  let tr = 0;
  let totalAtr = 0;
  let totalAte = 0;
  let tme = 0;
  let tmr = 0;
  let graphArray = [];
  let tableArray = [];
  //Creo un diccionario con todos los valores obtenidos, el dic tiene nombre,rcpu y PP
  for (let c = 0; c < proceso.length; c++) {
    datos_tabla.push(
      (dicc = {
        proceso: proceso[c],
        rafagas: parseInt(rcpu[c]),
        pr: parseInt(mix[c]),
      })
    );
  }
  //Ordeno el diccionario segun PP
  datos_tabla.sort((a, b) => a.pr - b.pr);

  //Con forEach creo un ciclo hasta recorrer todos los elementos de las refagas para asignarlos a una matriz
  datos_tabla.forEach((element) => {
    tr = tr + element.rafagas;
    Atr.push(tr);
  });
  //Sumo la matriz con todos los elementos de tr para generar un total
  totalAtr = Atr.reduce((a, b) => a + b, 0);

  //Con for creo un ciclo para generar mi tiempo de espera(te) que es una resta de tr menos las rafagas y a su vez creo una matriz para mis te
  for (let y = 0; y < datos_tabla.length; y++) {
    te = Atr[y] - datos_tabla[y].rafagas;
    Ate.push(te);
  }
  //Sumo la matriz con todos los elementos de te para generar un total
  totalAte = Ate.reduce((a, b) => a + b, 0);
  //Calculo los valores tiempo medio de espera y tiempo medio de retorno
  tme = totalAte / datos_tabla.length;
  tmr = totalAtr / datos_tabla.length;

  //asigno los valores a la tabla
  for (let index = 0; index < Ate.length; index++) {
    graphArray.push({
      process: datos_tabla[index].proceso,
      cuenta: Atr[index],
      espera: Ate[index],
    });
  }
  //Asigno los valores a la tabla 
  for (let index = 0; index < Ate.length; index++) {
    tableArray.push({
      process: datos_tabla[index].proceso,
      cuenta: datos_tabla,
      espera: Ate[index],
    });
  }
  //Genero la grafica con mis datos
  generaGrafica(graphArray);
  datosOperaciones2(graphArray, tme);
  proceso = [];
  rcpu = [];
  mix = [];
  repetidos = 0;
  arrayTllRepetidos = [];
  tllInicial = 0;
}
/////////////////////////////////////////////FIN ROUND PP////////////////////////////////////////////////////////////////////////
//////////////////////////Inicio FIFO////////////////////////////////////////
function procesoFIFO() {
  let datos_tabla = [];
  let aux = [];
  let Atr = [];
  let Ate = [];
  let te = 0;
  let tr = 0;
  let totalAtr = 0;
  let totalAte = 0;
  let tme = 0;
  let tmr = 0;
  let graphArray = [];
  let tableArray = [];
  for (let c = 0; c < proceso.length; c++) {
    datos_tabla.push(
      (dicc = {
        proceso: proceso[c],
        rafagas: parseInt(rcpu[c]),
        tll: parseInt(mix[c]),
      })
    );
  }
  datos_tabla.sort(function (a, b) {
    if (a.tll > b.tll) return 1;
    if (a.tll < b.tll) return -1;

    if (a.rafagas > b.rafagas) return 1;
    if (a.rafagas < b.rafagas) return -1;
  });
  console.log(datos_tabla);
  tllInicial = datos_tabla[0].tll;
  tr = tllInicial;
  datos_tabla.forEach((element) => {
    tr = tr + element.rafagas;
    Atr.push(tr);
  });

  totalAtr = Atr.reduce((a, b) => a + b, 0);
  for (let y = 0; y < datos_tabla.length; y++) {
    te = Atr[y] - datos_tabla[y].rafagas;
    Ate.push(te);
  }
  totalAte = Ate.reduce((a, b) => a + b, 0);
  tme = totalAte / datos_tabla.length;
  tmr = totalAtr / datos_tabla.length;

  for (let index = 0; index < Ate.length; index++) {
    graphArray.push({
      process: datos_tabla[index].proceso,
      cuenta: Atr[index],
      espera: Ate[index],
    });
  }
  for (let index = 0; index < Ate.length; index++) {
    tableArray.push({
      process: datos_tabla[index].proceso,
      cuenta: datos_tabla,
      espera: Ate[index],
    });
  }
  generaGrafica(graphArray);
  datosOperaciones(graphArray, tme);
  proceso = [];
  rcpu = [];
  mix = [];
  repetidos = 0;
  arrayTllRepetidos = [];
  tllInicial = 0;
}

//FIN FIFO////////////

//Genera la tabla de procesos,necesita un arreglo de objetos con los identificadores process y cuenta, revisar linea 81 o la funcion proceosSRTF
function generaGrafica(elementos) {
  if (document.getElementById("contenedor_grafica") == null) {
    console.log("Pipri: " + document.getElementById("contenedor_grafica"));
    let contenedor_contenido = document.getElementById("contenedor_contenido");
    let espacio_grafica = document.createElement("div");
    espacio_grafica.classList.add("espacio_grafica");
    espacio_grafica.id = "espacio_grafica";

    let contenedor_grafica = document.createElement("div");
    contenedor_grafica.classList.add("contenedor_grafica");
    contenedor_grafica.id = "contenedor_grafica";
    let numeros = document.createElement("div");
    numeros.classList.add("numeros");
    numeros.id = "numeros";

    let numAleat;
    let div;
    for (let i = 0; i < elementos.length; i++) {
      
      //Generacion de numero aleatorio para el color del div
      
      console.log(numAleat);
      let contenedor_elemento = document.createElement("div");
      contenedor_elemento.classList.add("contenedor_elemento");

      let label = document.createElement("div");
      label.classList.add("label");
      label.innerText = elementos[i].process;
      let barra = document.createElement("div");
      barra.classList.add("barra");
      contenedor_elemento.appendChild(label);
      contenedor_elemento.appendChild(barra);
      espacio_grafica.appendChild(contenedor_elemento);
      div=document.getElementsByClassName("barra");
      
      
      
      
      let numero_x_par = document.createElement("div");
      numero_x_par.classList.add("numeros_por_par");
      if (i == 0) {
        let ni = document.createElement("div");
        ni.classList.add("numero_inicial");
        ni.innerHTML = tllInicial;
        let nf = document.createElement("div");
        nf.classList.add("numero_final");
        nf.innerHTML = elementos[i].cuenta;
        numero_x_par.appendChild(ni);
        numero_x_par.appendChild(nf);
      } else {
        let nff = document.createElement("div");
        nff.classList.add("numero_final_final");
        nff.innerHTML = elementos[i].cuenta;
        numero_x_par.appendChild(nff);
      }
      numeros.appendChild(numero_x_par);
      console.log(div);
      
      
    }
    
    contenedor_grafica.appendChild(espacio_grafica);
    contenedor_grafica.appendChild(numeros);
    contenedor_contenido.appendChild(contenedor_grafica);
    for(let j=0; j<div.length; j++){
      numAleat = Math.floor(Math.random() * 12);
      console.log(numAleat);
      div[j].style.backgroundColor = colores[numAleat];
    }
  }
}

function datosOperaciones(tabla_grafica, tiempoEspera) {
  let tme = 0;
  let acumulador_tme = 0;
  let tmr = 0;
  let acumulador_tmr = 0;
  console.log(tabla_grafica);
  console.log(tiempoEspera);
  let operaciones = document.getElementById("operaciones");

  let operaciones_datos = document.createElement("div");
  operaciones_datos.classList.add("operaciones_datos");
  operaciones_datos.id = "operaciones_datos";

  let operaciones_boton = document.createElement("div");
  operaciones_boton.classList.add("operaciones_boton");
  operaciones_boton.id = "operaciones_boton";
  let limpiar = document.createElement("div");
  limpiar.classList.add("limpiar");
  let a = document.createElement("a");
  a.classList.add("ov-btn-grow-skew");
  a.innerHTML = "LIMPIA TODO";
  a.href = "#";
  a.onclick = eliminaTodo;
  limpiar.appendChild(a);
  operaciones_boton.appendChild(limpiar);

  let TR = document.createElement("div");
  TR.classList.add("TR");

  let TR_titulos = document.createElement("div");
  TR_titulos.classList.add("TR_titulos");
  let tr_proceso = document.createElement("div");
  tr_proceso.classList.add("tr_proceso");
  tr_proceso.innerHTML = "Proceso";
  let tr_tr = document.createElement("div");
  tr_tr.classList.add("tr_tr");
  tr_tr.innerHTML = "TiempoRetorno";

  TR_titulos.appendChild(tr_proceso);
  TR_titulos.appendChild(tr_tr);
  TR.appendChild(TR_titulos);

  for (let i = 0; i < proceso.length; i++) {
    let TR_datos = document.createElement("div");
    TR_datos.classList.add("TR_datos");
    tr_proceso = document.createElement("div");
    tr_proceso.classList.add("tr_proceso");
    tr_proceso.innerHTML = proceso[i];
    tr_tr = document.createElement("div");
    tr_tr.classList.add("tr_tr");

    let tr = tabla_grafica.filter((item) => item.process == proceso[i]);
    acumulador_tmr = acumulador_tmr + parseFloat(tr[tr.length - 1].cuenta);
    console.log("TR " + i + ": " + acumulador_tmr);
    tr_tr.innerHTML = tr[tr.length - 1].cuenta;
    TR_datos.appendChild(tr_proceso);
    TR_datos.appendChild(tr_tr);
    TR.appendChild(TR_datos);
  }
  operaciones_datos.appendChild(TR);
  operaciones.appendChild(operaciones_datos);

  let TE = document.createElement("div");
  TE.classList.add("TE");
  let TE_titulos = document.createElement("div");
  TE_titulos.classList.add("TE_titulos");
  let te_proceso = document.createElement("div");
  te_proceso.classList.add("te_proceso");
  te_proceso.innerHTML = "Proceso";
  let te_te = document.createElement("div");
  te_te.classList.add("te_te");
  te_te.innerHTML = "TiempoEspera";

  TE_titulos.appendChild(te_proceso);
  TE_titulos.appendChild(te_te);
  TE.appendChild(TE_titulos);
  for (let i = 0; i < proceso.length; i++) {
    let TE_datos = document.createElement("div");
    TE_datos.classList.add("TE_datos");
    te_proceso = document.createElement("div");
    te_proceso.classList.add("te_proceso");
    te_te = document.createElement("div");
    te_te.classList.add("te_te");

    let te = tabla_grafica.filter((item) => item.process == proceso[i]);
    acumulador_tme = acumulador_tme + parseFloat(te[0].espera - mix[i]);

    te_proceso.innerHTML = te[0].process;
    te_te.innerHTML = te[0].espera;

    TE_datos.appendChild(te_proceso);
    TE_datos.appendChild(te_te);
    TE.appendChild(TE_datos);
  }
  //if (tiempoEspera != null) tme = tiempoEspera;
  //else
  tme = parseFloat(acumulador_tme / proceso.length);
  tmr = parseFloat(acumulador_tmr / proceso.length);
  operaciones_datos.appendChild(TE);
  operaciones.appendChild(operaciones_datos);
  operaciones.appendChild(operaciones_boton);

  let TM = document.createElement("div");
  TM.classList.add("Tiempos_medios");

  let TME = document.createElement("div");
  TME.classList.add("TME");
  let TME_t = document.createElement("div");
  TME_t.classList.add("TME_titulo");
  TME_t.innerHTML = "Tiempo Medio de Espera";
  TME.appendChild(TME_t);

  let TME_d = document.createElement("div");
  TME_d.classList.add("TME_dato");
  TME_d.innerHTML = parseFloat(tme).toFixed(2) + " ut";

  TME.appendChild(TME_d);
  TM.appendChild(TME);

  let TMR = document.createElement("div");
  TMR.classList.add("TMR");
  let TMR_t = document.createElement("div");
  TMR_t.classList.add("TMR_titulo");
  TMR_t.innerHTML = "Tiempo Medio de Retorno";
  TMR.appendChild(TMR_t);

  let TMR_d = document.createElement("div");
  TMR_d.classList.add("TMR_dato");
  TMR_d.innerHTML = parseFloat(tmr).toFixed(2) + " ut";

  TMR.appendChild(TMR_d);
  TM.appendChild(TMR);

  operaciones_datos.appendChild(TM);
  acumulador_tme = 0;
  acumulador_tmr = 0;
}


function datosOperaciones2(tabla_grafica, tiempoEspera) {
  let tme = 0;
  let acumulador_tme = 0;
  let tmr = 0;
  let acumulador_tmr = 0;
  console.log(tabla_grafica);
  console.log(tiempoEspera);
  let operaciones = document.getElementById("operaciones");

  let operaciones_datos = document.createElement("div");
  operaciones_datos.classList.add("operaciones_datos");
  operaciones_datos.id = "operaciones_datos";

  let operaciones_boton = document.createElement("div");
  operaciones_boton.classList.add("operaciones_boton");
  operaciones_boton.id = "operaciones_boton";
  let limpiar = document.createElement("div");
  limpiar.classList.add("limpiar");
  let a = document.createElement("a");
  a.classList.add("ov-btn-grow-skew");
  a.innerHTML = "LIMPIA TODO";
  a.href = "#";
  a.onclick = eliminaTodo;
  limpiar.appendChild(a);
  operaciones_boton.appendChild(limpiar);

  let TR = document.createElement("div");
  TR.classList.add("TR");

  let TR_titulos = document.createElement("div");
  TR_titulos.classList.add("TR_titulos");
  let tr_proceso = document.createElement("div");
  tr_proceso.classList.add("tr_proceso");
  tr_proceso.innerHTML = "Proceso";
  let tr_tr = document.createElement("div");
  tr_tr.classList.add("tr_tr");
  tr_tr.innerHTML = "TiempoRetorno";

  TR_titulos.appendChild(tr_proceso);
  TR_titulos.appendChild(tr_tr);
  TR.appendChild(TR_titulos);

  for (let i = 0; i < proceso.length; i++) {
    let TR_datos = document.createElement("div");
    TR_datos.classList.add("TR_datos");
    tr_proceso = document.createElement("div");
    tr_proceso.classList.add("tr_proceso");
    tr_proceso.innerHTML = proceso[i];
    tr_tr = document.createElement("div");
    tr_tr.classList.add("tr_tr");

    let tr = tabla_grafica.filter((item) => item.process == proceso[i]);
    acumulador_tmr = acumulador_tmr + parseFloat(tr[tr.length - 1].cuenta);
    console.log("TR " + i + ": " + acumulador_tmr);
    tr_tr.innerHTML = tr[tr.length - 1].cuenta;
    TR_datos.appendChild(tr_proceso);
    TR_datos.appendChild(tr_tr);
    TR.appendChild(TR_datos);
  }
  operaciones_datos.appendChild(TR);
  operaciones.appendChild(operaciones_datos);

  let TE = document.createElement("div");
  TE.classList.add("TE");
  let TE_titulos = document.createElement("div");
  TE_titulos.classList.add("TE_titulos");
  let te_proceso = document.createElement("div");
  te_proceso.classList.add("te_proceso");
  te_proceso.innerHTML = "Proceso";
  let te_te = document.createElement("div");
  te_te.classList.add("te_te");
  te_te.innerHTML = "TiempoEspera";

  TE_titulos.appendChild(te_proceso);
  TE_titulos.appendChild(te_te);
  TE.appendChild(TE_titulos);
  for (let i = 0; i < proceso.length; i++) {
    let TE_datos = document.createElement("div");
    TE_datos.classList.add("TE_datos");
    te_proceso = document.createElement("div");
    te_proceso.classList.add("te_proceso");
    te_te = document.createElement("div");
    te_te.classList.add("te_te");

    let te = tabla_grafica.filter((item) => item.process == proceso[i]);
    //acumulador_tme = acumulador_tme + parseFloat(te[0].espera - mix[i]);

    te_proceso.innerHTML = te[0].process;
    te_te.innerHTML = te[0].espera;

    TE_datos.appendChild(te_proceso);
    TE_datos.appendChild(te_te);
    TE.appendChild(TE_datos);
  }
  //if (tiempoEspera != null) tme = tiempoEspera;
  //else
  tme = parseFloat(tiempoEspera);
  tmr = parseFloat(acumulador_tmr / proceso.length);
  operaciones_datos.appendChild(TE);
  operaciones.appendChild(operaciones_datos);
  operaciones.appendChild(operaciones_boton);

  let TM = document.createElement("div");
  TM.classList.add("Tiempos_medios");

  let TME = document.createElement("div");
  TME.classList.add("TME");
  let TME_t = document.createElement("div");
  TME_t.classList.add("TME_titulo");
  TME_t.innerHTML = "Tiempo Medio de Espera";
  TME.appendChild(TME_t);

  let TME_d = document.createElement("div");
  TME_d.classList.add("TME_dato");
  TME_d.innerHTML = parseFloat(tme).toFixed(2) + " ut";

  TME.appendChild(TME_d);
  TM.appendChild(TME);

  let TMR = document.createElement("div");
  TMR.classList.add("TMR");
  let TMR_t = document.createElement("div");
  TMR_t.classList.add("TMR_titulo");
  TMR_t.innerHTML = "Tiempo Medio de Retorno";
  TMR.appendChild(TMR_t);

  let TMR_d = document.createElement("div");
  TMR_d.classList.add("TMR_dato");
  TMR_d.innerHTML = parseFloat(tmr).toFixed(2) + " ut";

  TMR.appendChild(TMR_d);
  TM.appendChild(TMR);

  operaciones_datos.appendChild(TM);
  acumulador_tme = 0;
  acumulador_tmr = 0;
}

function eliminaTodo() {
  if (document.getElementById("espacio_grafica") != null) {
    let padre = document.getElementById("contenedor_grafica");
    padre.childNodes.forEach((x) => {
      padre.removeChild(x);
    });
    let espacio_grafica = document.getElementById("espacio_grafica");
    let numeros = document.getElementById("numeros");
    padre.removeChild(espacio_grafica);
    padre.removeChild(numeros);
    let operaciones = document.getElementById("operaciones");
    let operaciones_hijo = document.getElementById("operaciones_datos");
    let operaciones_hijo_2 = document.getElementById("operaciones_boton");
    operaciones.removeChild(operaciones_hijo);
    operaciones.removeChild(operaciones_hijo_2);
  }
}
