const datosAlemania = {
    estadisticas:{pj: 1, pg: 1, pe: 0, pp: 0, gf: 7, gc: 0, dg: "+6", pts: 3 },
    historia: "Cuatro veces campeones del mundo (1954, 1974, 1990 y 2014), la 'Mannschaft' es una de las selecciones más laureadas de la historia. Buscan reivindicarse tras una decepcionante fase de grupos en Qatar 2022.",
    analisis: "Alemania presentará un equipo renovado con juventud y experiencia equilibradas. Su presión organizada, la salida de balón limpia desde atrás y la potencia en ataque los convierten en favoritos claros del grupo.",
    partidos: [
        {
        rivales: "Alemania vs. Curaçao",
        fecha: "Domingo, 14 de Junio, 2026",
        sede: "NRG Stadium, Houston, Texas (1:00 p.m. ET)",
    },
        {
        rivales: "Alemania vs. Costa de Marfil",
        fecha: "Sábado, 20 de Junio, 2026",
        sede: "BMO Field, Toronto, Canadá (4:00 p.m. ET)",
        },
    {
        rivales: "Alemania vs. Ecuador",
        fecha: "Jueves, 25 de Junio, 2026",
        sede: "MetLife Stadium, East Rutherford, NJ (4:00 p.m. ET)",
    },
    ]
}

function mostrarDatos(){
    document.getElementById("historia-texto").innerText = datosAlemania.historia;
    document.getElementById("analisis-texto").innerText = datosAlemania.analisis;

    document.getElementById("tabla-rendimiento").innerHTML = `
        <tr>
            <td>${datosAlemania.estadisticas.pj}</td><td>${datosAlemania.estadisticas.pg}</td><td>${datosAlemania.estadisticas.pe}</td>
            <td>${datosAlemania.estadisticas.pp}</td><td>${datosAlemania.estadisticas.gf}</td><td>${datosAlemania.estadisticas.gc}</td>
            <td>${datosAlemania.estadisticas.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosAlemania.estadisticas.pts}</td>
        </tr>`

    const contenedor = document.getElementById("lista-partidos");
    datosAlemania.partidos.forEach((p) => {
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