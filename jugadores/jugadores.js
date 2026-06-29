const cromosMundial = [];

function crearJugador(id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, destacado, curiosidad) {
  return { id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, estadisticas: { goles, partidos }, destacado, curiosidad };
}

cromosMundial.push(
  crearJugador(1, "Hirving Lozano", "México", "Extremo", "https://images.fotmob.com/image_resources/playerimages/521210.png", "https://flagcdn.com/w80/mx.png", "#006847", 19, 72, true, "Anotó el gol de la victoria contra Alemania en el Mundial de Rusia 2018."),
  crearJugador(2, "Son Heung-min", "Corea del Sur", "Delantero", "https://images.fotmob.com/image_resources/playerimages/212867.png", "https://flagcdn.com/w80/kr.png", "#CD2E3A", 39, 130, true, "Máximo goleador histórico de Corea del Sur y primer asiático en ganar la Bota de Oro de la Premier League."),
  crearJugador(3, "Percy Tau", "Sudáfrica", "Mediocampista Ofensivo", "https://images.fotmob.com/image_resources/playerimages/563065.png", "https://flagcdn.com/w80/za.png", "#FFB81C", 16, 50, false, "Fue nombrado mejor jugador de la liga belga en 2019 mientras estaba cedido por el Brighton."),
  crearJugador(4, "Edin Džeko", "Bosnia", "Delantero", "https://images.fotmob.com/image_resources/playerimages/15403.png", "https://flagcdn.com/w80/ba.png", "#002395", 65, 133, true, "Máximo goleador histórico de Bosnia y Herzegovina, clave en la primera clasificación mundialista del país."),
  crearJugador(5, "Xherdan Shaqiri", "Suiza", "Extremo", "https://images.fotmob.com/image_resources/playerimages/176300.png", "https://flagcdn.com/w80/ch.png", "#FF0000", 32, 125, true, "Ha disputado más de 120 partidos con Suiza y marcó una chilena espectacular contra Polonia en la Eurocopa 2016."),
  crearJugador(6, "Alphonso Davies", "Canadá", "Lateral Izquierdo", "https://images.fotmob.com/image_resources/playerimages/751202.png", "https://flagcdn.com/w80/ca.png", "#FF0000", 5, 53, true, "Nació en un campo de refugiados en Ghana y debutó con Canadá a los 16 años."),
  crearJugador(7, "Neymar Jr.", "Brasil", "Delantero", "https://images.fotmob.com/image_resources/playerimages/19533.png", "https://flagcdn.com/w80/br.png", "#009739", 79, 128, true, "Máximo goleador histórico de la Seleção con 79 goles, superando a Pelé en 2023."),
  crearJugador(8, "Vinícius Jr.", "Brasil", "Extremo", "https://images.fotmob.com/image_resources/playerimages/846033.png", "https://flagcdn.com/w80/br.png", "#009739", 5, 35, false, "Elegido Mejor Jugador Joven del Mundial 2022."),
  crearJugador(9, "Achraf Hakimi", "Marruecos", "Lateral", "https://images.fotmob.com/image_resources/playerimages/770881.png", "https://flagcdn.com/w80/ma.png", "#c1272d", 9, 75, true, "Pieza clave en el histórico cuarto puesto de Marruecos en Qatar 2022."),
  crearJugador(10, "Hakim Ziyech", "Marruecos", "Mediocampista", "https://images.fotmob.com/image_resources/playerimages/360559.png", "https://flagcdn.com/w80/ma.png", "#c1272d", 22, 58, false, "Apodado 'La Magia', su gol de chilena contra Canadá en Qatar 2022 dio la vuelta al mundo."),
  crearJugador(11, "Scott McTominay", "Escocia", "Mediocampista", "https://images.fotmob.com/image_resources/playerimages/843099.png", "https://flagcdn.com/w80/gb-sct.png", "#005eb8", 9, 55, false, "Nacido en Inglaterra pero escocés de corazón, es el ancla del mediocampo."),
  crearJugador(12, "Frantzdy Pierrot", "Haití", "Delantero", "https://images.fotmob.com/image_resources/playerimages/833641.png", "https://flagcdn.com/w80/ht.png", "#00209f", 22, 32, false, "Máximo goleador de la clasificación de CONCACAF.")
);

const cromosDesbloqueados = new Set();

function renderizarAlbum(lista) {
  const container = document.getElementById("album-jugadores");
  if (!container) return;
  container.innerHTML = "";
  if (!lista) lista = cromosMundial;

  lista.forEach(j => {
    const bloqueado = !cromosDesbloqueados.has(j.id);
    const tarjeta = document.createElement("div");
    tarjeta.className = `card-cromo${bloqueado ? " bloqueado" : ""}`;
    tarjeta.style.backgroundColor = j.colorFondoHex;

    tarjeta.dataset.id = j.id;
    tarjeta.innerHTML = `
      <img src="${j.urlImagen}" alt="${j.nombre}" loading="lazy">
      <div class="info-jugador">
        <h3>${j.nombre}</h3>
        <img src="${j.urlBandera}" alt="${j.pais}" class="bandera-mini">
      </div>
      <div class="info-jugador">
        <p>País: ${j.pais}</p>
        <p>Posición: ${j.posicion}</p>
        <p>Goles: ${j.estadisticas.goles} | Partidos: ${j.estadisticas.partidos}</p>
        <p class="curiosidad">${j.curiosidad}</p>
      </div>
      <button class="btn-desbloquear" data-id="${j.id}">${bloqueado ? 'Desbloquear Cromo' : '✓ Desbloqueado'}</button>
    `;
    container.appendChild(tarjeta);
  });

  document.querySelectorAll(".btn-desbloquear").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      desbloquearCromo(parseInt(this.dataset.id));
    });
  });

  actualizarContador();
}

function desbloquearCromo(id) {
  if (cromosDesbloqueados.has(id)) return;
  cromosDesbloqueados.add(id);
  const tarjeta = document.querySelector(`.card-cromo[data-id="${id}"]`);
  if (tarjeta) {
    tarjeta.classList.remove("bloqueado");
    const btn = tarjeta.querySelector(".btn-desbloquear");
    if (btn) btn.textContent = "✓ Desbloqueado";
  }
  actualizarContador();
}

function actualizarContador() {
  const total = document.getElementById("total-cromos");
  const contador = document.getElementById("contador-desbloqueados");
  if (total) total.textContent = cromosMundial.length;
  if (contador) contador.textContent = cromosDesbloqueados.size;
}

function calcularTotalGoles() {
  const total = cromosMundial.reduce((acc, j) => acc + j.estadisticas.goles, 0);
  const el = document.getElementById("total-goles");
  if (el) el.textContent = total;
}

function cargarFiltroPaises() {
  const select = document.getElementById("filtro-pais");
  if (!select) return;
  const paises = [...new Set(cromosMundial.map(j => j.pais))];
  paises.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    select.appendChild(opt);
  });
}

function aplicarFiltros() {
  const texto = document.getElementById("buscador-jugador").value.toLowerCase().trim();
  const pais = document.getElementById("filtro-pais").value;
  const filtrados = cromosMundial.filter(j => {
    return (j.nombre.toLowerCase().includes(texto) || texto === "") &&
           (j.pais === pais || pais === "");
  });
  renderizarAlbum(filtrados);
}

document.addEventListener("DOMContentLoaded", function () {
  cargarFiltroPaises();
  renderizarAlbum();
  calcularTotalGoles();
  actualizarContador();
  document.getElementById("buscador-jugador").addEventListener("input", aplicarFiltros);
  document.getElementById("filtro-pais").addEventListener("change", aplicarFiltros);
});
