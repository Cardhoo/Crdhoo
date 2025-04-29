function handleClick(url) {
  const audio = document.getElementById('click-sound');
  audio.currentTime = 0;
  audio.play();
  setTimeout(() => {
    window.location.href = url;
  }, 150);
}


// Efek partikel klik
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const burst = document.createElement('div');
    burst.className = 'burst';
    burst.style.left = e.clientX + 'px';
    burst.style.top = e.clientY + 'px';
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 1000);
  });
});

window.onload = function() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#a64dff" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": { "enable": false }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": { "enable": false }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#a64dff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": false },
        "resize": true
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 0.7 } }
      }
    },
    "retina_detect": true
  });
};
