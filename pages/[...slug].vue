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
        value: '#ffffff'
    }
  },
  fullScreen: {
    enable: true,
    zIndex: -1
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
      value: '#F6AA1C'
    },
    links: {
      color: '#F6AA1C',
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

//Suppression de l'animation sur cette page là
definePageMeta({
  pageTransition: false
})



</script>

<template>
  <div>
    <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :options="options"/>
    <div class="row position-absolute top-50 start-50 translate-middle"  id="erreur">
        <div class="col d-flex flex-column align-items-center">
            <div class="d-flex flex-column align-items-center mb-5">
                <h1 class="fw-bold">404</h1>  
                <h2 class="text-center">Oups ! La page que vous demandez n'existe pas.</h2>
            </div>
            <div class="d-flex flex-column align-items-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-globe-europe-africa" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z"/>
                </svg>
            </div>
        </div>
    </div>  
  </div>          
    
</template>

<style lang="scss">

#erreur {
     //z-index: 2;

    h1{
    color: $rouge;
    font-size: 150px;
}
} 

</style>