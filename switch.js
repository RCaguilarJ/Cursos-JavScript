let numero = 10;

switch (numero) {
  case 1:
    console.log("Soy un uno!");
    break;
  case 10:
    console.log("Soy un 10");
    break;
  case 100:
    console.log("Soy un 100");
    break;
  default:
    console.log("No soy nada");
}

//Hay que poner un break al finale de cada case para que no se validen todos los que
//cumplan sólo con una parte de la validación
