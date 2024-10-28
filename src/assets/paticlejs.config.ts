export const ParticlesJsConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1400,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 1,
        color: '#ffffff',
      },
      polygon: {
        nb_sides: 4,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.25,
        sync: true,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 1.25,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: true,
      attract: {
        enable: true,
        rotateX: 2000,
        rotateY: 2000,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'repulse',
      },
      resize: false,
    },
  },
};
