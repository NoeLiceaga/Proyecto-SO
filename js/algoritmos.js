let proceso = []; //arreglo con los nombres de los procesos
let rcpu = []; //arreglo con las rafagas de CPU
let mix = []; //Arreglo con (tll, Quantums, Prioridad, etc), depende del tipo de algoritmo que vayas a usar
let repetidos = 0; ////Cuantos tiempos de llegada se repiten, ejem. 2 y 4
let arrayTllRepetidos = []; //Arreglo con la cantidad de cada tiempo de llamada reptidos ejem. 3 en tiempo 2 y 2 en tiempo 4
let tllInicial = 0; //Sirve para saber en que tll entró el primer proceso
let quant = 0; // Variable global del quantum en RR

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

/////////////////////////////////////////////INICIO FUNCIONES ALGORITMO SRTF/////////////////////////////////////////////////////////////

function proceosSRTF() {
  let rafagasARestar = [];
  let datos_grafica = [];
  let acumulador = 0;
  let tllRepetidos = 0;
  let sinTllRepetidos = [];
  let datos_tabla = [];
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
      datos_grafica.push(
        (dicc = {
          process: datos_tabla[indices[0]].proceso,
          cuenta: acumulador,
          espera: datos_grafica[datos_grafica.length - 1].cuenta,
        })
      );
    }
    let newData = borraDatosTabla(datos_tabla);
    datos_tabla.splice(0, datos_tabla.length);
    datos_tabla = newData;
    console.log(datos_tabla);
  }

  console.log(datos_grafica);
  console.log(datos_tabla);
  console.log("Indices:" + indices);
  generaGrafica(datos_grafica);
  datosOperaciones(datos_grafica);

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
  for (let i = 0; i < proceso.length; i++) {
    buffer_proceso[i] = rcpu[i];
    if (rcpu[i] > rcpuM) {
      rcpuM = rcpu[i];
      procesoN = i;
    }
    if (rcpuM == rcpu[0]) {
      procesoN = 0;
    }
    console.log(buffer_proceso[i]);
    console.log(procesoN);
  }
  while (buffer_proceso[procesoN] > 0) {
    for (let k = 0; k < proceso.length; k++) {
      if (buffer_proceso[k] > 0) {
        if (buffer_proceso[k] > quant) {
          buffer_proceso[k] = buffer_proceso[k] - quant;
          if (cont == 0) {
            intervalosGrafica[k + 1] = intervalosGrafica[k + 1] + quant;
          } else {
            tamInter = intervalosGrafica.length;
            intervalosGrafica[tamInter + 1] =
              intervalosGrafica[tamInter + 1] + quant;
          }
        } else {
          tamInter = intervalosGrafica.length;
          intervalosGrafica[tamInter + 1] =
            intervalosGrafica[tamInter + 1] + buffer_proceso[k];
          buffer_proceso[k] = 0;
        }
      }
    }
    cont++;
  }

  for (let s = 0; s < intervalosGrafica.length; s++) {
    console.log(intervalosGrafica[s] + " ");
  }
  proceso = [];
  rcpu = [];
  mix = [];
}

/////////////////////////////////////////////FIN ROUND ROBIN////////////////////////////////////////////////////////////////////////

//Genera la tabla de procesos,necesita un arreglo de objetos con los identificadores process y cuenta, revisar linea 81 o la funcion proceosSRTF
function generaGrafica(elementos) {
  if (document.getElementById("contenedor_grafica") == null) {
    let contenedor_contenido = document.getElementById("contenedor_contenido");
    let espacio_grafica = document.createElement("div");
    espacio_grafica.classList.add("espacio_grafica");

    let contenedor_grafica = document.createElement("div");
    contenedor_grafica.classList.add("contenedor_grafica");
    contenedor_grafica.id = "contenedor_grafica";
    let numeros = document.createElement("div");
    numeros.classList.add("numeros");

    for (let i = 0; i < elementos.length; i++) {
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
    }

    contenedor_grafica.appendChild(espacio_grafica);
    contenedor_grafica.appendChild(numeros);
    contenedor_contenido.appendChild(contenedor_grafica);
  }
}

function datosOperaciones(tabla_grafica) {
  let tme = 0;
  let acumulador_tme = 0;
  let tmr = 0;
  let acumulador_tmr = 0;
  let operaciones = document.getElementById("operaciones");

  let operaciones_datos = document.createElement("div");
  operaciones_datos.classList.add("operaciones_datos");

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
  tme = parseFloat(acumulador_tme / proceso.length);
  tmr = parseFloat(acumulador_tmr / proceso.length);
  operaciones_datos.appendChild(TE);
  operaciones.appendChild(operaciones_datos);

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
}
