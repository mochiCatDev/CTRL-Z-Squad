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

// =============================================
// ESTUDIANTE B — Jugadores Grupo A y B (IDs 1-6)
// =============================================

// Jugador 1 - México (Grupo A)
cromosMundial.push({
  ...crearJugador(
    1,
    "Hirving Lozano",
    "México",
    "Extremo",
    "https://images.fotmob.com/image_resources/playerimages/521210.png",
    "https://flagcdn.com/w80/mx.png",
    "#006847",
    19,
    72,
    true
  ),
  curiosidad: "Anotó el gol de la victoria contra Alemania en el Mundial de Rusia 2018, provocando un micro-sismo en Ciudad de México por la celebración de los aficionados."
});

// Jugador 2 - Corea del Sur (Grupo A)
cromosMundial.push({
  ...crearJugador(
    2,
    "Son Heung-min",
    "Corea del Sur",
    "Delantero",
    "https://images.fotmob.com/image_resources/playerimages/212867.png",
    "https://flagcdn.com/w80/kr.png",
    "#CD2E3A",
    39,
    130,
    true
  ),
  curiosidad: "Es el máximo goleador histórico de la selección surcoreana y el primer asiático en ganar la Bota de Oro de la Premier League (2021-22)."
});

// Jugador 3 - Sudáfrica (Grupo A)
cromosMundial.push({
  ...crearJugador(
    3,
    "Percy Tau",
    "Sudáfrica",
    "Mediocampista Ofensivo",
    "https://images.fotmob.com/image_resources/playerimages/563065.png",
    "https://flagcdn.com/w80/za.png",
    "#FFB81C",
    16,
    50,
    false
  ),
  curiosidad: "Fue nombrado mejor jugador de la liga belga en 2019 mientras estaba cedido por el Brighton & Hove Albion."
});

// Jugador 4 - Bosnia (Grupo B)
cromosMundial.push({
  ...crearJugador(
    4,
    "Edin Džeko",
    "Bosnia",
    "Delantero",
    "https://images.fotmob.com/image_resources/playerimages/15403.png",
    "https://flagcdn.com/w80/ba.png",
    "#002395",
    65,
    133,
    true
  ),
  curiosidad: "Es el máximo goleador histórico de Bosnia y Herzegovina con más de 60 goles, y fue clave en la primera clasificación mundialista de su país para Brasil 2014."
});

// Jugador 5 - Suiza (Grupo B)
cromosMundial.push({
  ...crearJugador(
    5,
    "Xherdan Shaqiri",
    "Suiza",
    "Extremo",
    "https://images.fotmob.com/image_resources/playerimages/176300.png",
    "https://flagcdn.com/w80/ch.png",
    "#FF0000",
    32,
    125,
    true
  ),
  curiosidad: "Ha disputado más de 120 partidos con Suiza y marcó una espectacular chilena contra Polonia en la Eurocopa 2016."
});

// Jugador 6 - Canadá (Grupo B)
cromosMundial.push({
  ...crearJugador(
    6,
    "Alphonso Davies",
    "Canadá",
    "Lateral Izquierdo",
    "https://images.fotmob.com/image_resources/playerimages/751202.png",
    "https://flagcdn.com/w80/ca.png",
    "#FF0000",
    5,
    53,
    true
  ),
  curiosidad: "Nació en un campo de refugiados en Ghana y emigró a Canadá a los 5 años. Se convirtió en el jugador más joven en debutar con la selección canadiense a los 16 años."
});

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
      <div class="info-jugador">
        <h3>${cromo.nombre}</h3>
        <img src="${cromo.urlBandera}" alt="Bandera">
      </div>
      <div class="info-jugador">
        <p>País: ${cromo.pais}</p>
        <p>Posición: ${cromo.posicion}</p>
        <p>Goles: ${cromo.estadisticas.goles}</p>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// Cuando la pagina termine de cargar, ejecuta renderizarAlbum()
document.addEventListener("DOMContentLoaded", renderizarAlbum);
