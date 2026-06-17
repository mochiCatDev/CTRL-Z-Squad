const datosAustralia = {
  stats: { pj: 1, pg: 1, pe: 0, pp: 0, gf: 2, gc: 0, dg: 2, pts: 3 }, //
  historia:
    "Los 'Socceroos' se encuentran compitiendo en su sexta aparición consecutiva en la Copa del Mundo. Su mejor participación histórica ha sido alcanzar los octavos de final en las ediciones de 2006 y 2022.",
  analisis:
    "Ubicados en el Grupo D junto a EE.UU., Turquía y Paraguay. El equipo dirigido por Tony Popovic demostró su capacidad al vencer 2-0 a Turquía en su debut, logrando su primera victoria en un partido inaugural desde 2006. Cuentan con figuras que aportan velocidad y efectividad, respaldados por los goles recientes de Nestory Irankunda y Connor Metcalfe.",
  partidos: [
    {
      rivales: "Australia vs. Turquía",
      fecha: "13 de Junio, 2026",
      sede: "BC Place, Vancouver (21:00 PDT)",
    },
    {
      rivales: "EE.UU. vs. Australia",
      fecha: "19 de Junio, 2026",
      sede: "Seattle, Washington (12:00 PDT)",
    },
    {
      rivales: "Paraguay vs. Australia",
      fecha: "25 de Junio, 2026",
      sede: "Vancouver, CAN (19:00 PDT)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosAustralia.historia;
  document.getElementById("analisis-texto").innerText = datosAustralia.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosAustralia.stats.pj}</td><td>${datosAustralia.stats.pg}</td><td>${datosAustralia.stats.pe}</td>
        <td>${datosAustralia.stats.pp}</td><td>${datosAustralia.stats.gf}</td><td>${datosAustralia.stats.gc}</td>
        <td>${datosAustralia.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosAustralia.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosAustralia.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);