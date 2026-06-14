// ============================================================
// DATOS - GRUPO E - MUNDIAL FIFA 2026
// Alemania, Curaçao, Costa de Marfil, Ecuador
// ============================================================

const gruposMundial = {
  E: {
    nombre: "Grupo E",
    equipos: [
      {
        nombre: "Alemania",
        flag: `<img src="https://flagcdn.com/h40/de.png" alt="Alemania" class="flag-icon">`,
        conf: "UEFA",
        pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
        historia: "Cuatro veces campeones del mundo (1954, 1974, 1990 y 2014), la 'Mannschaft' es una de las selecciones más laureadas de la historia. Buscan reivindicarse tras una decepcionante fase de grupos en Qatar 2022.",
        analisis: "Alemania presentará un equipo renovado con juventud y experiencia equilibradas. Su presión organizada, la salida de balón limpia desde atrás y la potencia en ataque los convierten en favoritos claros del grupo.",
      },
      {
        nombre: "Curaçao",
        flag: `<img src="https://flagcdn.com/h40/cw.png" alt="Curaçao" class="flag-icon">`,
        conf: "CONCACAF",
        pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
        historia: "Historia pura: Curaçao es la nación más pequeña por población (156,000 habitantes) que jamás ha clasificado a una Copa del Mundo. Su debut es uno de los hitos más grandes del fútbol CONCACAF moderno.",
        analisis: "Comandados por el técnico Dick Advocaat y con el capitán Leandro Bacuna y su hermano Juninho como referentes, apostarán por una organización defensiva férrea e intentarán aprovechar cada ocasión al contraataque.",
      },
      {
        nombre: "Costa de Marfil",
        flag: `<img src="https://flagcdn.com/h40/ci.png" alt="Costa de Marfil" class="flag-icon">`,
        conf: "CAF",
        pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
        historia: "Los 'Elefantes' son una de las grandes potencias del fútbol africano. Campeones de África en 2015 y 2024, cuentan con generaciones de jugadores que militan en los mejores clubes de Europa.",
        analisis: "Equipo atlético, veloz y con gran calidad técnica en ataque. Con jugadores como Seko Fofana y una delantera dinámica, buscarán complicar la vida a Alemania y alzarse como los mejores de África en el torneo.",
      },
      {
        nombre: "Ecuador",
        flag: `<img src="https://flagcdn.com/h40/ec.png" alt="Ecuador" class="flag-icon">`,
        conf: "CONMEBOL",
        pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0,
        historia: "La 'Tri' llega a su cuarta Copa del Mundo. Memorables por inaugurar el Mundial de Alemania 2006 con victoria ante el anfitrión, y por clasificar con grandes actuaciones en las difíciles Eliminatorias Sudamericanas.",
        analisis: "Ecuador es un equipo físico y ordenado, con una columna vertebral sólida y experiencia mundialista. Su apuesta por la verticalidad y el juego directo a Enner Valencia, su referente histórico, es su señal de identidad.",
      },
    ],
    calendario: [
      {
        jornada: "Jornada 1",
        partidos: [
          { rivales: "Alemania vs. Curaçao", fecha: "Domingo, 14 de Junio, 2026", sede: "NRG Stadium, Houston, Texas (1:00 p.m. ET)" },
          { rivales: "Costa de Marfil vs. Ecuador", fecha: "Domingo, 14 de Junio, 2026", sede: "Lincoln Financial Field, Filadelfia (7:00 p.m. ET)" },
        ],
      },
      {
        jornada: "Jornada 2",
        partidos: [
          { rivales: "Alemania vs. Costa de Marfil", fecha: "Sábado, 20 de Junio, 2026", sede: "BMO Field, Toronto, Canadá (4:00 p.m. ET)" },
          { rivales: "Ecuador vs. Curaçao", fecha: "Sábado, 20 de Junio, 2026", sede: "Arrowhead Stadium, Kansas City, MO (8:00 p.m. ET)" },
        ],
      },
      {
        jornada: "Jornada 3",
        partidos: [
          { rivales: "Ecuador vs. Alemania", fecha: "Jueves, 25 de Junio, 2026", sede: "MetLife Stadium, East Rutherford, NJ (4:00 p.m. ET)" },
          { rivales: "Curaçao vs. Costa de Marfil", fecha: "Jueves, 25 de Junio, 2026", sede: "Lincoln Financial Field, Filadelfia (4:00 p.m. ET)" },
        ],
      },
    ],
  },
};

// ============================================================
// INFO COMPLEMENTARIA - GRUPO E
// Sedes/estadios donde juega el grupo + curiosidades del grupo
// ============================================================

