const datosJapon = {
  stats: { pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  historia: "Los 'Samuráis Azules' son una potencia asiática consolidada. Han avanzado a octavos de final en múltiples ocasiones y son conocidos por su disciplina y crecimiento táctico sostenido.",
  analisis: "Un equipo incansable con una presión alta muy efectiva. Suelen mover el balón con mucha velocidad y tienen una técnica depurada, lo que les permite competir de tú a tú con cualquier rival.",
  partidos: [
    { rivales: "Suecia vs. Japón", fecha: "Lunes, 15 de Junio, 2026", sede: "BMO Field, Toronto" },
    { rivales: "Nigeria vs. Japón", fecha: "Por definir, Junio 2026", sede: "SoFi Stadium, Los Ángeles" },
    { rivales: "Japón vs. Argentina", fecha: "Por definir, Junio 2026", sede: "BMO Field, Toronto" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosJapon.historia;
  document.getElementById("analisis-texto").innerText = datosJapon.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosJapon.stats.pj}</td><td>${datosJapon.stats.pg}</td><td>${datosJapon.stats.pe}</td>
        <td>${datosJapon.stats.pp}</td><td>${datosJapon.stats.gf}</td><td>${datosJapon.stats.gc}</td>
        <td>${datosJapon.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosJapon.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosJapon.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
