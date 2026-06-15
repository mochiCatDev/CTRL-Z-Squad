// Objecto de datos con Historia, Analisis y Partidos
const datosGrupoC = {
  equipos: [
    {
      nombre: "Brasil",
      flag: `<img src="https://flagcdn.com/w40/br.png" alt="Brasil" class="flag-icon">`,
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
        "La selección más exitosa en la historia de los Mundiales con cinco títulos (1958, 1962, 1970, 1994 y 2002). Brasil es sinónimo de fútbol espectáculo y ha participado en todas las Copas del Mundo organizadas por la FIFA.",
      analisis:
        "Llega como uno de los grandes favoritos del torneo gracias a su enorme talento ofensivo, velocidad por las bandas y capacidad para controlar los partidos mediante la posesión del balón.",
    },
    {
      nombre: "Marruecos",
      flag: `<img src="https://flagcdn.com/w40/ma.png" alt="Marruecos" class="flag-icon">`,
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
        "La gran revelación africana del Mundial 2022 al convertirse en la primera selección africana en alcanzar unas semifinales mundialistas.",
      analisis:
        "Destacan por su organización defensiva, intensidad táctica y rapidez en los contragolpes. Son un rival muy difícil de superar cuando logran cerrar espacios.",
    },
    {
      nombre: "Haití",
      flag: `<img src="https://flagcdn.com/w40/ht.png" alt="Haití" class="flag-icon">`,
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
        "Una de las selecciones emergentes de la CONCACAF que busca consolidarse en la élite internacional y dejar huella en el Mundial 2026.",
      analisis:
        "Equipo dinámico y físico que apuesta por transiciones rápidas y una gran entrega colectiva durante los noventa minutos.",
    },
    {
      nombre: "Escocia",
      flag: `<img src="https://flagcdn.com/w40/gb-sct.png" alt="Escocia" class="flag-icon">`,
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
        "Una selección histórica del fútbol europeo que busca recuperar protagonismo internacional tras varias generaciones de jugadores talentosos.",
      analisis:
        "Su principal fortaleza radica en la disciplina táctica, la intensidad física y la capacidad de competir ante rivales de cualquier nivel.",
    },
  ],

  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "Brasil vs. Marruecos",
          fecha: "Sábado, 13 de Junio, 2026",
          sede: "Sede Mundialista (6:00 p.m.)",
        },
        {
          rivales: "Haití vs. Escocia",
          fecha: "Sábado, 13 de Junio, 2026",
          sede: "Sede Mundialista (9:00 p.m.)",
        },
      ],
    },

    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "Escocia vs. Marruecos",
          fecha: "Viernes, 19 de Junio, 2026",
          sede: "Sede Mundialista",
        },
        {
          rivales: "Brasil vs. Haití",
          fecha: "Viernes, 19 de Junio, 2026",
          sede: "Sede Mundialista",
        },
      ],
    },

    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "Escocia vs. Brasil",
          fecha: "Miércoles, 24 de Junio, 2026",
          sede: "Sede Mundialista",
        },
        {
          rivales: "Marruecos vs. Haití",
          fecha: "Miércoles, 24 de Junio, 2026",
          sede: "Sede Mundialista",
        },
      ],
    },
  ],
};

const infoComplementariaGrupoC = {
  sedes: [
        {
      ciudad: "Los Ángeles, Estados Unidos",
      estadio: "SoFi Stadium",
      capacidad: "70,240",
      icono: "fas fa-city",
      detalle:
        "Uno de los estadios más modernos del mundo, equipado con tecnología de última generación y una enorme pantalla panorámica.",
    },
    {
      ciudad: "Dallas, Estados Unidos",
      estadio: "AT&T Stadium",
      capacidad: "80,000",
      icono: "fas fa-football-ball",
      detalle:
        "Conocido por su espectacular arquitectura y su gigantesca pantalla central, será una de las sedes principales del Mundial 2026.",
    },
    {
      ciudad: "Miami, Estados Unidos",
      estadio: "Hard Rock Stadium",
      capacidad: "65,000",
      icono: "fas fa-umbrella-beach",
      detalle:
        "Ubicado en una de las ciudades más turísticas del continente, será escenario de importantes encuentros internacionales.",
    },
  ],

  curiosidades: [
    {
      titulo: "Brasil y su historia",
      icono: "fas fa-trophy",
      desc:
        "Brasil es la única selección que ha participado en todas las ediciones de la Copa Mundial de la FIFA y además posee cinco títulos mundiales.",
    },
    {
      titulo: "La sorpresa africana",
      icono: "fas fa-star",
      desc:
        "Marruecos hizo historia en Qatar 2022 al convertirse en la primera selección africana en alcanzar unas semifinales mundialistas.",
    },
    {
      titulo: "Escocia regresa",
      icono: "fas fa-futbol",
      desc:
        "Escocia continúa consolidando una nueva generación de futbolistas que busca devolver al país a los primeros planos del fútbol internacional.",
    },
    {
      titulo: "El crecimiento de Haití",
      icono: "fas fa-chart-line",
      desc:
        "Haití representa una de las selecciones con mayor crecimiento en la CONCACAF gracias al desarrollo de jóvenes talentos y futbolistas que militan en ligas internacionales.",
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
  contenedor.innerHTML = "";

  datosGrupoC.equipos.forEach((eq) => {
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

  datosGrupoC.calendario.forEach((jornada) => {

    const cardJornada = document.createElement("div");

    cardJornada.classList.add("jornada-card");

    let partidosHTML =
      `<div class="jornada-titulo">${jornada.jornada}</div>`;

    jornada.partidos.forEach((partido) => {

      partidosHTML += `
                <div class="partido">

                    <div class="partido-equipos">
                        ${partido.rivales}
                    </div>

                    <div class="partido-detalles">
                        <i class="far fa-calendar-alt"></i>
                        ${partido.fecha}
                    </div>

                    <div class="partido-detalles">
                        <i class="fas fa-map-marker-alt"></i>
                        ${partido.sede}
                    </div>

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
      <div class="jornada-titulo">
        <i class="${sede.icono}"></i> ${sede.estadio}
      </div>

      <div class="partido">

        <div class="partido-equipos"
          style="font-size:1rem; color:#d4af37;">

          <i class="fas fa-map-marker-alt"></i>
          ${sede.ciudad}

        </div>

        <div class="partido-detalles" style="margin:6px 0;">

          <i class="fas fa-users"></i>

          <strong>Capacidad:</strong>

          ${sede.capacidad} espectadores

        </div>

        <p
          style="
            font-size:0.9rem;
            color:#cbd5e1;
            text-align:justify;
            margin-top:8px;
            line-height:1.4;
          "
        >
          ${sede.detalle}
        </p>

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

      <div
        class="partido-equipos"
        style="
          color:#e0a96d;
          font-size:1.1rem;
          display:flex;
          align-items:center;
          gap:8px;
        "
      >

        <i class="${curio.icono}"></i>

        ${curio.titulo}

      </div>

      <p
        style="
          font-size:0.95rem;
          color:#cbd5e1;
          text-align:justify;
          margin-top:6px;
          line-height:1.5;
        "
      >

        ${curio.desc}

      </p>

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