const infoComplementariaGrupoE = {
  sedes: [
    {
      ciudad: "Houston, Texas, EE.UU.",
      estadio: "NRG Stadium",
      capacidad: "72,220",
      icono: "fas fa-landmark",
      detalle:
        "Escenario del partido inaugural del grupo entre Alemania y Curaçao. Cuenta con techo retráctil y es la casa de los Houston Texans de la NFL, ofreciendo confort climático ideal para el verano texano.",
    },
    {
      ciudad: "East Rutherford, Nueva Jersey, EE.UU.",
      estadio: "MetLife Stadium (New York New Jersey Stadium)",
      capacidad: "82,500",
      icono: "fas fa-trophy",
      detalle:
        "El recinto más grande e icónico del torneo, sede de la gran final el 19 de julio. Albergará el decisivo Ecuador vs. Alemania de la última jornada del Grupo E.",
    },
    {
      ciudad: "Toronto, Canadá",
      estadio: "BMO Field (Toronto Stadium)",
      capacidad: "45,736",
      icono: "fas fa-mountain",
      detalle:
        "Tras una renovación de 120 millones de dólares, este estadio canadiense recibirá el duelo Alemania vs. Costa de Marfil, una de las citas más atractivas de la segunda jornada.",
    },
    {
      ciudad: "Kansas City, Misuri, EE.UU.",
      estadio: "Arrowhead Stadium (Kansas City Stadium)",
      capacidad: "76,400",
      icono: "fas fa-volume-up",
      detalle:
        "Reconocido por el Récord Guinness como el estadio al aire libre más ruidoso del mundo, será testigo del Ecuador vs. Curaçao, un partido clave para definir el camino hacia la siguiente ronda.",
    },
    {
      ciudad: "Filadelfia, Pensilvania, EE.UU.",
      estadio: "Lincoln Financial Field (Philadelphia Stadium)",
      capacidad: "69,796",
      icono: "fas fa-volcano",
      detalle:
        "Casa de los Philadelphia Eagles, este recinto recibirá dos partidos del Grupo E: el debut de Costa de Marfil ante Ecuador y el cierre entre Curaçao y Costa de Marfil.",
    },
  ],
  curiosidades: [
    {
      titulo: "La nación más pequeña en debutar",
      icono: "fas fa-star",
      desc: "Curaçao hizo historia al convertirse en la nación más pequeña por población (alrededor de 156,000 habitantes) en clasificarse jamás a una Copa del Mundo, un hito histórico para el fútbol caribeño y de la CONCACAF.",
    },
    {
      titulo: "Alemania, gigante del Mundial",
      icono: "fas fa-history",
      desc: "Con cuatro estrellas (1954, 1974, 1990 y 2014), Alemania es la selección europea con más títulos mundialistas junto a Italia. Llegan a 2026 buscando redimirse tras quedar eliminados en fase de grupos en la edición anterior.",
    },
    {
      titulo: "Costa de Marfil, potencia africana",
      icono: "fas fa-chart-line",
      desc: "Los 'Elefantes' se consagraron como una de las grandes fuerzas del continente africano tras coronarse campeones de la Copa Africana de Naciones en 2015 y, de manera más reciente, en 2024 como anfitriones del torneo.",
    },
    {
      titulo: "El llamado del histórico Enner Valencia",
      icono: "fas fa-futbol",
      desc: "Ecuador llega a su cuarta Copa del Mundo con Enner Valencia como bandera ofensiva, el goleador histórico de la 'Tri' en justas mundialistas, recordado por su gran actuación en el Mundial de Catar 2022.",
    },
    {
      titulo: "Un grupo de cuatro continentes",
      icono: "fas fa-globe",
      desc: "El Grupo E reúne a representantes de cuatro confederaciones distintas: UEFA (Alemania), CONCACAF (Curaçao), CAF (Costa de Marfil) y CONMEBOL (Ecuador), una de las combinaciones más diversas del sorteo.",
    },
  ],
};


// ============================================================
// VARIABLE DE GRUPO ACTIVO
// ============================================================
let grupoActivo = "E";

let datosGrupoActual = gruposMundial[grupoActivo];


// ============================================================
// RENDERIZADO
// ============================================================

function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";
  datosGrupoActual.equipos.forEach((eq, index) => {
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

function cargarEquipos() {
  const contenedor = document.getElementById("contenedor-equipos");
  contenedor.innerHTML = "";
  datosGrupoActual.equipos.forEach((eq) => {
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

function cargarCalendario() {
  const contenedor = document.getElementById("contenedor-calendario");
  contenedor.innerHTML = "";
  datosGrupoActual.calendario.forEach((jornada) => {
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

  infoComplementariaGrupoE.sedes.forEach((sede) => {
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

  infoComplementariaGrupoE.curiosidades.forEach((curio) => {
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