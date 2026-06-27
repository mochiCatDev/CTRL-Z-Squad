const datosHaiti = {
  stats: { pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 8, dg: -6, pts: 0 },
  historia:
    "Haití regresó a una Copa del Mundo 52 años después de su única participación previa, en Alemania 1974, protagonizando una de las grandes sorpresas del proceso clasificatorio de la CONCACAF.",
  analisis:
    "El conjunto caribeño compitió con gran entrega y orgullo, apoyado en la velocidad de sus delanteros, aunque la falta de experiencia en el máximo nivel se hizo evidente frente a selecciones de mayor jerarquía, lo que la dejó en el último lugar del Grupo C sin sumar puntos.",
  partidos: [
    { rivales: "Haití 0 - 1 Escocia", fecha: "Sábado, 13 de Junio, 2026", sede: "Gillette Stadium, Boston" },
    { rivales: "Brasil 3 - 0 Haití", fecha: "Viernes, 19 de Junio, 2026", sede: "Lincoln Financial Field, Filadelfia" },
    { rivales: "Marruecos 4 - 2 Haití", fecha: "Miércoles, 24 de Junio, 2026", sede: "Mercedes-Benz Stadium, Atlanta" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosHaiti.historia;
  document.getElementById("analisis-texto").innerText = datosHaiti.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosHaiti.stats.pj}</td><td>${datosHaiti.stats.pg}</td><td>${datosHaiti.stats.pe}</td>
        <td>${datosHaiti.stats.pp}</td><td>${datosHaiti.stats.gf}</td><td>${datosHaiti.stats.gc}</td>
        <td>${datosHaiti.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosHaiti.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosHaiti.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
