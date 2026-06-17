const datosParaguay = {
  stats: { pj: 1, pg: 0, pe: 0, pp: 1, gf: 1, gc: 4, dg: -3, pts: 0 },
  historia:
    "La 'Albirroja' regresa a la máxima cita del fútbol internacional buscando revivir sus grandes glorias de antaño. Históricamente, su punto más alto en una Copa del Mundo se dio en la edición de Sudáfrica 2010, torneo en el que alcanzaron de forma histórica los cuartos de final.",
  analisis:
    "Ubicada en el Grupo D, la escuadra sudamericana tuvo un debut muy complicado al caer por 4-1 frente a los coanfitriones de Estados Unidos. A pesar de la dura derrota inicial, el equipo buscará apoyarse en su tradicional garra defensiva y en el orden táctico para sumar puntos clave frente a Turquía y Australia con el fin de pelear la clasificación.",
  partidos: [
    {
      rivales: "EE.UU. vs. Paraguay",
      fecha: "12 de Junio, 2026",
      sede: "Los Angeles Stadium",
    },
    {
      rivales: "Turquía vs. Paraguay",
      fecha: "20 de Junio, 2026",
      sede: "Sede por definir",
    },
    {
      rivales: "Paraguay vs. Australia",
      fecha: "25 de Junio, 2026",
      sede: "Vancouver, CAN (19:00 PDT)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosParaguay.historia;
  document.getElementById("analisis-texto").innerText = datosParaguay.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosParaguay.stats.pj}</td><td>${datosParaguay.stats.pg}</td><td>${datosParaguay.stats.pe}</td>
        <td>${datosParaguay.stats.pp}</td><td>${datosParaguay.stats.gf}</td><td>${datosParaguay.stats.gc}</td>
        <td>${datosParaguay.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosParaguay.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosParaguay.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);