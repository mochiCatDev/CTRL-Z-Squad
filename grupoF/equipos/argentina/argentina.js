const datosArgentina = {
  stats: { pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  historia: "La actual campeona del mundo llega a Norteamérica con la misión de defender su corona. Con una rica historia que incluye tres títulos mundiales (1978, 1986, 2022), la Albiceleste siempre es protagonista.",
  analisis: "Un equipo que combina el talento individual sudamericano con una estructura táctica muy sólida. Su mediocampo es dinámico y tienen gran facilidad para la posesión y el ataque por los pasillos interiores.",
  partidos: [
    { rivales: "Argentina vs. Nigeria", fecha: "Lunes, 15 de Junio, 2026", sede: "SoFi Stadium, Los Ángeles" },
    { rivales: "Argentina vs. Suecia", fecha: "Por definir, Junio 2026", sede: "BC Place, Vancouver" },
    { rivales: "Japón vs. Argentina", fecha: "Por definir, Junio 2026", sede: "BMO Field, Toronto" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosArgentina.historia;
  document.getElementById("analisis-texto").innerText = datosArgentina.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosArgentina.stats.pj}</td><td>${datosArgentina.stats.pg}</td><td>${datosArgentina.stats.pe}</td>
        <td>${datosArgentina.stats.pp}</td><td>${datosArgentina.stats.gf}</td><td>${datosArgentina.stats.gc}</td>
        <td>${datosArgentina.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosArgentina.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosArgentina.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);