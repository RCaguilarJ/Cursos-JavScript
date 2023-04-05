function opciones() {
  // UN NUMERO RANDOM DEL 0 AL 3;
  let computadora = 2;
  let resultado;

  let piedra = 1;
  let papel = 2;
  let tijeras = 3;

  let jugador = parseInt(
    prompt("Escoge un valor: Piedra = 1, Papel = 2, Tijera = 3")
  );

  if (jugador === tijeras && computadora === papel) {
    console.log("GANASTE!. las tijeras cortan papel");
  } else if (jugador === tijeras && computadora === piedra) {
    console.log("PERDISTE! las tijeras no vencen a la piedra");
  } else if (jugador === papel && computadora === piedra) {
    console.log("GANASTE!.el papel envuelve a la piedra");
  } else if (jugador === papel && computadora === tijeras) {
    console.log("PERDISTE!. las tijeras cortan el papel");
  } else if (jugador === piedra && computadora === papel) {
    console.log("PERDISTE! el papel envuelve a la piedra");
  } else if (jugador === piedra && computadora === tijeras) {
    console.log("GANASTE!. la piedra rompe a las tijeras");
  } else {
    console.log("EMPATARON!P");
    // } else {
    //   console.log("PON UNA OPCIÓN CORRECTA");
  }

  return resultado;
}

opciones();
