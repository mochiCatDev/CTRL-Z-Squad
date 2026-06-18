const datosSuiza = {
  stats: { pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1},
  historia:
    "La selección de Suiza cuenta con un recorrido extenso y respetable en la máxima cita del fútbol:Trayectoria: Registra 13 participaciones mundialistas anteriores. Su mejor papel histórico ha sido alcanzar los Cuartos de Final en tres ocasiones (1934, 1938 y como local en 1954).Racha Reciente: Se ha convertido en un equipo sumamente consistente, logrando clasificar a octavos de final en tres de las últimas cuatro ediciones (Brasil 2014, Rusia 2018 y Qatar 2022).Actualidad 2026: Inició su decimocuarto Mundial sumando un punto tras empatar 1-1 frente a Catar en la primera jornada del grupo",
  analisis:
    "Bajo la dirección técnica de Murat Yakin, Suiza es un bloque compacto, maduro, tácticamente inteligente y muy difícil de batir.Estilo de Juego: Apuestan por un orden táctico estricto (usualmente bajo un esquema 3-4-2-1 o 4-3-3). Manejan muy bien la posesión del balón en el medio campo y explotan las bandas con carrileros de mucha proyección.Figuras Claves: El mediocampista Granit Xhaka (Bayer Leverkusen) es el cerebro y líder indiscutible del equipo. En la portería se mantiene la seguridad de Yann Sommer, acompañado por la solidez del central Manuel Akanji (Manchester City). El desequilibrio ofensivo recae en hombres como Breel Embolo y la experiencia de Xherdan Shaqiri.Fortalezas: Una columna vertebral con muchísima experiencia en las mejores ligas de Europa, excelente ordenamiento defensivo y un gran oficio para manejar los ritmos de los partidos.Debilidades: La falta de un centrodelantero goleador de élite que traduzca el dominio en anotaciones y la tendencia a replegarse demasiado cuando van ganando.",
  partidos: [
    {
      rivales: "Catar vs. Suiza",
      fecha: "Sábado, 13 de Junio, 2026",
      sede: "San Francisco Bay Area Stadium - EE. UU. (14:00 p.m.)",
    },
    {
      rivales: "Suiza vs. Bosnia y Herzegovina",
      fecha: "Jueves, 18 de Junio 2026",
      sede: "Estadio de Los Ángeles - EE. UU. (14:00)",
    },
    {
      rivales: "Suiza vs. Canadá",
      fecha: "Miercoles, 24 de Junio 2026",
      sede: "BC Place, Vancouver - Canadá (14:00)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosSuiza.historia;
  document.getElementById("analisis-texto").innerText = datosSuiza.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosSuiza.stats.pj}</td><td>${datosSuiza.stats.pg}</td><td>${datosSuiza.stats.pe}</td>
        <td>${datosSuiza.stats.pp}</td><td>${datosSuiza.stats.gf}</td><td>${datosSuiza.stats.gc}</td>
        <td>${datosSuiza.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosSuiza.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosSuiza.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);