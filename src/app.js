window.onload = function() {
  let sujeto = [
    "Un perro",
    "Un dinosaurio",
    "El hombre del saco",
    "Un extraterrestre"
  ];
  let verbo = ["se comió", "se durmió en", "tropezó con", "se compró"];
  let objeto = [
    "una lata de atún",
    "una hamburguesa vegana",
    "mi tarjeta del metro",
    "unas Air Max del 92"
  ];
  let accion = ["me secuestró", "se desintegró", "explotó", "me hipnotizó"];

  let rnm1 = Math.floor(Math.random() * sujeto.length);
  let rnm2 = Math.floor(Math.random() * verbo.length);
  let rnm3 = Math.floor(Math.random() * objeto.length);
  let rnm4 = Math.floor(Math.random() * accion.length);

  document.querySelector("#excuse").innerHTML =
    sujeto[rnm1] +
    " " +
    verbo[rnm2] +
    " " +
    objeto[rnm3] +
    " y " +
    accion[rnm4] +
    ".";
};
