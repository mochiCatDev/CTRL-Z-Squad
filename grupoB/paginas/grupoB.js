const infoEquipos = {
  'Canadá': {
    bandera: 'https://flagcdn.com/w160/ca.png',
    confederacion: 'CONCACAF',
    ranking: '41° FIFA',
    mundiales: '3 participaciones',
    mejorResultado: 'Fase de grupos',
    figura: 'Alphonso Davies',
    curiosidad: 'Es uno de los 3 países anfitriones del Mundial 2026 junto a EE.UU. y México.'
  },
  'Bosnia y Herzegovina': {
    bandera: 'https://flagcdn.com/w160/ba.png',
    confederacion: 'UEFA',
    ranking: '65° FIFA',
    mundiales: '2 participaciones',
    mejorResultado: 'Fase de grupos',
    figura: 'Edin Dzeko',
    curiosidad: 'Eliminó a Italia en la repesca europea ganando en penales 5-2 para clasificar al Mundial.'
  },
  'Catar': {
    bandera: 'https://flagcdn.com/w160/qa.png',
    confederacion: 'AFC',
    ranking: '55° FIFA',
    mundiales: '2 participaciones',
    mejorResultado: 'Fase de grupos',
    figura: 'Akram Afif',
    curiosidad: 'Fue la primera selección anfitriona eliminada en fase de grupos en Qatar 2022.'
  },
  'Suiza': {
    bandera: 'https://flagcdn.com/w160/ch.png',
    confederacion: 'UEFA',
    ranking: '19° FIFA',
    mundiales: '13 participaciones',
    mejorResultado: 'Cuartos de final (1934, 1938, 1954)',
    figura: 'Granit Xhaka',
    curiosidad: 'Es la selección más experimentada del grupo y la gran favorita a clasificar primera.'
  }
};

document.querySelectorAll('.equipo').forEach(equipo => {
  equipo.addEventListener('click', () => {
    const nombre = equipo.querySelector('h3').textContent.trim();
    const info = infoEquipos[nombre];
    if (!info) return;

    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.85); display: flex;
      align-items: center; justify-content: center; z-index: 1000;
    `;

    modal.innerHTML = `
      <div style="
        background: #0a0a0f; border: 1px solid rgba(255,255,255,0.1);
        border-radius: 16px; padding: 40px; max-width: 420px; width: 90%;
        text-align: center; font-family: 'Inter', sans-serif;
      ">
        <img src="${info.bandera}" style="width:100px; border-radius:6px; margin-bottom:20px;">
        <h2 style="font-family:'Playfair Display',serif; font-size:1.8rem; color:#fff; margin-bottom:24px;">${nombre}</h2>
        <table style="width:100%; font-size:0.85rem; border-collapse:collapse;">
          <tr><td style="color:rgba(255,255,255,0.4); padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.06); text-align:left;">Confederación</td><td style="color:#fff; text-align:right; border-bottom:1px solid rgba(255,255,255,0.06);">${info.confederacion}</td></tr>
          <tr><td style="color:rgba(255,255,255,0.4); padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.06); text-align:left;">Ranking FIFA</td><td style="color:#fff; text-align:right; border-bottom:1px solid rgba(255,255,255,0.06);">${info.ranking}</td></tr>
          <tr><td style="color:rgba(255,255,255,0.4); padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.06); text-align:left;">Mundiales</td><td style="color:#fff; text-align:right; border-bottom:1px solid rgba(255,255,255,0.06);">${info.mundiales}</td></tr>
          <tr><td style="color:rgba(255,255,255,0.4); padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.06); text-align:left;">Mejor resultado</td><td style="color:#fff; text-align:right; border-bottom:1px solid rgba(255,255,255,0.06);">${info.mejorResultado}</td></tr>
          <tr><td style="color:rgba(255,255,255,0.4); padding:8px 0; text-align:left;">Figura</td><td style="color:#FFD700; text-align:right;">${info.figura}</td></tr>
        </table>
        <p style="margin-top:20px; font-size:0.8rem; color:rgba(255,255,255,0.3); line-height:1.7;">${info.curiosidad}</p>
        <button onclick="this.closest('[style]').remove()" style="
          margin-top:24px; background:transparent; border:1px solid rgba(255,255,255,0.2);
          color:rgba(255,255,255,0.5); padding:10px 30px; border-radius:8px;
          cursor:pointer; font-size:0.8rem; letter-spacing:0.1em;
        ">CERRAR</button>
      </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  });
});