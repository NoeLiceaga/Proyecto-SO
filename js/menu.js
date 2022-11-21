let seccion = "";
let num_tablas = 0;

function agregar() {
  //agregar otra columna a la tabla de datos
  let contenedor = document.getElementById("contenido_tabla");
  let divProceso = document.createElement("div");
  let divRCPU = document.createElement("div");
  let divTLL = document.createElement("div");
  let divDatos = document.createElement("div");
  let x = contenedor.childNodes;
  let i = x[1].firstChild.firstChild.id;
  console.log(i);
  i = parseInt(i) + 1;
  let inputProceso = document.createElement("input");
  let inputRCPU = document.createElement("input");
  let inputTLL = document.createElement("input");
  inputProceso.id = i;
  inputRCPU.type = "number";
  inputTLL.type = "number";

  divProceso.appendChild(inputProceso);
  divRCPU.appendChild(inputRCPU);
  divTLL.appendChild(inputTLL);

  divDatos.appendChild(divProceso);
  divDatos.appendChild(divRCPU);
  divDatos.appendChild(divTLL);
  divDatos.classList.add("contenido_tabla_datos");
  contenedor.appendChild(divDatos);
}

function agregarRR() {
  //agregar otra columna a la tabla de datos
  let contenedor = document.getElementById("contenido_tabla");
  let divProceso = document.createElement("div");
  let divRCPU = document.createElement("div");
  let divDatos = document.createElement("div");
  let x = contenedor.childNodes;
  let i = x[1].firstChild.firstChild.id;
  console.log(i);
  i = parseInt(i) + 1;
  let inputProceso = document.createElement("input");
  let inputRCPU = document.createElement("input");

  inputProceso.id = i;
  inputRCPU.type = "number";

  divProceso.appendChild(inputProceso);
  divRCPU.appendChild(inputRCPU);

  divDatos.appendChild(divProceso);
  divDatos.appendChild(divRCPU);

  divDatos.classList.add("contenido_tabla_datos");
  contenedor.appendChild(divDatos);
}

function eliminar() {
  //elimina la ultima fila de la tabla datos
  let contenedor = document.getElementById("contenido_tabla");
  if (contenedor.childElementCount != 2) {
    let hijo = contenedor.lastChild;
    hijo.remove();
  }
}

//function creaTodos() {
//  let base = document.getElementById("contenedor_contenido");
//  let contenedorPadre = document.getElementById("contenedor");
//  let copia = base.cloneNode(true);
//  contenedorPadre.appendChild(copia);
//}

