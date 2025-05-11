
document.addEventListener("DOMContentLoaded", () => {
  const fenix = document.querySelector(".simbolo-fenix");
  const umbral = document.getElementById("umbral");
  const cenizas = document.getElementById("cenizas");
  const fuego = document.getElementById("fuego");
  const sigilo = document.getElementById("irAlFuego");
  const music = document.getElementById("bg-music");

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
});

  const intencionButtons = document.querySelectorAll(".intencion");

  document.querySelectorAll(".llama").forEach(llama => {
    llama.addEventListener("click", () => {
      fuego.classList.remove("activa");
      document.getElementById("llama-interna").classList.add("activa");
    });
  });

  intencionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const camino = btn.getAttribute("data-camino");
      console.log("Camino elegido:", camino);
      alert("Has elegido renacer con " + camino.charAt(0).toUpperCase() + camino.slice(1));
      // Aquí puedes continuar hacia otra sección (como "La Visión" o "El Renacer")
    });
  });

  const vision = document.getElementById("vision");
  const visionTitulo = document.getElementById("vision-titulo");
  const visionMensaje = document.getElementById("vision-mensaje");

  const mensajes = {
    poder: "El fuego que elegiste consume lo viejo y forja lo indestructible. Ahora portas la llama de los que transforman el mundo.",
    claridad: "Como el cristal entre las llamas, ahora ves sin sombras. Tu marca emergerá con propósito y dirección.",
    deseo: "Lo que arde en tu interior alimentará las memorias de quienes toquen tu esencia. Has elegido cautivar."
  };

  intencionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const camino = btn.getAttribute("data-camino");
      document.getElementById("llama-interna").classList.remove("activa");
      vision.classList.add("activa");
      visionTitulo.textContent = "Has elegido: " + camino.charAt(0).toUpperCase() + camino.slice(1);
      visionMensaje.textContent = mensajes[camino] || "Tu visión está por revelarse...";
    });
  });

  visionMensaje.addEventListener("click", () => {
    vision.classList.remove("activa");
    document.getElementById("renacer").classList.add("activa");
  });

  document.getElementById("form-renacer").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tu intención ha sido enviada al fuego. Serás recordado.");
    e.target.reset();
  });
