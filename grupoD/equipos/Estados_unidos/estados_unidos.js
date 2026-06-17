const datosEstadosUnidos = {
  stats: { pj: 1, pg: 1, pe: 0, pp: 0, gf: 4, gc: 1, dg: 3, pts: 3 },
  historia:
    "Como uno de los países coanfitriones del Mundial 2026, la selección de las Barras y las Estrellas busca hacer historia en casa. Su mejor participación histórica fue el tercer lugar en la primera edición de 1930, y en la era moderna, lograron alcanzar los cuartos de final en 2002.",
  analisis:
    "El equipo estadounidense combina una generación joven llena de talento con un estilo de juego dinámico y rápido. Iniciaron el torneo con gran contundencia tras vencer 4-1 a Paraguay, estableciendo un récord propio de goles en un partido mundialista y mostrando su poderío como locales liderando el Grupo D.",
  partidos: [
    {
      rivales: "EE.UU. vs. Paraguay",
      fecha: "12 de Junio, 2026",
      sede: "Los Angeles Stadium",
    },
    {
      rivales: "EE.UU. vs. Australia",
      fecha: "19 de Junio, 2026",
      sede: "Seattle Stadium (12:00 PDT)",
    },
    {
      rivales: "Turquía vs. EE.UU.",
      fecha: "25 de Junio, 2026",
      sede: "Los Angeles Stadium (19:00 PDT)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosEstadosUnidos.historia;
  document.getElementById("analisis-texto").innerText = datosEstadosUnidos.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosEstadosUnidos.stats.pj}</td><td>${datosEstadosUnidos.stats.pg}</td><td>${datosEstadosUnidos.stats.pe}</td>
        <td>${datosEstadosUnidos.stats.pp}</td><td>${datosEstadosUnidos.stats.gf}</td><td>${datosEstadosUnidos.stats.gc}</td>
        <td>${datosEstadosUnidos.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosEstadosUnidos.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosEstadosUnidos.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);