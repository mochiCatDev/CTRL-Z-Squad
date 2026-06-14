const datosSudafrica = {
  stats: { pj: 1, pg: 0, pe: 0, pp: 1, gf: 0, gc: 2, dg: -2, pts: 0 },
  historia:
    "Recordados por ser los maravillosos y alegres organizadores de la Copa del Mundo en 2010. Los 'Bafana Bafana' regresan a la máxima fiesta del fútbol internacional dispuestos a demostrar el enorme crecimiento táctico de su balompié.",
  analisis:
    "Un conjunto sumamente físico, veloz en las transiciones de defensa a ataque y con gran despliegue atlético. Buscarán complicar la salida de los rivales apostando por contragolpes letales explotando las bandas.",
  partidos: [
    {
      rivales: "México vs. Sudáfrica",
      fecha: "Jueves, 11 de Junio, 2026",
      sede: "Estadio Azteca, CDMX (2:00 p.m.)",
    },
    {
      rivales: "Sudáfrica vs. Corea del Sur",
      fecha: "Por definir, Junio 2026",
      sede: "Estadio de Monterrey",
    },
    {
      rivales: "Sudáfrica vs. Chequia",
      fecha: "Por definir, Junio 2026",
      sede: "Sede por definir",
    },
  ],
};

function cargarPagina() {
  document.getElementById("historia-texto").innerText = datosSudafrica.historia;
  document.getElementById("analisis-texto").innerText = datosSudafrica.analisis;

  document.getElementById("tabla-rendimiento").innerHTML = `
    <tr>
        <td>${datosSudafrica.stats.pj}</td><td>${datosSudafrica.stats.pg}</td><td>${datosSudafrica.stats.pe}</td>
        <td>${datosSudafrica.stats.pp}</td><td>${datosSudafrica.stats.gf}</td><td>${datosSudafrica.stats.gc}</td>
        <td>${datosSudafrica.stats.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosSudafrica.stats.pts}</td>
    </tr>`;

  const contenedor = document.getElementById("lista-partidos");
  datosSudafrica.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  });
}
document.addEventListener("DOMContentLoaded", cargarPagina);