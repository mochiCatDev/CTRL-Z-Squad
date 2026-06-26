const cromosMundial = [];

/**
 * Crea un objeto jugador con la estructura definida para el álbum.
 * @param {number} id - Identificador único del jugador.
 * @param {string} nombre - Nombre completo del jugador.
 * @param {string} pais - Selección nacional del jugador.
 * @param {string} posicion - Posición en el campo (ej: Delantero).
 * @param {string} urlImagen - URL de la foto del jugador.
 * @param {string} urlBandera - URL de la bandera del país.
 * @param {string} colorFondoHex - Color representativo en formato Hexadecimal.
 * @param {number} goles - Cantidad de goles anotados.
 * @param {number} partidos - Cantidad de partidos jugados.
 * @param {boolean} destacado - Define si el jugador es destacado.
 * @returns {Object} El objeto jugador estructurado.
 */
function crearJugador(id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, destacado) {
  return {
    id: id,
    nombre: nombre,
    pais: pais,
    posicion: posicion,
    urlImagen: urlImagen,
    urlBandera: urlBandera,
    colorFondoHex: colorFondoHex,
    estadisticas: {
      goles: goles,
      partidos: partidos,
      destacado: destacado
    }
  };
}

// funcion para renderizar el album, iterando por cromosMundial e inyectando el codigo al contenedor
function renderizarAlbum() {
  const contenedor = document.getElementById("contenedor-cromos");
  contenedor.innerHTML = "";

  cromosMundial.forEach(cromo => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card-cromo";
    tarjeta.style.backgroundColor = cromo.colorFondoHex;

    tarjeta.innerHTML = `
      <img src="${cromo.urlImagen}" alt="${cromo.nombre}">
      <h3>${cromo.nombre}</h3>
      <img src="${cromo.urlBandera}" alt="Bandera">
      <p>País: ${cromo.pais}</p>
      <p>Posición: ${cromo.posicion}</p>
      <p>Goles: ${cromo.estadisticas.goles}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}
