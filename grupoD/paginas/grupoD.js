// Objecto de datos con Historia, Análisis y Partidos para el Grupo D
const datosGrupoD = {
  equipos: [
    {
      nombre: "Estados Unidos",
      flag: `<img src="https://flagcdn.com/w40/us.png" alt="Estados Unidos" class="flag-icon">`,
      conf: "CONCACAF",
      pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
      historia: "Coanfitrión de la Copa del Mundo en 2026. La selección de las barras y las estrellas busca hacer historia en casa, intentando igualar o superar su mejor actuación histórica: las semifinales en el primer mundial de 1930.",
      analisis: "Juegan con la motivación de ser locales. Su principal fortaleza es una generación joven y dinámica con experiencia en las principales ligas europeas, apostando por la velocidad y el juego vertical."
    },
    {
      nombre: "Paraguay",
      flag: `<img src="https://flagcdn.com/w40/py.png" alt="Paraguay" class="flag-icon">`,
      conf: "CONMEBOL",
      pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
      historia: "La 'Albirroja' regresa a la máxima cita mundialista con su tradicional garra guaraní. Históricamente recordados por su aguerrida defensa y por alcanzar los cuartos de final en Sudáfrica 2010.",
      analisis: "Un equipo caracterizado por su solidez defensiva, orden táctico y fortaleza en el juego aéreo. Buscarán complicar a los rivales cediendo la posesión y atacando mediante transiciones rápidas y balón parado."
    },
    {
      nombre: "Australia",
      flag: `<img src="https://flagcdn.com/w40/au.png" alt="Australia" class="flag-icon">`,
      conf: "AFC",
      pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
      historia: "Los 'Socceroos' se han convertido en un participante habitual del certamen. Su gran objetivo es replicar el éxito conseguido en 2006 y 2022, donde lograron superar la fase de grupos mostrando un gran coraje.",
      analisis: "Destacan por ser un conjunto extremadamente atlético y físico. Su despliegue en el mediocampo y la presión alta serán fundamentales para robar balones e incomodar la salida de las selecciones rivales."
    },
    {
      nombre: "Turquía",
      flag: `<img src="https://flagcdn.com/w40/tr.png" alt="Turquía" class="flag-icon">`,
      conf: "UEFA",
      pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
      historia: "Una selección apasionada que siempre dejó huella en los mundiales que disputó. El mundo del fútbol aún recuerda su brillante y sorpresiva actuación en Corea-Japón 2002, donde se quedaron con el tercer lugar.",
      analisis: "Combinan pasión y talento técnico. Poseen un mediocampo creativo y gran calidad en el último tercio del campo. Su capacidad para manejar el ritmo del partido será clave para imponer condiciones."
    }
  ],
  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "Estados Unidos vs. Paraguay",
          fecha: "Viernes, 12 de Junio, 2026",
          sede: "Estadio Los Ángeles, Inglewood (8:00 p.m.)"
        },
        {
          rivales: "Australia vs. Turquía",
          fecha: "Sábado, 13 de Junio, 2026",
          sede: "BC Place, Vancouver (11:00 p.m.)"
        }
      ]
    },
    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "Estados Unidos vs. Australia",
          fecha: "Junio 2026",
          sede: "Sede por definir"
        },
        {
          rivales: "Turquía vs. Paraguay",
          fecha: "Viernes, 19 de Junio, 2026",
          sede: "Estadio Bahía de San Francisco, Santa Clara"
        }
      ]
    },
    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "Turquía vs. Estados Unidos",
          fecha: "Junio 2026",
          sede: "Sede por definir"
        },
        {
          rivales: "Paraguay vs. Australia",
          fecha: "Jueves, 25 de Junio, 2026",
          sede: "Estadio Bahía de San Francisco, Santa Clara"
        }
      ]
    }
  ]
};

const infoComplementariaGrupoD = {
  sedes: [
    {
      ciudad: "Los Ángeles, Estados Unidos",
      estadio: "Estadio Los Ángeles (SoFi)",
      capacidad: "70,240",
      icono: "fas fa-star",
      detalle: "Un recinto de clase mundial con tecnología de punta y una impresionante pantalla LED de 360 grados, sede del debut estadounidense en este torneo."
    },
    {
      ciudad: "Santa Clara, Estados Unidos",
      estadio: "Estadio Bahía de San Francisco",
      capacidad: "68,500",
      icono: "fas fa-bridge-water",
      detalle: "Ubicado en el corazón de Silicon Valley, es un estadio moderno que albergará duelos clave como el Turquía vs Paraguay y el Paraguay vs Australia."
    },
    {
      ciudad: "Vancouver, Canadá",
      estadio: "BC Place",
      capacidad: "54,500",
      icono: "fas fa-leaf",
      detalle: "El principal estadio del Pacífico canadiense, famoso por su espectacular techo retráctil y su ubicación privilegiada en el centro de la ciudad."
    }
  ],
  curiosidades: [
    {
      titulo: "El Reencuentro de 1930",
      icono: "fas fa-history",
      desc: "Estados Unidos y Paraguay se reencuentran en una Copa del Mundo casi un siglo después. Su único enfrentamiento previo en este torneo ocurrió en la primera edición de 1930, con una victoria de 3-0 a favor de los norteamericanos."
    },
    {
      titulo: "Inédito Turquía vs Paraguay",
      icono: "fas fa-handshake",
      desc: "El partido entre turcos y guaraníes será apenas su segundo enfrentamiento en la historia. Su único cruce previo se remonta a un partido amistoso en 1995 que terminó en un cerrado empate sin goles."
    },
    {
      titulo: "Mundial del Pacífico Norte",
      icono: "fas fa-globe-americas",
      desc: "El Grupo D tiene la particularidad de distribuir una gran parte de sus partidos entre la costa oeste de Estados Unidos (Los Ángeles, San Francisco) y Canadá (Vancouver)."
    }
  ]
};

// Renderizar tabla de posiciones
function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";

  datosGrupoD.equipos.forEach((eq, index) => {
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

  datosGrupoD.equipos.forEach((eq) => {
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

  datosGrupoD.calendario.forEach((jornada) => {
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

  infoComplementariaGrupoD.sedes.forEach((sede) => {
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

  infoComplementariaGrupoD.curiosidades.forEach((curio) => {
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