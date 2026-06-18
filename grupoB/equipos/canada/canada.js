const datosCanada = {
  stats: { pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1},
  historia:
    "La evolución del fútbol canadiense ha sido lenta pero constante, alcanzando su madurez justo para esta gran cita:México 1986: Su debut absoluto. Pagaron el derecho de piso perdiendo sus tres partidos ante Francia, Hungría y la Unión Soviética, sin lograr anotar un solo gol.Qatar 2022: Regresaron tras 36 años de ausencia liderando la eliminatoria de CONCACAF. Pese a mostrar un fútbol ofensivo y anotar su primer gol mundialista (obra de Alphonso Davies), quedaron eliminados en fase de grupos tras caer ante Bélgica, Croacia y Marruecos.Actualidad 2026: Su tercera participación, rompiendo la sequía de puntos tras el reciente empate 1-1 ante Bosnia en la jornada inaugural.",
  analisis:
    "Bajo la dirección técnica del estadounidense Jesse Marsch, Canadá se caracteriza por ser un equipo ultra-físico, de transiciones letales y presión asfixiante.Estilo de Juego: Marsch implementa un sistema flexible (usualmente 4-2-3-1 o 4-4-2) enfocado en recuperar el balón alto y atacar el espacio con transiciones a máxima velocidad.Figuras Claves: El indiscutible referente es Alphonso Davies (Bayern Múnich), quien aporta velocidad y desequilibrio por toda la banda izquierda. En ataque destaca el olfato goleador de Jonathan David (Lille), acompañado por la polivalencia de Tajon Buchanan y la solidez en el mediocampo de Stephen Eustáquio.Fortalezas: Su punta de velocidad por los extremos, la localía con el apoyo masivo de su público y un plantel joven con experiencia en las mejores ligas de Europa.Debilidades: La falta de recambios de élite en la zaga central y la desconcentración defensiva cuando los partidos se tornan de ida y vuelta constante.",
  partidos: [
    {
      rivales: "Canadá vs. Bosnia y Herzegovina",
      fecha: "Viernes, 12 de Junio, 2026",
      sede: "Toronto Stadium - Canadá (14:00 p.m.)",
    },
    {
      rivales: "Canadá vs. Catar",
      fecha: "Jueves, 18 de Junio 2026",
      sede: "BC Place, Vancouver - Canadá (14:00)",
    },
    {
      rivales: "Suiza vs. Canadá",
      fecha: "Miercoles, 24 de Junio 2026",
      sede: "BC Place, Vancouver - Canadá (14:00)",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosCanada.historia;
  document.getElementById("analisis-texto").innerText = datosCanada.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosCanada.stats.pj}</td><td>${datosCanada.stats.pg}</td><td>${datosCanada.stats.pe}</td>
        <td>${datosCanada.stats.pp}</td><td>${datosCanada.stats.gf}</td><td>${datosCanada.stats.gc}</td>
        <td>${datosCanada.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosCanada.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosCanada.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);