// Grupo B - Mundial 2026
const equipos = document.querySelectorAll('.equipo');

equipos.forEach(equipo => {
  equipo.addEventListener('click', () => {
    const nombre = equipo.querySelector('h3').textContent;
    alert(`⚽ Seleccionaste: ${nombre}`);
  });
});

console.log('Grupo B cargado correctamente ✅');