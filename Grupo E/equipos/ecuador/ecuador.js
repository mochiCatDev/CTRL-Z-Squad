const datosEcuador = {
    estadisticas:{pj: 1, pg: 0, pe: 0, pp: 1, gf: 0, gc: 1, dg: -1, pts: 0 },
    historia: "La 'Tri' llega a su cuarta Copa del Mundo. Memorables por inaugurar el Mundial de Alemania 2006 con victoria ante el anfitrión, y por clasificar con grandes actuaciones en las difíciles Eliminatorias Sudamericanas.",
    analisis: "Ecuador es un equipo físico y ordenado, con una columna vertebral sólida y experiencia mundialista. Su apuesta por la verticalidad y el juego directo a Enner Valencia, su referente histórico, es su señal de identidad.",
    partidos: [
        {
        rivales: "Ecuador vs. Costa de Marfil",
        fecha: "Domingo, 14 de Junio, 2026",
        sede: "Lincoln Financial Field, Filadelfia (7:00 p.m. ET)",
    },
        {
        rivales: "Ecuador vs. Curaçao",
        fecha: "Sábado, 20 de Junio, 2026",
        sede: "Arrowhead Stadium, Kansas City, MO (8:00 p.m. ET)",
        },
    {
        rivales: "Ecuador vs. Alemania",
        fecha: "Jueves, 25 de Junio, 2026",
        sede: "MetLife Stadium, East Rutherford, NJ (4:00 p.m. ET)",
    },
    ]
}

function mostrarDatos(){
    document.getElementById("historia-texto").innerText = datosEcuador.historia;
    document.getElementById("analisis-texto").innerText = datosEcuador.analisis;

    document.getElementById("tabla-rendimiento").innerHTML = `
        <tr>
            <td>${datosEcuador.estadisticas.pj}</td><td>${datosEcuador.estadisticas.pg}</td><td>${datosEcuador.estadisticas.pe}</td>
            <td>${datosEcuador.estadisticas.pp}</td><td>${datosEcuador.estadisticas.gf}</td><td>${datosEcuador.estadisticas.gc}</td>
            <td>${datosEcuador.estadisticas.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosEcuador.estadisticas.pts}</td>
        </tr>`

    const contenedor = document.getElementById("lista-partidos");
    datosEcuador.partidos.forEach((p) => {
    contenedor.innerHTML += `
        <div class="partido-item">
            <div class="partido-titulo">${p.rivales}</div>
            <div class="partido-sub"><i class="far fa-calendar-alt"></i> ${p.fecha}</div>
            <div class="partido-sub"><i class="fas fa-map-marker-alt"></i> ${p.sede}</div>
        </div>`;
  }
);
}
document.addEventListener("DOMContentLoaded", mostrarDatos);