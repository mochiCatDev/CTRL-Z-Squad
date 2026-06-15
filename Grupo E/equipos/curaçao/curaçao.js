const datosCuraçao = {
    estadisticas:{pj: 1, pg: 0, pe: 0, pp: 1, gf: 0, gc: 7, dg: -7, pts: 3 },
    historia: "Historia pura: Curaçao es la nación más pequeña por población (156,000 habitantes) que jamás ha clasificado a una Copa del Mundo. Su debut es uno de los hitos más grandes del fútbol CONCACAF moderno.",
    analisis: "Comandados por el técnico Dick Advocaat y con el capitán Leandro Bacuna y su hermano Juninho como referentes, apostarán por una organización defensiva férrea e intentarán aprovechar cada ocasión al contraataque.",
    partidos: [
        {
        rivales: "Curaçao vs. Alemania",
        fecha: "Domingo, 14 de Junio, 2026",
        sede: "NRG Stadium, Houston, Texas (1:00 p.m. ET)",
    },
        {
        rivales: "Curaçao vs. Ecuador",
        fecha: "Sábado, 20 de Junio, 2026",
        sede: "Arrowhead Stadium, Kansas City, MO (8:00 p.m. ET)",
        },
    {
        rivales: "Curaçao vs. Costa de Marfil",
        fecha: "Jueves, 25 de Junio, 2026",
        sede: "Lincoln Financial Field, Filadelfia (4:00 p.m. ET)",
    },
    ]
}

function mostrarDatos(){
    document.getElementById("historia-texto").innerText = datosCuraçao.historia;
    document.getElementById("analisis-texto").innerText = datosCuraçao.analisis;

    document.getElementById("tabla-rendimiento").innerHTML = `
        <tr>
            <td>${datosCuraçao.estadisticas.pj}</td><td>${datosCuraçao.estadisticas.pg}</td><td>${datosCuraçao.estadisticas.pe}</td>
            <td>${datosCuraçao.estadisticas.pp}</td><td>${datosCuraçao.estadisticas.gf}</td><td>${datosCuraçao.estadisticas.gc}</td>
            <td>${datosCuraçao.estadisticas.dg}</td><td style="font-weight:bold; color:#d4af37;">${datosCuraçao.estadisticas.pts}</td>
        </tr>`

    const contenedor = document.getElementById("lista-partidos");
    datosCuraçao.partidos.forEach((p) => {
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