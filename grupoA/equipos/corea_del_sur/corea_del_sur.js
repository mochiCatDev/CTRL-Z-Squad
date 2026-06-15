const datosCorea = {
  stats: { pj: 1, pg: 1, pe: 0, pp: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
  historia:
    "La selección más regular y dominante del continente asiático en la historia de las citas mundialistas. Siempre recordados a nivel global por su increíble e histórica hazaña al alcanzar las semifinales en el Mundial de 2002.",
  analisis:
    "Destacan por una disciplina táctica inquebrantable y un ritmo de juego incansable. Su velocidad para desdoblar líneas ofensivas representará un peligro constante para las estructuras defensivas del grupo.",
  partidos: [
    {
      rivales: "Corea del Sur vs. Chequia",
      fecha: "Jueves, 11 de Junio, 2026",
      sede: "Sede por definir (9:00 p.m.)",
    },
    {
      rivales: "Sudáfrica vs. Corea del Sur",
      fecha: "Por definir, Junio 2026",
      sede: "Estadio de Monterrey",
    },
    {
      rivales: "México vs. Corea del Sur",
      fecha: "Por definir, Junio 2026",
      sede: "Estadio de Monterrey",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosCorea.historia;
  document.getElementById("analisis-texto").innerText = datosCorea.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosCorea.stats.pj}</td><td>${datosCorea.stats.pg}</td><td>${datosCorea.stats.pe}</td>
        <td>${datosCorea.stats.pp}</td><td>${datosCorea.stats.gf}</td><td>${datosCorea.stats.gc}</td>
        <td>${datosCorea.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosCorea.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosCorea.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);