function creaTabla(tipo, nombreTabla, tipoTabla) {
  //se genera la tabla de acuerdo a los parametros que se mandan
  if (document.getElementById("contenedor_contenido") == null) {
    let padre = document.getElementById("contenedor");
    let opciones = ["Proceso", "RCPU"];
    let contenedor_contenido = document.createElement("div");
    contenedor_contenido.classList.add("contenedor_contenido");
    contenedor_contenido.id = "contenedor_contenido";

    let contenido_principal = document.createElement("div");
    contenido_principal.classList.add("contenido_principal");

    let contenedor_seleccion_titulo = document.createElement("div");
    contenedor_seleccion_titulo.innerText = nombreTabla;
    contenedor_seleccion_titulo.classList.add("contenido_seleccion_titulo");

    let contenido = document.createElement("div");
    contenido.classList.add("contenido");

    let accion = document.createElement("div");
    accion.classList.add("accion");
    let agrega = document.createElement("div");
    agrega.classList.add("agrega");
    let a = document.createElement("a");

    let img_agrega = document.createElement("img");
    img_agrega.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABRUlEQVRIS7VUgQ2CMBCEDXQD3EAnECdQN9ANdAJ1At1AnECdQDfQDWQD3UDvCCX1gfIQaHJp0n7vvv/X+l7Hw++Y39MIhEhiCnAO0oRizE/gClxcSboEhji4AWYVt6TQHKBobpQJLBC5B3o1SrhG7EHGFwmsUvIa3FloTkQKsMaPmpnLREZpf5J1KXDDWuhI3cR/HTHsxcDs2wJs5rmiLhoBUiyBSN7giAU21zW0ArQunfVXItae1mxD4AOSvhR4YSEQ7JqHyCOyJ4UCbwRK3zcVyJK3CdosUQyFxEm2QOdNbtOmdFDyCcoaV5VJY1N+fhOAjc4J0EV0U9NBUmZ/NwRtf3Y7EG/t7MpsWPdHZeYkj0xpXDcwe3zVdFbV62bN+fdwzg3NQ1rg1BgIAfaI2RIxcALolqShTQXKzqrWNTdQEZUF/QCeMT0ZpW2J7wAAAABJRU5ErkJggg==";
    a.appendChild(img_agrega);
    let texto_agrega = document.createElement("h3");
    texto_agrega.textContent = "Agregar";
    agrega.appendChild(a);
    agrega.appendChild(texto_agrega);
    let quita = document.createElement("div");
    quita.classList.add("quita");
    let aq = document.createElement("a");

    let img_quitar = document.createElement("img");
    img_quitar.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABPUlEQVRIS7VUgRGCMAyEDXQD3EAnECdQN8ANdAJ1At1AnECdQDfQDWQD3UD/OcrVQKFgyd1fsSb5NPnW9zo2v+P8ng1BiCKmANcgKyjB+gAuwLmqyCqCIQLXwKzmlCSaAyQtmIkggucO6DVo4Qq+e+lfRrDMkjfInbsWSCQBe3xvWLksZJTNJ92XBFfshW1K12I4i4H6rRNwmKc/k6vwBT5ieYIDNjhcF0bpUlk/LWLvKU0X9kaSviR4YiMQ2W0uIkM+Iq6U4AUnqfu2BHnxegKXLUrAkCpJJ+h8yC5lSgWlj6DssYs28fGbABx0gYAqopraGpOy+ptK4Pqx2yLxRq/OJMOmLyorZ/JYtabqBOo/3moqq+52s+d8e7gWzOYiRYgaAyHAGbFaIgGOANWSDrQtgSnWat/mBFaJTE5fd9U1GSnV1ZQAAAAASUVORK5CYII=";
    aq.appendChild(img_quitar);
    let texto_quita = document.createElement("h3");
    texto_quita.textContent = "Eliminar";
    quita.appendChild(aq);
    quita.appendChild(texto_quita);
    accion.appendChild(agrega);
    accion.appendChild(quita);

    let boton = document.createElement("div");
    boton.classList.add("boton");
    boton.innerText = "GENERAR";
    boton.id = tipoTabla;
    if (tipoTabla == "RR") {
      boton.onclick = obtenDatosRR;
    }
    if (tipoTabla == "SRTF") {
      boton.onclick = obtenDatos;
    }

    contenido.appendChild(accion);

    let contenido_titulo = document.createElement("div");
    contenido_titulo.classList.add("contenido_titulo");
    let textto_ct = document.createElement("h3");
    textto_ct.textContent = "Datos";
    contenido_titulo.appendChild(textto_ct);

    contenido.appendChild(contenido_titulo);

    let contenido_tabla = document.createElement("div");
    contenido_tabla.classList.add("contenido_tabla");
    contenido_tabla.id = "contenido_tabla";
    0;
    let contenido_tabla_titulo = document.createElement("div");
    contenido_tabla_titulo.classList.add("contenido_tabla_titulo");
    for (let i = 0; i < 2; i++) {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.textContent = opciones[i];
      div.appendChild(h2);
      contenido_tabla_titulo.appendChild(div);
    }
    let variacion = document.createElement("div");
    let h2_variacion = document.createElement("h2");
    h2_variacion.textContent = tipo;
    variacion.appendChild(h2_variacion);

    contenido_tabla_titulo.appendChild(variacion);
    contenido_tabla.appendChild(contenido_tabla_titulo);

    let contenido_tabla_datos = document.createElement("div");
    contenido_tabla_datos.classList.add("contenido_tabla_datos");
    contenido_tabla_datos.id = "contenido_tabla_datos";
    let div_ctd_1 = document.createElement("div");
    let input_1 = document.createElement("input");
    input_1.id = "1";
    let div_ctd_2 = document.createElement("div");
    let input_2 = document.createElement("input");
    input_2.type = "number";
    let div_ctd_3 = document.createElement("div");
    let input_3 = document.createElement("input");

    input_3.type = "number";

    div_ctd_1.appendChild(input_1);
    div_ctd_2.appendChild(input_2);
    div_ctd_3.appendChild(input_3);
    contenido_tabla_datos.appendChild(div_ctd_1);
    contenido_tabla_datos.appendChild(div_ctd_2);
    contenido_tabla_datos.appendChild(div_ctd_3);
    contenido_tabla.appendChild(contenido_tabla_datos);

    contenido.appendChild(contenido_tabla);
    contenido.appendChild(boton);
    contenido_principal.appendChild(contenido);
    let operaciones = document.createElement("div");
    operaciones.classList.add("operaciones");
    operaciones.id = "operaciones";

    let operaciones_titulo = document.createElement("div");
    operaciones_titulo.classList.add("operaciones_titulo");
    operaciones_titulo.innerHTML = "DATOS OPERACIONES";

    operaciones.appendChild(operaciones_titulo);

    contenido_principal.appendChild(operaciones);
    contenedor_contenido.appendChild(contenedor_seleccion_titulo);
    contenedor_contenido.appendChild(contenido_principal);

    padre.appendChild(contenedor_contenido);
    if (tipoTabla == "RR") {
      a.onclick = agregarRR;
      input_3.id = "Quantum";
    }
    if (tipoTabla == "SRTF") {
      a.onclick = agregar;
    }

    aq.onclick = eliminar;
  } else {
    let padre = document.getElementById("contenedor");
    let hijo = document.getElementById("contenedor_contenido");
    padre.removeChild(hijo);
    creaTabla(tipo, nombreTabla, tipoTabla);
  }
}
