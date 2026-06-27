// Objeto de datos con Historia, Análisis y Partidos del Grupo C
const datosGrupoC = {
  equipos: [
    {
      nombre: "Brasil",
      flag: `<img src="https://flagcdn.com/w40/br.png" alt="Brasil" class="flag-icon">`,
      conf: "CONMEBOL",
      pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 1, dg: 6, pts: 7,
      url: "../equipos/brasil/brasil.html",
    },
    {
      nombre: "Marruecos",
      flag: `<img src="https://flagcdn.com/w40/ma.png" alt="Marruecos" class="flag-icon">`,
      conf: "CAF",
      pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 3, dg: 3, pts: 7,
      url: "../equipos/marruecos/marruecos.html",
    },
    {
      nombre: "Escocia",
      flag: `<img src="https://flagcdn.com/w40/gb-sct.png" alt="Escocia" class="flag-icon">`,
      conf: "UEFA",
      pj: 3, pg: 1, pe: 0, pp: 2, gf: 1, gc: 4, dg: -3, pts: 3,
      url: "../equipos/escocia/escocia.html",
    },
    {
      nombre: "Haití",
      flag: `<img src="https://flagcdn.com/w40/ht.png" alt="Haití" class="flag-icon">`,
      conf: "CONCACAF",
      pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 8, dg: -6, pts: 0,
      url: "../equipos/haiti/haiti.html",
    },
  ],
  // Calendario y resultados ya disputados de la fase de grupos
  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "Brasil vs. Marruecos",
          resultado: "1 - 1",
          fecha: "Sábado, 13 de Junio, 2026",
          sede: "MetLife Stadium, Nueva York/Nueva Jersey (6:00 p.m. ET)",
        },
        {
          rivales: "Haití vs. Escocia",
          resultado: "0 - 1",
          fecha: "Sábado, 13 de Junio, 2026",
          sede: "Gillette Stadium, Boston (9:00 p.m. ET)",
        },
      ],
    },
    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "Escocia vs. Marruecos",
          resultado: "0 - 1",
          fecha: "Viernes, 19 de Junio, 2026",
          sede: "Gillette Stadium, Boston (6:00 p.m. ET)",
        },
        {
          rivales: "Brasil vs. Haití",
          resultado: "3 - 0",
          fecha: "Viernes, 19 de Junio, 2026",
          sede: "Lincoln Financial Field, Filadelfia (9:00 p.m. ET)",
        },
      ],
    },
    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "Escocia vs. Brasil",
          resultado: "0 - 3",
          fecha: "Miércoles, 24 de Junio, 2026",
          sede: "Hard Rock Stadium, Miami (6:00 p.m. ET)",
        },
        {
          rivales: "Marruecos vs. Haití",
          resultado: "4 - 2",
          fecha: "Miércoles, 24 de Junio, 2026",
          sede: "Mercedes-Benz Stadium, Atlanta (6:00 p.m. ET)",
        },
      ],
    },
  ],
};

const infoComplementariaGrupoC = {
  sedes: [
    {
      ciudad: "East Rutherford, Nueva Jersey, Estados Unidos",
      estadio: "MetLife Stadium",
      capacidad: "82,500",
      icono: "fas fa-star",
      detalle:
        "Sede de la gran final del Mundial 2026 el próximo 19 de julio, este coloso del fútbol americano abrió la participación del Grupo C con el esperado duelo entre Brasil y Marruecos.",
    },
    {
      ciudad: "Boston (Foxborough), Massachusetts, Estados Unidos",
      estadio: "Gillette Stadium",
      capacidad: "65,000",
      icono: "fas fa-landmark",
      detalle:
        "Hogar de los Patriots de la NFL, fue el recinto con más actividad para el grupo, recibiendo dos de los seis encuentros, incluida la sorpresa inicial de Escocia sobre Haití.",
    },
    {
      ciudad: "Filadelfia, Pensilvania, Estados Unidos",
      estadio: "Lincoln Financial Field",
      capacidad: "69,000",
      icono: "fas fa-flag-usa",
      detalle:
        "A pocas semanas de celebrarse el 250° aniversario de la independencia de Estados Unidos, este estadio fue testigo de la contundente goleada de Brasil sobre Haití.",
    },
    {
      ciudad: "Miami, Florida, Estados Unidos",
      estadio: "Hard Rock Stadium",
      capacidad: "65,000",
      icono: "fas fa-water",
      detalle:
        "De característica forma cuadrangular y sede en seis ocasiones de la Super Bowl, acogió el partido decisivo entre Escocia y Brasil que cerró la fase de grupos.",
    },
    {
      ciudad: "Atlanta, Georgia, Estados Unidos",
      estadio: "Mercedes-Benz Stadium",
      capacidad: "71,000",
      icono: "fas fa-circle-notch",
      detalle:
        "Conocido por su impactante techo retráctil, fue el lugar donde Marruecos certificó su clasificación a los dieciseisavos de final tras vencer a Haití.",
    },
  ],
  curiosidades: [
    {
      titulo: "El Regreso Histórico de Haití",
      icono: "fas fa-history",
      desc: "Haití disputó su segundo Mundial de la historia, 52 años después de su única participación previa en Alemania 1974, convirtiéndose en la gran sorpresa del proceso clasificatorio de la CONCACAF.",
    },
    {
      titulo: "Los Leones del Atlas",
      icono: "fas fa-medal",
      desc: "Marruecos llegó a este Mundial como una de las grandes revelaciones del fútbol mundial tras haber sido semifinalista en Qatar 2022, la mejor actuación de una selección africana en la historia de la competición.",
    },
    {
      titulo: "Brasil en Busca de la Hexa",
      icono: "fas fa-trophy",
      desc: "Pentacampeón y único país presente en todas las ediciones del Mundial, Brasil llegó a esta fase con la presión de buscar su sexta estrella, y terminó invicto en un grupo donde Marruecos fue su único rival a la altura.",
    },
    {
      titulo: "La Maldición Escocesa",
      icono: "fas fa-exclamation-circle",
      desc: "Escocia llegó a su novena participación en una Copa del Mundo sin haber logrado nunca superar la fase de grupos en las ocho ediciones anteriores en que compitió, una estadística que buscaba romper en 2026.",
    },
  ],
};

