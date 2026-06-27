const datosMarruecos = {
  stats: { pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 3, dg: 3, pts: 7 },
  historia:
    "Los 'Leones del Atlas' llegaron a este Mundial como una de las grandes revelaciones del fútbol mundial tras su histórica semifinal en Qatar 2022, la mejor actuación de una selección africana en la historia del torneo.",
  analisis:
    "Marruecos se apoyó en una defensa disciplinada y un bloque compacto, además de transiciones rápidas en ataque, una fórmula que le permitió mantenerse invicto durante toda la fase de grupos y clasificar como segundo del Grupo C por diferencia de goles frente a Brasil.",
  partidos: [
    { rivales: "Brasil 1 - 1 Marruecos", fecha: "Sábado, 13 de Junio, 2026", sede: "MetLife Stadium, Nueva York/Nueva Jersey" },
    { rivales: "Escocia 0 - 1 Marruecos", fecha: "Viernes, 19 de Junio, 2026", sede: "Gillette Stadium, Boston" },
    { rivales: "Marruecos 4 - 2 Haití", fecha: "Miércoles, 24 de Junio, 2026", sede: "Mercedes-Benz Stadium, Atlanta" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosMarruecos.historia;
  document.getElementById("analisis-texto").innerText = datosMarruecos.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosMarruecos.stats.pj}</td><td>${datosMarruecos.stats.pg}</td><td>${datosMarruecos.stats.pe}</td>
        <td>${datosMarruecos.stats.pp}</td><td>${datosMarruecos.stats.gf}</td><td>${datosMarruecos.stats.gc}</td>
        <td>${datosMarruecos.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosMarruecos.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosMarruecos.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
