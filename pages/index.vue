<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  // NÃO SEI SE ESSE CÓDIGO AINDA É NECESSÁRIO, VEREMOS CONFORME ADICIONARMOS OS LINKS PARA AS OUTRAS PÁGINAS
  // if (tl_controls.isTransitionStart == false) {
  //   const hero = document.getElementById("hero");

  //   $gsap.to(hero, {
  //     height: "100vh",
  //     duration: 2,
  //     ease: "power4.inOut",
  //     onComplete: () => {
  //       document.body.style.overflow = "auto";
  //       tl_controls.isTransitionStart = false;
  //     },
  //   });
  // }

  const textElements = $gsap.utils.toArray(".intro");

  // Adicionamos o GSAP de outras sessões APENAS depois desse timeout de 4.4s
  // Para que a animação do loader seja a primeira a ser carregada e o v-show
  // ativar novamente, por algum raio de motivo o gsap buga o scrolltrigger por
  // causa do v-show
  setTimeout(() => {
    textElements.forEach((text) => {
      $gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 90%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, 4400);
});
</script>

<template>
  <InitialLoader v-if="tl_controls.isTransitionStart" />
  <section id="hero"></section>
  <!-- Carregar as outras sessões no DOM porém não mostrar elas -->
  <!-- Só mostramos elas quando a animação do loader carrega 100% -->
  <div v-show="tl_controls.isTransitionStart == false">
    <section id="introduction">
      <div class="container">
        <h2 class="intro">A problem solver</h2>
        <h2 class="intro">guided by research,</h2>
        <h2 class="intro">boosted by innovation,</h2>
        <h2 class="intro">that designes with purpose</h2>
        <h2 class="intro">and develops for people</h2>
        <h2 class="intro">to achieve tangible results.</h2>
      </div>
    </section>
    <section id="works"><h1>oi</h1></section>
  </div>
</template>

<style scoped>
/* ========== COMEÇO DOS ESTILOS PADRÕES ========== */
section {
  width: 100vw;
  max-width: 100%;
  height: max-content;
}

.container {
  margin: 0 auto;
  max-width: 1024px;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
/* ========== FIM DOS ESTILOS PADRÕES ========== */
#hero {
  /* 50px from navbar and +20px  */
  padding-top: 70px;
  height: 0;
  width: 100vw;
  max-width: 100%;
  background-color: var(--white);
}

#introduction {
  width: 100vw;
  max-width: 100%;
  background-color: var(--white);
}

#introduction .container {
  padding-top: 80px;
  padding-bottom: 80px;
}

#introduction .container h2 {
  font-weight: 400;
  font-size: calc(1.5rem + 2vw);

  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, var(--black_3), var(--black_3))
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
}

#works {
  width: 100vw;
  max-width: 100%;
  background-color: red;
  height: 100vh;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 64px;
  }

  #introduction .container h2 {
    font-size: 54px;
  }
}
</style>
