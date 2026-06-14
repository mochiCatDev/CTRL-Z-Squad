// Objecto de datos con Historia, Analisis y Partidos
const datosGrupoE = {
  equipos: [
    {
      nombre: "Alemania",
      flag: `<img src="https://flagcdn.com/h40/de.png" alt="Alemania" class="flag-icon">`,
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
        "La selección más laureada de Europa con cuatro títulos mundiales (1954, 1974, 1990 y 2014). Los alemanes regresan al mundial con su vigésimo primera participación, buscando levantar una copa que no conquistan desde Brasil 2014.",
      analisis:
        "Favoritos indiscutibles del grupo. Combinan una sólida estructura táctica con figuras de primer nivel en las grandes ligas europeas. Su superioridad técnica y física les convierte en serios candidatos a liderar el grupo sin mayores complicaciones.",
    },
    {
      nombre: "Curaçao",
      flag: `<img src="https://flagcdn.com/h40/cw.png" alt="Curaçao" class="flag-icon">`,
      conf: "CONCACAF",
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
      historia:
        "Debutantes históricos en la Copa del Mundo 2026, convirtiéndose en la nación más pequeña en participar jamás en un Mundial con apenas 158,000 habitantes. Clasificaron venciendo el Grupo B de la CONCACAF en noviembre de 2025.",
      analisis:
        "Dirigidos por Dick Advocaat, poseen jugadores con experiencia en ligas europeas como los hermanos Leandro y Juninho Bacuna. Cualquier punto que sumen en el grupo representará un hito histórico para el fútbol caribeño.",
    },
    {
      nombre: "Costa de Marfil",
      flag: `<img src="https://flagcdn.com/h40/ci.png" alt="Costa de Marfil" class="flag-icon">`,
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
        "Los 'Elefantes' regresan al Mundial por cuarta ocasión y primera desde 2014. Nunca han logrado superar la fase de grupos en sus anteriores participaciones (2006, 2010, 2014), lo que convierte este torneo en una oportunidad de revancha histórica.",
      analisis:
        "Cuentan con figuras de alto nivel como Nicolas Pépé (8 goles en LaLiga con Villarreal), Franck Kessié (líder histórico en goles y apariciones con 14 y 100 respectivamente) e Ibrahim Sangaré del Nottingham Forest. Un equipo físico y talentoso que buscará hacer historia.",
    },
    {
      nombre: "Ecuador",
      flag: `<img src="https://flagcdn.com/h40/ec.png" alt="Ecuador" class="flag-icon">`,
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
        "La 'Tri' disputa su quinta Copa del Mundo y llega como subcampeona del Grupo CONMEBOL de clasificación. Su mejor actuación mundialista fue alcanzar los octavos de final en Alemania 2006, barrera que aspiran a superar en este torneo.",
      analisis:
        "Un conjunto sudamericano ordenado, con gran fortaleza física y peligroso a pelota parada. Su experiencia en mundiales anteriores y la regularidad demostrada en las eliminatorias los posicionan como el segundo favorito del grupo tras Alemania.",
    },
  ],
  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "Alemania vs. Curaçao",
          fecha: "Domingo, 14 de Junio, 2026",
          sede: "NRG Stadium, Houston, Texas (1:00 p.m. ET)",
        },
        {
          rivales: "Costa de Marfil vs. Ecuador",
          fecha: "Domingo, 14 de Junio, 2026",
          sede: "Lincoln Financial Field, Filadelfia, Pennsylvania (7:00 p.m. ET)",
        },
      ],
    },
    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "Alemania vs. Costa de Marfil",
          fecha: "Sábado, 20 de Junio, 2026",
          sede: "BMO Field, Toronto, Ontario (4:00 p.m. ET)",
        },
        {
          rivales: "Ecuador vs. Curaçao",
          fecha: "Sábado, 20 de Junio, 2026",
          sede: "Arrowhead Stadium, Kansas City, Missouri (8:00 p.m. ET)",
        },
      ],
    },
    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "Ecuador vs. Alemania",
          fecha: "Jueves, 25 de Junio, 2026",
          sede: "MetLife Stadium, East Rutherford, Nueva Jersey (4:00 p.m. ET)",
        },
        {
          rivales: "Curaçao vs. Costa de Marfil",
          fecha: "Jueves, 25 de Junio, 2026",
          sede: "Lincoln Financial Field, Filadelfia, Pennsylvania (4:00 p.m. ET)",
        },
      ],
    },
  ],
};

