// Objecto de datos con Historia, Analisis y Partidos
const datosGrupoA = {
  equipos: [
    {
      nombre: "México",
      flag: `<img src="https://flagcdn.com/w40/mx.png" alt="México" class="flag-icon">`,
      conf: "CONCACAF",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia: "...",
      analisis: "...",
    },
    {
      nombre: "Sudáfrica",
      flag: `<img src="https://flagcdn.com/w40/za.png" alt="Sudáfrica" class="flag-icon">`,
      conf: "CAF",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia: "...",
      analisis: "...",
    },
    {
      nombre: "Corea del Sur",
      flag: `<img src="https://flagcdn.com/w40/kr.png" alt="Corea del Sur" class="flag-icon">`,
      conf: "AFC",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia: "...",
      analisis: "...",
    },
    {
      nombre: "Chequia",
      flag: `<img src="https://flagcdn.com/w40/cz.png" alt="Chequia" class="flag-icon">`,
      conf: "UEFA",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia: "...",
      analisis: "...",
    },
  ],
  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "México vs. Sudáfrica",
          fecha: "Jueves, 11 de Junio, 2026",
          sede: "Estadio Azteca, CDMX (2:00 p.m.)",
        },
        {
          rivales: "Corea del Sur vs. Chequia",
          fecha: "Jueves, 11 de Junio, 2026",
          sede: "Sede por definir (9:00 p.m.)",
        },
      ],
    },
    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "México vs. Chequia",
          fecha: "Por definir, Junio 2026",
          sede: "Estadio de Guadalajara",
        },
        {
          rivales: "Sudáfrica vs. Corea del Sur",
          fecha: "Por definir, Junio 2026",
          sede: "Estadio de Monterrey",
        },
      ],
    },
    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "México vs. Corea del Sur",
          fecha: "Por definir, Junio 2026",
          sede: "Estadio de Monterrey",
        },
        {
          rivales: "Sudáfrica vs. Chequia",
          fecha: "Por definir, Junio 2026",
          sede: "Sede por definir",
        },
      ],
    },
  ],
};

// Renderizar tabla de posiciones
function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";

  datosGrupoA.equipos.forEach((eq, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td><span class="badge-pos">${index + 1}</span></td>
            <td class="text-left"><strong>${eq.flag} ${eq.nombre}</strong></td>
            <td>${eq.pj}</td>
            <td>${eq.pg}</td>
            <td>${eq.pe}</td>
            <td>${eq.pp}</td>
            <td>${eq.gf}</td>
            <td>${eq.gc}</td>
            <td>${eq.dg}</td>
            <td class="puntos-col">${eq.pts}</td>
        `;
    tbody.appendChild(fila);
  });
}

// Renderizar tarjetas de equipos
function cargarEquipos() {
  const contenedor = document.getElementById("contenedor-equipos");
  contenedor.innerHTML = "";

  datosGrupoA.equipos.forEach((eq) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-equipo");
    tarjeta.innerHTML = `
            <div class="card-header">
                <h3>${eq.flag} ${eq.nombre}</h3>
                <span class="confederacion">${eq.conf}</span>
            </div>
            <div class="card-body">
                <div class="info-bloque">
                    <h4><i class="fas fa-history"></i> Historia</h4>
                    <p>${eq.historia}</p>
                </div>
                <div class="info-bloque">
                    <h4><i class="fas fa-chart-line"></i> Análisis Competitivo 2026</h4>
                    <p>${eq.analisis}</p>
                </div>
            </div>
        `;
    contenedor.appendChild(tarjeta);
  });
}

// Renderizar calendario
function cargarCalendario() {
  const contenedor = document.getElementById("contenedor-calendario");
  contenedor.innerHTML = "";

  datosGrupoA.calendario.forEach((jornada) => {
    const cardJornada = document.createElement("div");
    cardJornada.classList.add("jornada-card");

    let partidosHTML = `<div class="jornada-titulo">${jornada.jornada}</div>`;

    jornada.partidos.forEach((partido) => {
      partidosHTML += `
                <div class="partido">
                    <div class="partido-equipos">${partido.rivales}</div>
                    <div class="partido-detalles"><i class="far fa-calendar-alt"></i> ${partido.fecha}</div>
                    <div class="partido-detalles"><i class="fas fa-map-marker-alt"></i> ${partido.sede}</div>
                </div>
            `;
    });

    cardJornada.innerHTML = partidosHTML;
    contenedor.appendChild(cardJornada);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarTabla();
  cargarEquipos();
  cargarCalendario();
});
