// La misma función del ejemplo del ciclo for usando while

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

// Ambos ciclos se ocupan el for y el while. Con for podemos definir
// un fin de intentos y con el while mientras se cumpla que lo siga haciendo.
// s como decir en while sería, seguir cocinando el pollo mientras siga crudo, realmente
//  no sabemos cuando estará cocinado. Si usáramos for podría quedarnos crudo o
//  muy quemado, a menos que fueras un super experto.
