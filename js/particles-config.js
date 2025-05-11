particlesJS("particles-js", {
  particles: {
    number: { value: 40 },
    size: { value: 2 },
    color: { value: ["#d4af37", "#7c3aed"] },
    opacity: {
      value: 0.3,
      random: true
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      out_mode: "out"
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});
