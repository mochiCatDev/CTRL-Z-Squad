const datosGrupoB = {
  equipos: [
    {
      nombre: "Canada",
      flag: `<img src="https://flagcdn.com/w40/ca.png" alt="Canada" class="flag-icon">`,
      conf: "CONCACAF",
      pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1,
      url: "../equipos/canada/canada.html",
    },
    {
      nombre: "Catar",
      flag: `<img src="https://flagcdn.com/w40/qa.png" alt="Catar" class="flag-icon">`,
      conf: "AFC",
     pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1,
      url: "../equipos/catar/catar.html",
    },
    {
      nombre: "Bosnia y Herzegovina",
      flag: `<img src="https://flagcdn.com/w40/ba.png" alt="Bosnia y Herzegovina" class="flag-icon">`,
      conf: "UEFA",
      pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1,
      url: "../equipos/bosnia/bosnia.html",
    },
    {
      nombre: "Suiza",
      flag: `<img src="https://flagcdn.com/w40/ch.png" alt="Suiza" class="flag-icon">`,
      conf: "UEFA",
      pj: 1, pg: 1, pe: 1, pp: 0, gf: 1, gc: 1, dg: 0, pts: 1,
      url: "../equipos/suiza/suiza.html",
    },
  ],
  calendario: [
    {
      jornada: "Jornada 1",
      partidos: [
        {
          rivales: "Canadá vs. Bosnia y Herzegovina",
          fecha: "Viernes, 12 de Junio, 2026",
          sede: "Toronto Stadium, (Toronto, Canadá) (12:00 p.m.)",
        },
        {
          rivales: "Catar vs. Suiza",
          fecha: "Sábado, 13 de Junio, 2026",
          sede: "San Francisco Stadium, (Santa Clara, EE.UU.) (12:00 p.m.)",
        },
      ],
    },
    {
      jornada: "Jornada 2",
      partidos: [
        {
          rivales: "Suiza vs. Bosnia y Herzegovina",
          fecha: "Jueves, 18 de Junio 2026",
          sede: "Los Angeles Stadium, (Inglewood, EE.UU.) (12:00 p.m.)",
        },
        {
          rivales: "Canadá vs. Catar",
          fecha: "Jueves, 18 de Junio 2026",
          sede: "BC Place Stadium, (Vancouver, Canadá) (15:00 p.m.)",
        },
      ],
    },
    {
      jornada: "Jornada 3",
      partidos: [
        {
          rivales: "Suiza vs. Canadá",
          fecha: "Miércoles, 24 de Junio 2026",
          sede: "BC Place Stadium, (Vancouver, Canadá) (15:00 p.m.)",
        },
        {
          rivales: "Bosnia y Herzegovina vs. Catar",
          fecha: "Miércoles, 24 de Junio 2026",
          sede: "Seattle Stadium, (Seattle, EE.UU.) (15:00 p.m.)",
        },
      ],
    },
  ],
};

const infoComplementariaGrupoB = {
  sedes: [
    {
      ciudad: "Toronto, Ontario - Canadá",
      estadio: "Toronto Stadium (BMO Field)",
      capacidad: "45,000",
      icono: "fas fa-landmark",
      detalle:
        "Es el estadio más pequeño del torneo. Se intalaron gradas temporales adicionales y pantallas gigantes para cumplir con la norma FIFA. Recibio el partido inagural del grupo (Canadá vs. Bosnia)",
    },
    {
      ciudad: "Santa Clara, California - EEUU",
      estadio: "San Francisco Stadium (Levi`s Stadium)",
      capacidad: "68,500",
      icono: "fas fa-mountain",
      detalle:
        "Destaca por su alta tecnología ecológica y arquitectura sustentable.Ubicado en el corazón de Silicon Valley, cuenta con paneles solares y un techo verde transitable de donde se extraen recursos locales",
    },
    {
      ciudad: "Inglewood, California - EEUU",
      estadio: "Los Angeles Stadium (SoFi Stadium)",
      capacidad: "70,000",
      icono: "fas fa-volcano",
      detalle:
        "Una de las joyas futuristas del Mundial. Está construido bajo el nivel del suelo, tiene un techo translúcido gigante y una imponente pantalla 360 grados llamada The Infinity Screen",
    },
     {
      ciudad: "Vancouver, Columbia Britanica - Canadá",
      estadio: "BC Place Vancouver",
      capacidad: "54,000",
      icono: "fas fa-volcano",
      detalle:
        "Un icono arquitectónico canadiense a orillas del False Creek. Cuenta con una estructura de soporte por cables y un impresionante techo retráctil. Alberga dos partidos de terminantes de este grupo",
    },
  ],
  curiosidades: [
    {
      titulo: "Norteamérica en la cancha",
      icono: "fas fa-leaf",
      desc: "Canadá es coanfritión del Mundial 2026. Históricamente, el fútbol masculino del pais ha vivido a la sombra del hocker sobre hielo, registrado antes de este torneo solo dos participaciones mundialista (México 1986 y Catar 2022), en las cuales acumuló seis derrotas consecutivas sin sumar un solo punto. Su gol más rápido en la historia de los mundiales lo anóto Alphono Davies a los 68 segundos contra Croacia en 2022",
    },
    {
      titulo: "Fortaleza alpina insuperable",
      icono: "fas fa-clock",
      desc: "La seleccion de Suiza posee un récord defensivo inigualable en la historia de la Copa Mundial: Es el unico pais que hacido eliminado de un Mundial sin conceder un solo gol en tiempo regular. Sucedio en Alemania 2006 donde quedaron fuera en octabos de final por penales a Ucrania tras mantener su portería en cero durante todo el torneo.",
    },
    {
      titulo: "Dominio en el desierto",
      icono: "fas fa-desert",
      desc: "Catar se corono bicampeón consecutivo de la copa Asiatica (2019 y 2024), consolodandose como un potencia regional en tiempo record su gran figura actual, Akram Afif, hizo historia en el futbol local al ser legido por sexta ocasión como el mejor jugador de la temporada en su pais. El Mundial 2026 es apenas la segunda participacion en su historia y la primera lograda mediante un proceso de clasificación en la cancha",
    },
  ],
};

function cargarTabla() {
  const tbody = document.getElementById("tabla-cuerpo");
  if (!tbody) return;
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

function cargarEquipos() {
  const contenedor = document.getElementById("contenedor-equipos");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  datosGrupoB.equipos.forEach((eq) => {
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

function cargarCalendario() {
  const contenedor = document.getElementById("contenedor-calendario");
  if (!contenedor) return;
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
