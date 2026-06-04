// OBJETO DE DATOS CON HISTORIA, ANÁLISIS, ESTADÍSTICAS Y PARTIDOS
const datosGrupoF = {
    equipos: [
        { nombre: "Países Bajos", flag: "🇳🇱", conf: "UEFA", pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0, historia: "Tres veces subcampeona del mundo (1974, 1978, 2010), la 'Naranja Mecánica' es históricamente el equipo con mejor juego técnico que busca saldar su deuda de alzar la copa.", analisis: "Llega invicta en las eliminatorias europeas. Con un bloque defensivo sólido liderado por experimentados zagueros y transiciones rápidas en el medio campo, es la clara candidata a ganar el liderato del grupo." },
        { nombre: "Japón", flag: "🇯🇵", conf: "AFC", pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0, historia: "Dominadora absoluta del continente asiático en las últimas décadas. Su mayor logro ha sido alcanzar los octavos de final en múltiples ocasiones, destacando su gran campaña en el 2022.", analisis: "Un equipo sumamente ordenado, veloz y con una resistencia física incansable. Sus jugadores en las ligas top de Europa le aportan el roce internacional para competir directamente por la clasificación." },
        { nombre: "Suecia", flag: "🇸🇪", conf: "UEFA", pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0, historia: "Subcampeona mundial en 1958 y tercer lugar en 1994. Se caracteriza por su fortaleza física, juego aéreo y rigor táctico colectivo sobre las individualidades.", analisis: "Regresa al plano mundialista tras un recambio generacional exitoso. Su punto más fuerte radica en un ataque dinámico y joven que promete generar problemas a cualquier defensa del grupo." },
        { nombre: "Túnez", flag: "🇹🇳", conf: "CAF", pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0, pts: 0, historia: "Una de las selecciones africanas más competitivas en copas del mundo, con el histórico hito de ser la primera de su continente en ganar un partido mundialista en 1978.", analisis: "Clasificó mostrando un cerrojo defensivo impecable. Su estrategia se centrará en poblar la media cancha, forzar el error del rival y aprovechar las jugadas a balón parado." }
    ],
    calendario: [
        {
            jornada: "Jornada 1",
            partidos: [
                { rivales: "Países Bajos vs. Japón", fecha: "Domingo, 14 de Junio, 2026", sede: "Estadio de Dallas" },
                { rivales: "Suecia vs. Túnez", fecha: "Domingo, 14 de Junio, 2026", sede: "Estadio de Monterrey" }
            ]
        },
        {
            jornada: "Jornada 2",
            partidos: [
                { rivales: "Países Bajos vs. Suecia", fecha: "Sábado, 20 de Junio, 2026", sede: "Estadio de Houston" },
                { rivales: "Túnez vs. Japón", fecha: "Domingo, 21 de Junio, 2026", sede: "Estadio de Monterrey" }
            ]
        },
        {
            jornada: "Jornada 3",
            partidos: [
                { rivales: "Japón vs. Suecia", fecha: "Jueves, 25 de Junio, 2026", sede: "Estadio de Dallas" },
                { rivales: "Túnez vs. Países Bajos", fecha: "Jueves, 25 de Junio, 2026", sede: "Estadio de Kansas City" }
            ]
        }
    ]
};

// 1. RENDERIZAR TABLA DE POSICIONES CON DATOS EN 0
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

// 2. RENDERIZAR TARJETAS DE HISTORIA Y ANÁLISIS
function cargarEquipos() {
    const contenedor = document.getElementById("contenedor-equipos");
    contenedor.innerHTML = "";

    datosGrupoF.equipos.forEach(eq => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-equipo");
        tarjeta.innerHTML = `
            <div class="card-header">
                <h3>${eq.flag} ${eq.nombre}</h3>
                <span class="confederacion">${eq.conf}</span>
            </div>
            <div class="card-body">
                <div class="info-bloque">
                    <h4>📜 Historia</h4>
                    <p>${eq.historia}</p>
                </div>
                <div class="info-bloque">
                    <h4>📊 Análisis Competitivo 2026</h4>
                    <p>${eq.analisis}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// 3. RENDERIZAR CALENDARIO DE PARTIDOS
function cargarCalendario() {
    const contenedor = document.getElementById("contenedor-calendario");
    contenedor.innerHTML = "";

    datosGrupoF.calendario.forEach(jornada => {
        const cardJornada = document.createElement("div");
        cardJornada.classList.add("jornada-card");
        
        let partidosHTML = `<div class="jornada-titulo">${jornada.jornada}</div>`;
        
        jornada.partidos.forEach(partido => {
            partidosHTML += `
                <div class="partido">
                    <div class="partido-equipos">${partido.rivales}</div>
                    <div class="partido-detalles">📅 ${partido.fecha}</div>
                    <div class="partido-detalles">📍 ${partido.sede}</div>
                </div>
            `;
        });

        cardJornada.innerHTML = partidosHTML;
        contenedor.appendChild(cardJornada);
    });
}

// INICIALIZACIÓN COMPLETA DEL SISTEMA AL CARGAR EL DOM
document.addEventListener("DOMContentLoaded", () => {
    cargarTabla();
    cargarEquipos();
    cargarCalendario();
});