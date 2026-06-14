// Objecto de datos con Historia, Analisis y Partidos
const datosGrupoB = {
  equipos: [
    {
      nombre: "Canadá",
      flag: `<img src="https://flagcdn.com/w40/ca.png" alt="Canadá" class="flag-icon">`,
      conf: "CONCACAF",
      pj: 1, //partidos jugados
      pg: 0, //partidos ganados
      pe: 1, //partidos empatados
      pp: 0, //partidos perdidos
      gf: 1, //goles a favor
      gc: 1, //goles en contra
      dg: 0, //diferencia de goles
      pts: 1, //puntos
      historia:
        "Coanfitrión de la Copa del Mundo por primera vez en su historia (2026), tras haber participado únicamente en las ediciones de México 1986 y Catar 2022. La selección canadiense busca consolidar su crecimiento internacional y conseguir su primera victoria histórica en una cita mundialista cobijada por su afición en estadios como el icónico BC Place y el BMO Field.",
      analisis:
        "Al jugar en territorio propio, la motivación de hacer historia ante sus fanáticos es máxima, aunque el peso de la localía añadirá una presión inédita. Su fortaleza principal radicará en la velocidad y el dinamismo vertical comandado por figuras de élite europea como Alphonso Davies, sumado a un bloque colectivo que ha madurado notablemente en los últimos años.",
    },
    {
      nombre: "Bosnia y Herzegovina",
      flag: `<img src="https://flagcdn.com/w160/ba.png" alt="Bosnia y Herzegovina" class="flag-icon">`,
      conf: "UEFA",
      pj: 1,
      pg: 0,
      pe: 1,
      pp: 0,
      gf: 1,
      gc: 1,
      dg: 0,
      pts: 1,
      historia:
        "Debutante y gran sorpresa europea en esta cita mundialista (2026), marcando apenas su segunda aparición histórica en un torneo de la FIFA tras su recordada participación en Brasil 2014. La selección bosnia busca emular las grandes hazañas de los Balcanes y avanzar por primera vez a la fase de eliminación directa, respaldada por el orgullo de su afición en escenarios de máxima exigencia internacional.",
      analisis:
        "Al llegar al torneo tras una clasificación épica por la vía de la repesca, la motivación del plantel se encuentra por las nubes, aunque deberán saber gestionar la presión y el desgaste emocional de partidos de alta intensidad. Su fortaleza principal radicará en su juego aéreo y su tradicional orden táctico defensivo, sumado a la experiencia y jerarquía en el ataque comandada por su histórico referente Edin Džeko.",
    },
    {
      nombre: "Catar",
      flag: `<img src="https://flagcdn.com/w160/qa.png" alt="Catar" class="flag-icon">`,
      conf: "AFC",
      pj: 1,
      pg: 0,
      pe: 1,
      pp: 0,
      gf: 1,
      gc: 1,
      dg: 0,
      pts: 1,
      historia:
        "Vigente bicampeón de la Copa Asiática (2019 y 2023) que asiste a su segunda Copa del Mundo consecutiva en 2026, tras haber debutado como organizador en la edición de Catar 2022. La selección catarí busca dejar atrás los nervios de su debut absoluto y superar por primera vez la fase de grupos en suelo americano, respaldada por un proceso de preparación continuo en infraestructuras de alto rendimiento.",
      analisis:
        "Al competir lejos de casa y sin la ventaja de la localía que tuvieron en 2022, la motivación para demostrar su hegemonía asiática a escala global es inmensa. Su fortaleza principal radicará en el entendimiento colectivo de un plantel que lleva años jugando junto, sumado al desequilibrio individual y la letalidad en el contragolpe de su gran figura ofensiva, Akram Afif.",
    },
    {
      nombre: "Suiza",
      flag: `<img src="https://flagcdn.com/w40/ch.png" alt="Suiza" class="flag-icon">`,
      conf: "UEFA",
      pj: 1,
      pg: 0,
      pe: 1,
      pp: 0,
      gf: 1,
      gc: 1,
      dg: 0,
      pts: 1,
      historia:
        "El seleccionado con mayor trayectoria del bloque, sumando su decimocuarta participación en una Copa del Mundo (2026). Consagrada como un pilar histórico del fútbol europeo tras alcanzar los cuartos de final en tres ocasiones, la selección helvética busca romper su propio techo histórico en la era moderna y consolidarse entre las potencias de élite mundial bajo el aliento de sus fieles aficionados.",
      analisis:
        "Al consolidarse como el cabeza de serie sobre el papel, la motivación por ratificar su jerarquía internacional es absoluta, cargando a su vez con la máxima responsabilidad táctica de liderar el grupo. Su fortaleza principal radicará en un sólido y experimentado mediocampo comandado por su histórico capitán Granit Xhaka, complementado por un sistema defensivo sumamente ordenado y compacto que suele ser un dolor de cabeza para cualquier rival.",
    },
  ],
  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "Canadá vs. Bosnia y Herzegovina",
          fecha: "Viernes, 12 de Junio, 2026",
          sede: "BMO Field, Toronto (3:00 p.m.)",
        },
        {
          rivales: "Catar vs. Suiza",
          fecha: "Sábado, 13 de Junio, 2026",
          sede: "Levi's Stadium, San Francisco (5:00 p.m.)",
        },
      ],
    },
    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "Suiza vs. Bosnia y Herzegovina",
          fecha: "Miércoles, 18 de Junio, 2026",
          sede: "SoFi Stadium, Los Ángeles (2:00 p.m.)",
        },
        {
          rivales: "Canadá vs. Catar",
          fecha: "Miércoles, 18 de Junio, 2026",
          sede: "BC Place, Vancouver (8:00 p.m.)",
        },
      ],
    },
    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "Suiza vs. Canadá",
          fecha: "Miércoles, 24 de Junio, 2026",
          sede: "BC Place, Vancouver (6:00 p.m.)",
        },
        {
          rivales: "Bosnia y Herzegovina vs. Catar",
          fecha: "Miércoles, 24 de Junio, 2026",
          sede: "BMO Field, Toronto (6:00 p.m.)",
        },
      ],
    },
  ],
};
const infoComplementariaGrupoB = {
  sedes: [
    {
      ciudad: "Toronto, Canadá",
      estadio: "BMO Field",
      capacidad: "45,736",
      icono: "fas fa-map-marker-alt",
      detalle:
        "Estadio nacional de Canadá que ha sido expandido especialmente para esta cita mundialista; albergará el histórico partido de debut del grupo entre Canadá y Bosnia y Herzegovina.",
    },
    {
      ciudad: "Vancouver, Canadá",
      estadio: "BC Place",
      capacidad: "54,500",
      icono: "fas fa-roof-top",
      detalle:
        "Famoso por su imponente techo retráctil y su estructura de soporte por cables, este emblemático e histórico recinto canadiense acogerá los cierres de jornada clave del grupo.",
    },
    {
      ciudad: "San Francisco, EE.UU.",
      estadio: "Levi's Stadium",
      capacidad: "68,500",
      icono: "fas fa-bridge",
      detalle:
        "Un estadio ecosostenible de alta tecnología ubicado en Santa Clara, en pleno corazón de Silicon Valley, asignado para el choque de Catar frente a Suiza.",
    },
    {
      ciudad: "Los Ángeles, EE.UU.",
      estadio: "SoFi Stadium",
      capacidad: "70,240",
      icono: "fas fa-film",
      detalle:
        "La obra maestra arquitectónica más costosa y futurista del deporte mundial, equipada con una gigantesca pantalla ovalada de doble vista para recibir el duelo entre Suiza y Bosnia.",
    },
  ],
  curiosidades: [
    {
      titulo: "La Espera Canadiense",
      icono: "fas fa-history",
      desc: "Canadá disputará su tercer Mundial en 2026 tras sus apariciones en México 1986 y Catar 2022. La selección norteamericana llega con la misión de conseguir la primera victoria de su historia en una Copa del Mundo ante su propio público.",
    },
    {
      titulo: "La Hazaña de la Repesca",
      icono: "fas fa-chart-line",
      desc: "Bosnia y Herzegovina protagonizó la gran sorpresa de las eliminatorias europeas al clasificar de forma agónica por la vía de la repesca, dejando en el camino a la histórica tetracampeona Italia tras vencerla en una tanda de penales (5-2).",
    },
    {
      titulo: "La Consistencia Helvética",
      icono: "fas fa-trophy",
      desc: "Suiza es el gigante en experiencia del Grupo B al sumar 14 participaciones mundialistas. La selección helvética ostenta un récord defensivo histórico en la FIFA: es el único país eliminado de un Mundial (Alemania 2006) sin recibir un solo gol en todo el torneo.",
    },
    {
      titulo: "La Redención del Campeón",
      icono: "fas fa-crown",
      desc: "Catar llega al continente americano con la chapa de ser el vigente bicampeón de la Copa Asiática (2019 y 2023) liderado por Akram Afif, buscando sacudirse la presión y redimir la pálida imagen colectiva que dejó al debutar en su propio Mundial en 2022.",
    },
  ],
};

// Renderizar tabla de posiciones
function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  tbody.innerHTML = "";

  datosGrupoB.equipos.forEach((eq, index) => {
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

  datosGrupoB.equipos.forEach((eq) => {
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

  datosGrupoB.calendario.forEach((jornada) => {
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

  infoComplementariaGrupoB.sedes.forEach((sede) => {
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

  infoComplementariaGrupoB.curiosidades.forEach((curio) => {
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
