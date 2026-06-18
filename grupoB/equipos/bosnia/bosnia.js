const datosBosnia = {
  stats: { pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1},
  historia:
    "Nacida tras la disolución de Yugoslavia, la selección conocida como Los Dragones (Zmajevi) solo ha logrado clasificarse a la gran cita en dos ocasiones.Brasil 2014: Su primera experiencia histórica. Aunque cayeron eliminados en la fase de grupos tras perder contra Argentina y Nigeria, lograron despedirse con un triunfo memorable por 3-1 ante Irán.Ausencias: No lograron acceder a Rusia 2018 ni a Qatar 2022.",
  analisis:
    "El director técnico Sergej Barbarez ha construido un equipo altamente competitivo, famoso por su capacidad de crecer ante la adversidad. Estilo de Juego: Utilizan un bloque sólido, usualmente bajo un esquema 4-4-2 o 4-2-3-1. Ceden el protagonismo al rival y apuestan por transiciones verticales rápidas y el balón parado.Figuras Claves: A sus 40 años, el delantero Edin Džeko sigue siendo el máximo referente histórico y el faro ofensivo. La nueva generación aporta juventud y descaro por las bandas con talentos como Esmir Bajraktarević, acompañados de la solidez defensiva que aportan jugadores de élite como Sead Kolašinac.Fortalezas y Debilidades: Su gran fortaleza es el peligro constante en el juego aéreo y su efectividad goleadora frente a rivales superiores. Su mayor debilidad es la falta de experiencia en fases decisivas y una zona defensiva que suele conceder ocasiones claras",
  partidos: [
    {
      rivales: "Canadá vs. Bosnia y Herzegovina",
      fecha: "Viernes, 12 de Junio, 2026",
      sede: "Estadio de Toronto - Canadá (14:00 p.m.)",
    },
    {
      rivales: "Suiza vs. Bosnia",
      fecha: "Jueves, 18 de Junio 2026",
      sede: "Estadio de Los Ángeles - EE. UU. (14:00)",
    },
    {
      rivales: "Bosnia y Herzegovina vs. Catar",
      fecha: "Miercoles, 24 de Junio 2026",
      sede: "Estadio de Seattle - EE. UU. (14:00)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosBosnia.historia;
  document.getElementById("analisis-texto").innerText = datosBosnia.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosBosnia.stats.pj}</td><td>${datosBosnia.stats.pg}</td><td>${datosBosnia.stats.pe}</td>
        <td>${datosBosnia.stats.pp}</td><td>${datosBosnia.stats.gf}</td><td>${datosBosnia.stats.gc}</td>
        <td>${datosBosnia.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosBosnia.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosBosnia.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);