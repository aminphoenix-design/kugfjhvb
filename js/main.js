document.addEventListener("DOMContentLoaded", () => {
  const umbral = document.getElementById("umbral");
  const cenizas = document.getElementById("cenizas");
  const fuego = document.getElementById("fuego");
  const llamaInterna = document.getElementById("llama-interna");
  const vision = document.getElementById("vision");
  const renacer = document.getElementById("renacer");

  const fenix = document.querySelector(".simbolo-fenix");
  const sigilo = document.getElementById("irAlFuego");
  const llamas = document.querySelectorAll(".llama");
  const intencionButtons = document.querySelectorAll(".intencion");

  const visionTitulo = document.getElementById("vision-titulo");
  const visionMensaje = document.getElementById("vision-mensaje");
  const music = document.getElementById("bg-music");

  const mensajes = {
    poder: "El fuego que elegiste consume lo viejo y forja lo indestructible. Ahora portas la llama de los que transforman el mundo.",
    claridad: "Como el cristal entre las llamas, ahora ves sin sombras. Tu marca emergerá con propósito y dirección.",
    deseo: "Lo que arde en tu interior alimentará las memorias de quienes toquen tu esencia. Has elegido cautivar."
  };

  fenix.addEventListener("click", () => {
    umbral.classList.remove("activa");
    cenizas.classList.add("activa");
    music.play().catch(err => {
      console.warn("Audio no se pudo reproducir automáticamente:", err);
    });
  });

  sigilo.addEventListener("click", () => {
    cenizas.classList.remove("activa");
    fuego.classList.add("activa");
  });

  llamas.forEach(llama => {
    llama.addEventListener("click", () => {
      fuego.classList.remove("activa");
      llamaInterna.classList.add("activa");
    });
  });

  intencionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const camino = btn.getAttribute("data-camino");
      llamaInterna.classList.remove("activa");
      vision.classList.add("activa");
      visionTitulo.textContent = "Has elegido: " + camino.charAt(0).toUpperCase() + camino.slice(1);
      visionMensaje.textContent = mensajes[camino] || "Tu visión está por revelarse...";
    });
  });

  visionMensaje.addEventListener("click", () => {
    vision.classList.remove("activa");
    renacer.classList.add("activa");
  });

  document.getElementById("form-renacer").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tu intención ha sido enviada al fuego. Serás recordado.");
    e.target.reset();
  });
});