const infoComplementariaGrupoE = {
  sedes: [
    {
      ciudad: "Houston, Texas, EE.UU.",
      estadio: "NRG Stadium",
      capacidad: "72,220",
      icono: "fas fa-landmark",
      detalle:
        "Casa de los Houston Texans de la NFL, albergará el debut de Alemania ante Curaçao. Es uno de los estadios techados del torneo, garantizando confort en las altas temperaturas del verano texano.",
    },
    {
      ciudad: "Filadelfia, Pennsylvania, EE.UU.",
      estadio: "Lincoln Financial Field",
      capacidad: "69,176",
      icono: "fas fa-shield-alt",
      detalle:
        "Hogar de los Philadelphia Eagles, este estadio acogerá dos de los seis partidos del Grupo E. Filadelfia es una ciudad con gran tradición deportiva y vibrante ambiente aficionado.",
    },
    {
      ciudad: "Toronto, Ontario, Canadá",
      estadio: "BMO Field",
      capacidad: "45,736",
      icono: "fas fa-maple-leaf",
      detalle:
        "El único estadio canadiense del Grupo E, sede del duelo entre Alemania y Costa de Marfil. BMO Field es el hogar del Toronto FC de la MLS y es el estadio de fútbol más grande de Canadá.",
    },
    {
      ciudad: "Kansas City, Missouri, EE.UU.",
      estadio: "Arrowhead Stadium",
      capacidad: "76,416",
      icono: "fas fa-fire",
      detalle:
        "Uno de los estadios más ruidosos del mundo según el Libro Guinness de los Récords. Casa de los Kansas City Chiefs de la NFL, acogerá el partido entre Ecuador y Curaçao.",
    },
    {
      ciudad: "East Rutherford, Nueva Jersey, EE.UU.",
      estadio: "MetLife Stadium",
      capacidad: "82,500",
      icono: "fas fa-trophy",
      detalle:
        "La sede de la Gran Final del Mundial 2026 también albergará el decisivo cierre del Grupo E entre Ecuador y Alemania. Es el estadio de mayor capacidad del torneo y uno de los más modernos de Norteamérica.",
    },
  ],
  curiosidades: [
    {
      titulo: "La Nación más Pequeña del Mundial",
      icono: "fas fa-globe-americas",
      desc: "Curaçao se convierte en el país más pequeño en participar jamás en una Copa del Mundo, con una población de apenas 158,000 habitantes. La isla caribeña superó todo pronóstico al ganar el Grupo B de la CONCACAF en noviembre de 2025.",
    },
    {
      titulo: "Cuatro Estrellas Alemanas",
      icono: "fas fa-star",
      desc: "Alemania es la selección europea con más títulos mundiales, habiendo levantado la copa en cuatro ocasiones: Suiza 1954, Alemania Occidental 1974, Italia 1990 y Brasil 2014. Llegan a este torneo con el hambre de una quinta estrella que se les escapa desde hace doce años.",
    },
    {
      titulo: "Ecuador y el Sueño de los Octavos",
      icono: "fas fa-chart-line",
      desc: "La mejor actuación de Ecuador en una Copa del Mundo fue en Alemania 2006, cuando llegaron a los octavos de final antes de ser eliminados por Inglaterra. En este 2026, la 'Tri' busca igualar y superar esa histórica actuación.",
    },
  ],
};

// Renderizar tabla de posiciones
function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";

  datosGrupoE.equipos.forEach((eq, index) => {
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

  datosGrupoE.equipos.forEach((eq) => {
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

  datosGrupoE.calendario.forEach((jornada) => {
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