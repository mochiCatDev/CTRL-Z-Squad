const datosNigeria = {
  stats: { pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  historia: "Las 'Súper Águilas' son uno de los equipos más emblemáticos de África. Desde su deslumbrante debut en 1994, siempre aportan color, alegría y un fútbol ofensivo a las Copas del Mundo.",
  analisis: "Poseen una de las delanteras más veloces del torneo. Su juego se basa en el desborde por las bandas y la potencia física, aunque a veces sufren en la retrocesión defensiva.",
  partidos: [
    { rivales: "Argentina vs. Nigeria", fecha: "Lunes, 15 de Junio, 2026", sede: "SoFi Stadium, Los Ángeles" },
    { rivales: "Nigeria vs. Japón", fecha: "Por definir, Junio 2026", sede: "SoFi Stadium, Los Ángeles" },
    { rivales: "Nigeria vs. Suecia", fecha: "Por definir, Junio 2026", sede: "BC Place, Vancouver" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosNigeria.historia;
  document.getElementById("analisis-texto").innerText = datosNigeria.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosNigeria.stats.pj}</td><td>${datosNigeria.stats.pg}</td><td>${datosNigeria.stats.pe}</td>
        <td>${datosNigeria.stats.pp}</td><td>${datosNigeria.stats.gf}</td><td>${datosNigeria.stats.gc}</td>
        <td>${datosNigeria.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosNigeria.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosNigeria.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
