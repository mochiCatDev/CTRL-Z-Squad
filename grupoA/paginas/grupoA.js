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
const infoComplementariaGrupoA = {
  sedes: [
    {
      ciudad: "Ciudad de México, México",
      estadio: "Estadio Azteca",
      capacidad: "83,264",
      icono: "fas fa-landmark",
      detalle:
        "Histórico recinto que se convertirá en el primero en el mundo en albergar tres partidos inaugurales de una Copa del Mundo (1970, 1986 y 2026).",
    },
    {
      ciudad: "Monterrey, México",
      estadio: "Estadio BBVA",
      capacidad: "53,500",
      icono: "fas fa-mountain",
      detalle:
        "Conocido como el 'Gigante de Acero', cuenta con una arquitectura vanguardista y una vista icónica hacia el Cerro de la Silla.",
    },
    {
      ciudad: "Guadalajara, México",
      estadio: "Estadio Akron",
      capacidad: "48,071",
      icono: "fas fa-volcano",
      detalle:
        "Su diseño exterior simula la forma de un volcán coronado por una nube, integrándose de manera orgánica con el paisaje que lo rodea.",
    },
  ],
  curiosidades: [
    {
      titulo: "El Clásico del 2010",
      icono: "fas fa-history",
      desc: "México y Sudáfrica protagonizaron un vibrante partido inaugural en la Copa Mundial de 2010. Aquel encuentro finalizó con un recordado empate 1-1 gracias a los goles de Siphiwe Tshabalala y Rafael Márquez.",
    },
    {
      titulo: "Dominio y Constancia Asiática",
      icono: "fas fa-chart-line",
      desc: "Corea del Sur ostenta el récord histórico continental de ser la selección de Asia con más participaciones consecutivas en los Mundiales, habiendo clasificado de manera ininterrumpida a todas las ediciones desde México 1986.",
    },
    {
      titulo: "La Herencia Subcampeona",
      icono: "fas fa-trophy",
      desc: "Aunque hoy en día compite bajo el nombre de Chequia (República Checa), la FIFA le reconoce estadísticamente los logros históricos conseguidos por la antigua Checoslovaquia, selección que llegó a ser dos veces subcampeona del mundo en Italia 1934 y Chile 1962.",
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

function cargarSedes() {
  const contenedor = document.getElementById("contenedor-sedes");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  infoComplementariaGrupoA.sedes.forEach((sede) => {
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

  infoComplementariaGrupoA.curiosidades.forEach((curio) => {
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
