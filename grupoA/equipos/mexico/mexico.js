const datosMexico = {
  stats: { pj: 1, pg: 1, pe: 0, pp: 0, gf: 2, gc: 0, dg: 2, pts: 3 },
  historia:
    "Anfitrión histórico de la Copa del Mundo por tercera ocasión (1970, 1986 y 2026). La selección mexicana busca romper el mito de los octavos de final cobijada por su apasionada afición en el emblemático e histórico Estadio Azteca.",
  analisis:
    "Al jugar en territorio propio, la motivación y la presión se encuentran al máximo nivel. Su fortaleza principal radicará en el dinamismo por las bandas y en la solidez colectiva que logren consolidar como locales.",
  partidos: [
    {
      rivales: "México vs. Sudáfrica",
      fecha: "Jueves, 11 de Junio, 2026",
      sede: "Estadio Azteca, CDMX (2:00 p.m.)",
    },
    {
      rivales: "México vs. Chequia",
      fecha: "Por definir, Junio 2026",
      sede: "Estadio de Guadalajara",
    },
    {
      rivales: "México vs. Corea del Sur",
      fecha: "Por definir, Junio 2026",
      sede: "Estadio de Monterrey",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosMexico.historia;
  document.getElementById("analisis-texto").innerText = datosMexico.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosMexico.stats.pj}</td><td>${datosMexico.stats.pg}</td><td>${datosMexico.stats.pe}</td>
        <td>${datosMexico.stats.pp}</td><td>${datosMexico.stats.gf}</td><td>${datosMexico.stats.gc}</td>
        <td>${datosMexico.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosMexico.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosMexico.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
