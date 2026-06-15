const datosCostaDeMarfil = {
    estadisticas:{pj: 1, pg: 1, pe: 0, pp: 0, gf: 1, gc: 0, dg: "+1", pts: 3 },
    historia: "Los 'Elefantes' son una de las grandes potencias del fútbol africano. Campeones de África en 2015 y 2024, cuentan con generaciones de jugadores que militan en los mejores clubes de Europa.",
    analisis: "Equipo atlético, veloz y con gran calidad técnica en ataque. Con jugadores como Seko Fofana y una delantera dinámica, buscarán complicar la vida a Alemania y alzarse como los mejores de África en el torneo.",
    partidos: [
        {
        rivales: "Costa de Marfil vs. Ecuador",
        fecha: "Domingo, 14 de Junio, 2026",
        sede: "Lincoln Financial Field, Filadelfia (7:00 p.m. ET)",
    },
        {
        rivales: "Costa de Marfil vs. Alemania",
        fecha: "Sábado, 20 de Junio, 2026",
        sede: "BMO Field, Toronto, Canadá (4:00 p.m. ET)",
        },
    {
        rivales: "Costa de Marfil vs. Curaçao",
        fecha: "Jueves, 25 de Junio, 2026",
        sede: "Lincoln Financial Field, Filadelfia (4:00 p.m. ET)",
    },
    ]
}

function mostrarDatos(){
    document.getElementById("historia-texto").innerText = datosCostaDeMarfil.historia;
    document.getElementById("analisis-texto").innerText = datosCostaDeMarfil.analisis;

    document.getElementById("tabla-rendimiento").innerHTML = `
        <tr>
            <td>${datosCostaDeMarfil.estadisticas.pj}</td><td>${datosCostaDeMarfil.estadisticas.pg}</td><td>${datosCostaDeMarfil.estadisticas.pe}</td>
            <td>${datosCostaDeMarfil.estadisticas.pp}</td><td>${datosCostaDeMarfil.estadisticas.gf}</td><td>${datosCostaDeMarfil.estadisticas.gc}</td>
            <td>${datosCostaDeMarfil.estadisticas.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosCostaDeMarfil.estadisticas.pts}</td>
        </tr>`

    const contenedor = document.getElementById("lista-partidos");
    datosCostaDeMarfil.partidos.forEach((p) => {
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