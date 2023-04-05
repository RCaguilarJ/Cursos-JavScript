var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

//encontrar un articulo del array con find
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

//forEach. filtra el array sin modificarlo

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//Some();. validación de verdadero o falso para los articulos que cumplan con la validación

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