// Renderizar tabla de posiciones
function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";

  datosGrupoC.equipos.forEach((eq, index) => {
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
  if (!contenedor) return;
  contenedor.innerHTML = "";

  datosGrupoC.equipos.forEach((eq) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-equipo");
    tarjeta.innerHTML = `
            <div class="card-header">
                <h3>${eq.flag} ${eq.nombre}</h3>
                <span class="confederacion">${eq.conf}</span>
            </div>
            <div class="card-body" style="text-align: center; padding: 2rem 1.5rem;">
                <a href="${eq.url}" class="btn-atras" style="position: static; display: inline-block; padding: 10px 20px; text-decoration: none;">
                    Ver Detalle del Equipo <i class="fa-solid fa-angle-right" style="margin-left: 8px;"></i>
                </a>
            </div>
        `;
    contenedor.appendChild(tarjeta);
  });
}
// Renderizar calendario
function cargarCalendario() {
  const contenedor = document.getElementById("contenedor-calendario");
  contenedor.innerHTML = "";

  datosGrupoC.calendario.forEach((jornada) => {
    const cardJornada = document.createElement("div");
    cardJornada.classList.add("jornada-card");

    let partidosHTML = `<div class="jornada-titulo">${jornada.jornada}</div>`;

    jornada.partidos.forEach((partido) => {
      const marcador = partido.resultado
        ? `<span class="resultado-marcador">${partido.resultado}</span>`
        : "";
      partidosHTML += `
                <div class="partido">
                    <div class="partido-equipos">${partido.rivales} ${marcador}</div>
                    <div class="partido-detalles"><i class="far fa-calendar-alt"></i> ${partido.fecha}</div>
                    <div class="partido-detalles"><i class="fas fa-map-marker-alt"></i> ${partido.sede}</div>
                </div>
            `;
    });

    cardJornada.innerHTML = partidosHTML;
    contenedor.appendChild(cardJornada);
  });
}

function cargarSedes() {
  const contenedor = document.getElementById("contenedor-sedes");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  infoComplementariaGrupoC.sedes.forEach((sede) => {
    const card = document.createElement("div");
    card.classList.add("jornada-card");
    card.innerHTML = `
      <div class="jornada-titulo"><i class="${sede.icono}"></i> ${sede.estadio}</div>
      <div class="partido">
        <div class="partido-equipos" style="font-size: 1rem; color: #d4af37;"><i class="fas fa-map-marker-alt"></i> ${sede.ciudad}</div>
        <div class="partido-detalles" style="margin: 6px 0;"><i class="fas fa-users"></i> <strong>Capacidad:</strong> ${sede.capacidad} espectadores</div>
        <p style="font-size: 0.9rem; color: #cbd5e1; text-align: justify; margin-top: 8px; line-height: 1.4;">${sede.detalle}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

function cargarCuriosidades() {
  const contenedor = document.getElementById("contenedor-curiosidades");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  infoComplementariaGrupoC.curiosidades.forEach((curio) => {
    const bloque = document.createElement("div");
    bloque.classList.add("partido");
    bloque.style.marginBottom = "15px";
    bloque.innerHTML = `
      <div class="partido-equipos" style="color: #e0a96d; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
        <i class="${curio.icono}"></i> ${curio.titulo}
      </div>
      <p style="font-size: 0.95rem; color: #cbd5e1; text-align: justify; margin-top: 6px; line-height: 1.5;">${curio.desc}</p>
    `;
    contenedor.appendChild(bloque);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarTabla();
  cargarEquipos();
  cargarCalendario();
  cargarSedes();
  cargarCuriosidades();
});
