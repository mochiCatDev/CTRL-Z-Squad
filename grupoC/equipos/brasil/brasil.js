const datosBrasil = {
  stats: { pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 1, dg: 6, pts: 7 },
  historia:
    "Pentacampeón del mundo y único país que ha disputado todas las ediciones de la Copa Mundial, Brasil llegó a Norteamérica con la presión histórica de conseguir su sexta estrella, la ansiada 'Hexa', tras quedarse cerca en ediciones recientes.",
  analisis:
    "La 'Canarinha' combinó solidez defensiva con la explosividad ofensiva que caracteriza al fútbol brasileño, apoyándose en el talento individual de sus extremos y en un mediocampo capaz de generar superioridad numérica por los costados. Terminó la fase de grupos invicto y como líder del Grupo C.",
  partidos: [
    { rivales: "Brasil 1 - 1 Marruecos", fecha: "Sábado, 13 de Junio, 2026", sede: "MetLife Stadium, Nueva York/Nueva Jersey" },
    { rivales: "Brasil 3 - 0 Haití", fecha: "Viernes, 19 de Junio, 2026", sede: "Lincoln Financial Field, Filadelfia" },
    { rivales: "Escocia 0 - 3 Brasil", fecha: "Miércoles, 24 de Junio, 2026", sede: "Hard Rock Stadium, Miami" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosBrasil.historia;
  document.getElementById("analisis-texto").innerText = datosBrasil.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosBrasil.stats.pj}</td><td>${datosBrasil.stats.pg}</td><td>${datosBrasil.stats.pe}</td>
        <td>${datosBrasil.stats.pp}</td><td>${datosBrasil.stats.gf}</td><td>${datosBrasil.stats.gc}</td>
        <td>${datosBrasil.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosBrasil.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosBrasil.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
