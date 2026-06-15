const datosSuecia = {
  stats: { pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  historia: "Una de las selecciones europeas más clásicas, subcampeona en su propio Mundial en 1958. Han demostrado ser un rival rocoso y difícil de vencer en los grandes torneos internacionales.",
  analisis: "Destacan por su imponente físico, un bloque defensivo organizado y su peligro en las jugadas a balón parado. Buscarán cerrar espacios y aprovechar las transiciones rápidas.",
  partidos: [
    { rivales: "Suecia vs. Japón", fecha: "Lunes, 15 de Junio, 2026", sede: "BMO Field, Toronto" },
    { rivales: "Argentina vs. Suecia", fecha: "Por definir, Junio 2026", sede: "BC Place, Vancouver" },
    { rivales: "Nigeria vs. Suecia", fecha: "Por definir, Junio 2026", sede: "BC Place, Vancouver" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosSuecia.historia;
  document.getElementById("analisis-texto").innerText = datosSuecia.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosSuecia.stats.pj}</td><td>${datosSuecia.stats.pg}</td><td>${datosSuecia.stats.pe}</td>
        <td>${datosSuecia.stats.pp}</td><td>${datosSuecia.stats.gf}</td><td>${datosSuecia.stats.gc}</td>
        <td>${datosSuecia.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosSuecia.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosSuecia.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
