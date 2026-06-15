const datosChequia = {
  stats: { pj: 1, pg: 0, pe: 0, pp: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
  historia:
    "Orgullosa heredera de los logros de la antigua Checoslovaquia, escuadra histórica que alcanzó dos subcampeonatos del mundo (1934 y 1962). Se caracterizan por su rigurosidad colectiva y su escuela competitiva.",
  analisis:
    "Un bloque europeo clásico con excelente juego aéreo, riguroso orden en la mitad de la cancha y gran juego físico. Su principal argumento será desgastar la posesión rival y liquidar mediante jugadas de estrategia fija.",
  partidos: [
    {
      rivales: "Corea del Sur vs. Chequia",
      fecha: "Jueves, 11 de Junio, 2026",
      sede: "Sede por definir (9:00 p.m.)",
    },
    {
      rivales: "México vs. Chequia",
      fecha: "Por definir, Junio 2026",
      sede: "Estadio de Guadalajara",
    },
    {
      rivales: "Sudáfrica vs. Chequia",
      fecha: "Por definir, Junio 2026",
      sede: "Sede por definir",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosChequia.historia;
  document.getElementById("analisis-texto").innerText = datosChequia.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosChequia.stats.pj}</td><td>${datosChequia.stats.pg}</td><td>${datosChequia.stats.pe}</td>
        <td>${datosChequia.stats.pp}</td><td>${datosChequia.stats.gf}</td><td>${datosChequia.stats.gc}</td>
        <td>${datosChequia.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosChequia.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosChequia.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);