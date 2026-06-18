const datosCatar = {
  stats: { pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1},
  historia:
    "La trayectoria de los cataríes en el torneo de fútbol más importante es muy reciente pero llena de contrastes:Catar 2022: Clasificaron automáticamente como país organizador. Sin embargo, rompieron récords negativos al ser el peor anfitrión de la historia, perdiendo sus tres compromisos frente a Ecuador, Senegal y Países Bajos.Camino a 2026: Superaron de gran forma las eliminatorias de la AFC, demostrando que su nivel continental es real. Consiguieron su primer punto histórico en copas del mundo gracias a un autogol suizo en el último minuto de la jornada de apertura.",
  analisis:
    "Bajo la nueva dirección técnica del experimentado español Julen Lopetegui, Catar ha adoptado un orden táctico mucho más pragmático y equilibrado.Estilo de Juego: Lopetegui suele implementar un esquema ordenado (usualmente 4-2-3-1 o 4-3-3) que prioriza el contragolpe. Aunque ceden gran parte de la posesión, buscan transiciones rápidas comandadas por sus hombres en los extremos.Figuras Claves: El ataque descansa en la dupla más exitosa del fútbol catarí: el habilidoso extremo Akram Afif (Al-Sadd) y el goleador histórico Almoez Ali. En el mediocampo sigue aportando jerarquía su eterno capitán Hassan Al-Haydos, respaldado por la experiencia del defensor Boualem Khoukhi.Fortalezas: Una química de equipo perfecta, ya que casi todos sus seleccionados compiten juntos en la liga local y en competencias continentales. También destaca su gran momento mental tras coronarse dos veces consecutivas monarcas de Asia (2019 y 2024).Debilidades: La falta de roce regular contra potencias americanas y europeas, además de un bloque defensivo que suele sufrir ante rivales que imprimen un ritmo físico e intenso.",
  partidos: [
    {
      rivales: "Catar vs. Suiza",
      fecha: "Sábado, 13 de Junio, 2026",
      sede: "San Francisco Bay Area Stadium - EE. UU. (14:00 p.m.)",
    },
    {
      rivales: "Canadá vs. Catar",
      fecha: "Jueves, 18 de Junio 2026",
      sede: "BC Place, Vancouver - Canadá (14:00)",
    },
    {
      rivales: "Bosnia y Herzegovina vs. Catar",
      fecha: "Miercoles, 24 de Junio 2026",
      sede: "Seattle Stadium - EE. UU. (14:00)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosCatar.historia;
  document.getElementById("analisis-texto").innerText = datosCatar.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosCatar.stats.pj}</td><td>${datosCatar.stats.pg}</td><td>${datosCatar.stats.pe}</td>
        <td>${datosCatar.stats.pp}</td><td>${datosCatar.stats.gf}</td><td>${datosCatar.stats.gc}</td>
        <td>${datosCatar.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosCatar.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosCatar.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);