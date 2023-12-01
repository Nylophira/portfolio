<script setup lang="ts">

import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

async function particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
    //await loadSlim(engine);
};


const  options = {
  background: {
    color: {
        value: '#BC3908'
    }
  },
  fullScreen: {
    enable: true,
    //zIndex: -1
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
        resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 500
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5,
    }
  },
  detectRetina: true
}

</script>

<template>
    <!-- :particlesLoaded="particlesLoaded" -->
    <div id="app">
        <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :options="options"/>
        <div class="position-absolute top-50 start-50 translate-middle">
          <h1 class="text-left align-middle">Bienvenue, <br> je suis Amandine MILLET <br>Développeuse full-stack</h1>
        </div>
    </div>


</template>

<style lang="scss">

#app .text-left {
  color: white;
  font-family: 'DM Serif Display';
}

  
</style>