//Hacemos una función donde podamos agregar un nuevo vehículo een lugar de re-escribir todo el código
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
//creamos una nueva variable para añadir otro vehículo
var autoNuevo = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Toyota", "Bronco", 2020);

var autoNuevo3 = new auto("Nisan", "Titan", 2020);
