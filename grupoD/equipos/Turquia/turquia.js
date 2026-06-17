const datosTurquia = {
  stats: { pj: 1, pg: 0, pe: 0, pp: 1, gf: 0, gc: 2, dg: -2, pts: 0 },
  historia:
    "La selección de Turquía regresa a la Copa del Mundo con el objetivo de emular la gran hazaña histórica de Corea-Japón 2002, edición en la que sorprendieron al planeta entero al quedarse con el tercer lugar en lo que era apenas su segunda participación mundialista.",
  analisis:
    "Ubicados en el exigente Grupo D, el conjunto otomano inició su camino sufriendo una caída por 2-0 ante Australia. Caracterizados por un mediocampo técnico y un estilo de transiciones intensas bajo el mando de Vincenzo Montella, los europeos necesitan ajustar su contundencia de cara al arco para sumar puntos en sus duelos cruciales frente a Paraguay y los anfitriones de Estados Unidos.",
  partidos: [
    {
      rivales: "Australia vs. Turquía",
      fecha: "13 de Junio, 2026",
      sede: "BC Place, Vancouver (21:00 PDT)",
    },
    {
      rivales: "Turquía vs. Paraguay",
      fecha: "20 de Junio, 2026",
      sede: "Sede por definir",
    },
    {
      rivales: "Turquía vs. EE.UU.",
      fecha: "25 de Junio, 2026",
      sede: "Los Angeles Stadium (19:00 PDT)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosTurquia.historia;
  document.getElementById("analisis-texto").innerText = datosTurquia.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosTurquia.stats.pj}</td><td>${datosTurquia.stats.pg}</td><td>${datosTurquia.stats.pe}</td>
        <td>${datosTurquia.stats.pp}</td><td>${datosTurquia.stats.gf}</td><td>${datosTurquia.stats.gc}</td>
        <td>${datosTurquia.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosTurquia.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosTurquia.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);