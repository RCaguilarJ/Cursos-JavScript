var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalle: function () {
    console.log("Es un auto");
  },

  // para agregar propiedades a un objeto

  // dar nombre a la propiedad

  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.annio}`);
  },
};
