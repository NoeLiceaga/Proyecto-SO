function resaltarSeleccion(clase) {
  let objeto = document.getElementById(clase);
  let menu = document.getElementById("contenedor_menu");
  let hijos = menu.childNodes;

  for (let i = 0; i < hijos.length; i++) {
    if (hijos[i].nodeType == 1) {
      console.log(hijos[i]);
      hijos[i].classList.remove("pulse");
    }
  }
  objeto.classList.add("pulse");
}
