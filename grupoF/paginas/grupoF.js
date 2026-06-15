// Objeto de datos con Historia, Análisis y Partidos del Grupo F
const datosGrupoF = {
  equipos: [
    {
      nombre: "Argentina",
      flag: `<img src="https://flagcdn.com/w40/ar.png" alt="Argentina" class="flag-icon">`,
      conf: "CONMEBOL",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia:
        "La actual campeona del mundo llega a Norteamérica con la misión de defender su corona. Con una rica historia que incluye tres títulos mundiales (1978, 1986, 2022), la Albiceleste siempre es protagonista.",
      analisis:
        "Un equipo que combina el talento individual sudamericano con una estructura táctica muy sólida. Su mediocampo es dinámico y tienen gran facilidad para la posesión y el ataque por los pasillos interiores.",
    },
    {
      nombre: "Suecia",
      flag: `<img src="https://flagcdn.com/w40/se.png" alt="Suecia" class="flag-icon">`,
      conf: "UEFA",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia:
        "Una de las selecciones europeas más clásicas, subcampeona en su propio Mundial en 1958. Han demostrado ser un rival rocoso y difícil de vencer en los grandes torneos internacionales.",
      analisis:
        "Destacan por su imponente físico, un bloque defensivo organizado y su peligro en las jugadas a balón parado. Buscarán cerrar espacios y aprovechar las transiciones rápidas.",
    },
    {
      nombre: "Nigeria",
      flag: `<img src="https://flagcdn.com/w40/ng.png" alt="Nigeria" class="flag-icon">`,
      conf: "CAF",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia:
        "Las 'Súper Águilas' son uno de los equipos más emblemáticos de África. Desde su deslumbrante debut en 1994, siempre aportan color, alegría y un fútbol ofensivo a las Copas del Mundo.",
      analisis:
        "Poseen una de las delanteras más veloces del torneo. Su juego se basa en el desborde por las bandas y la potencia física, aunque a veces sufren en la retrocesión defensiva.",
    },
    {
      nombre: "Japón",
      flag: `<img src="https://flagcdn.com/w40/jp.png" alt="Japón" class="flag-icon">`,
      conf: "AFC",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia:
        "Los 'Samuráis Azules' son una potencia asiática consolidada. Han avanzado a octavos de final en múltiples ocasiones y son conocidos por su disciplina y crecimiento táctico sostenido.",
      analisis:
        "Un equipo incansable con una presión alta muy efectiva. Suelen mover el balón con mucha velocidad y tienen una técnica depurada, lo que les permite competir de tú a tú con cualquier rival.",
    },
  ],
  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "Argentina vs. Nigeria",
          fecha: "Lunes, 15 de Junio, 2026",
          sede: "SoFi Stadium, Los Ángeles (1:00 p.m.)",
        },
        {
          rivales: "Suecia vs. Japón",
          fecha: "Lunes, 15 de Junio, 2026",
          sede: "BMO Field, Toronto (6:00 p.m.)",
        },
      ],
    },
    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "Argentina vs. Suecia",
          fecha: "Por definir, Junio 2026",
          sede: "BC Place, Vancouver",
        },
        {
          rivales: "Nigeria vs. Japón",
          fecha: "Por definir, Junio 2026",
          sede: "SoFi Stadium, Los Ángeles",
        },
      ],
    },
    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "Japón vs. Argentina",
          fecha: "Por definir, Junio 2026",
          sede: "BMO Field, Toronto",
        },
        {
          rivales: "Nigeria vs. Suecia",
          fecha: "Por definir, Junio 2026",
          sede: "BC Place, Vancouver",
        },
      ],
    },
  ],
};

const infoComplementariaGrupoF = {
  sedes: [
    {
      ciudad: "Los Ángeles, Estados Unidos",
      estadio: "SoFi Stadium",
      capacidad: "70,240",
      icono: "fas fa-star",
      detalle:
        "Uno de los estadios más modernos y tecnológicos del mundo, con una pantalla gigante de doble cara que ofrece una experiencia inmersiva espectacular.",
    },
    {
      ciudad: "Toronto, Canadá",
      estadio: "BMO Field",
      capacidad: "45,000",
      icono: "fas fa-leaf",
      detalle:
        "Ubicado a orillas del lago Ontario, este estadio fue ampliado específicamente para cumplir con los requisitos de la Copa del Mundo 2026.",
    },
    {
      ciudad: "Vancouver, Canadá",
      estadio: "BC Place",
      capacidad: "54,500",
      icono: "fas fa-mountain",
      detalle:
        "Famoso por su techo retráctil soportado por cables, es un escenario multideportivo icónico en la costa oeste canadiense.",
    },
  ],
  curiosidades: [
    {
      titulo: "Un Clásico Mundialista",
      icono: "fas fa-history",
      desc: "Argentina y Nigeria se han enfrentado en múltiples fases de grupos a lo largo de la historia de los Mundiales (1994, 2002, 2010, 2014, 2018), convirtiéndose en uno de los duelos más repetidos del torneo.",
    },
    {
      titulo: "La Limpieza Japonesa",
      icono: "fas fa-broom",
      desc: "La afición de Japón y su selección son reconocidos mundialmente por limpiar sus vestuarios y las gradas de los estadios al finalizar cada partido, una muestra de respeto y cultura inquebrantable.",
    },
    {
      titulo: "Defensa del Título",
      icono: "fas fa-trophy",
      desc: "Argentina busca convertirse en una de las pocas selecciones en la historia en lograr el bicampeonato consecutivo, una hazaña que solo han logrado Italia (1934-1938) y Brasil (1958-1962).",
    },
  ],
};

// Renderizar tabla de posiciones
function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";

  datosGrupoF.equipos.forEach((eq, index) => {
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

  datosGrupoF.equipos.forEach((eq) => {
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

  datosGrupoF.calendario.forEach((jornada) => {
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

  infoComplementariaGrupoF.sedes.forEach((sede) => {
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

  infoComplementariaGrupoF.curiosidades.forEach((curio) => {
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