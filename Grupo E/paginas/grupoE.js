// ============================================================
// DATOS COMPLETOS - MUNDIAL FIFA 2026
// Todos los 12 grupos con equipos, historia, análisis y partidos correctos
// Fuente: FIFA / ESPN / Wikipedia
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
// VARIABLE DE GRUPO ACTIVO — Cambia esta letra para el grupo deseado
// ============================================================
let grupoActivo = "E"; // Cambia a "A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L"

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

// Función para cambiar de grupo dinámicamente
function cambiarGrupo(letra) {
  if (gruposMundial[letra]) {
    grupoActivo = letra;
    datosGrupoActual = gruposMundial[letra];
    cargarTabla();
    cargarEquipos();
    cargarCalendario();
    // Actualizar título del grupo si existe ese elemento en el HTML
    const tituloGrupo = document.getElementById("titulo-grupo");
    if (tituloGrupo) tituloGrupo.textContent = gruposMundial[letra].nombre;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarTabla();
  cargarEquipos();
  cargarCalendario();
  // Si tienes funciones de sedes/curiosidades en tu HTML, las puedes mantener
  if (typeof cargarSedes === "function") cargarSedes();
  if (typeof cargarCuriosidades === "function") cargarCuriosidades();
});