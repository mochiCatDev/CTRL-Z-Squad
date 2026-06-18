const OVERLAY = document.getElementById("overlay");

// Escuchar los clics en toda la página de forma dinámica
document.addEventListener("click", (e) => {

  // Buscar si se hizo clic en un botón para abrir modal
  const btnAbrir = e.target.closest("[id^='open-modal-']");
  if (btnAbrir) {
    // Extraer el nombre del grupo (ej: 'groupA')
    const grupoId = btnAbrir.id.replace("open-modal-", "");
    const modal = document.getElementById(`modal-${grupoId}`);

    if (modal) {
      modal.classList.remove("oculto");
      OVERLAY.classList.remove("oculto");
    }
  }

  // Buscar si se hizo clic en un botón para cerrar modal
  const btnCerrar = e.target.closest("[id^='close-modal-']");
  if (btnCerrar) {
    const grupoId = btnCerrar.id.replace("close-modal-", "");
    const modal = document.getElementById(`modal-${grupoId}`);

    if (modal) {
      modal.classList.add("oculto");
      OVERLAY.classList.add("oculto");
    }
  }

  // Cerrar el modal si se hace clic directamente en el OVERLAY
  if (e.target === OVERLAY) {
    const modalesActivos = document.querySelectorAll(".modal:not(.oculto)");
    modalesActivos.forEach(modal => modal.classList.add("oculto"));
    OVERLAY.classList.add("oculto");
  }
});
