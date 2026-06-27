const datosEscocia = {
  stats: { pj: 3, pg: 1, pe: 0, pp: 2, gf: 1, gc: 4, dg: -3, pts: 3 },
  historia:
    "El 'Tartan Army' llegó a su novena participación mundialista buscando romper una curiosa estadística: nunca ha logrado superar la fase de grupos en sus ocho intentos anteriores.",
  analisis:
    "Escocia mostró un fútbol intenso y físico, con gran entrega en la marca y un bloque ordenado, aunque sus limitaciones ofensivas terminaron pesando frente a rivales de mayor calidad individual, lo que la dejó fuera de la siguiente ronda en la tercera posición del grupo.",
  partidos: [
    { rivales: "Haití 0 - 1 Escocia", fecha: "Sábado, 13 de Junio, 2026", sede: "Gillette Stadium, Boston" },
    { rivales: "Escocia 0 - 1 Marruecos", fecha: "Viernes, 19 de Junio, 2026", sede: "Gillette Stadium, Boston" },
    { rivales: "Escocia 0 - 3 Brasil", fecha: "Miércoles, 24 de Junio, 2026", sede: "Hard Rock Stadium, Miami" },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosEscocia.historia;
  document.getElementById("analisis-texto").innerText = datosEscocia.analisis;
  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosEscocia.stats.pj}</td><td>${datosEscocia.stats.pg}</td><td>${datosEscocia.stats.pe}</td>
        <td>${datosEscocia.stats.pp}</td><td>${datosEscocia.stats.gf}</td><td>${datosEscocia.stats.gc}</td>
        <td>${datosEscocia.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosEscocia.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosEscocia.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);
