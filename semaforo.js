function semaforo(color) {
  switch (color) {
    case "verde": {
      console.log("AVANZA");
      break;
    }
    case "amarillo": {
      console.log("Comienza a frenar!");
      break;
    }
    case "rojo": {
      console.log("Ya no puedes avanzar");
      break;
    }
    default: {
      console.log("No reconozco ese color. Favor de intentar más tarde");
    }
  }
}
