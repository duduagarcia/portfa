<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  const textElements = $gsap.utils.toArray(".intro");

  textElements.forEach((text) => {
    $gsap.to(text, {
      backgroundSize: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "center 90%",
        end: "center 20%",
        scrub: true,
        // markers: true,
      },
    });
  });
});
</script>

<template>
  <main>
    <section id="hero">
      <h1>Software engineer from brazil</h1>
      <p>
        Creating digital products that are meaningful aesthetically pleasing
      </p>
    </section>
    <section id="header_img"></section>
    <section id="introduction">
      <h2 class="intro">A problem solver</h2>
      <h2 class="intro">guided by research,</h2>
      <h2 class="intro">boosted by innovation,</h2>
      <h2 class="intro">that designes with purpose</h2>
      <h2 class="intro">and develops for people</h2>
      <h2 class="intro">to achieve tangible results.</h2>
    </section>
    <div id="works"></div>
  </main>
</template>

<style scoped>
main {
  /* 50px from navbar and +20px  */
  padding-top: 70px;
  width: 100vw;
  max-width: 100%;
}

#hero {
  width: 100vw;
  max-width: 100%;
  background-color: red;
  height: 60vh;
  padding: 80px 20px 0 20px;
}

h1 {
  font-weight: 500;
  text-transform: uppercase;
  font-size: calc(2rem + 2.8vw);
  min-width: 260px;
  max-width: 700px;
  background-color: blue;
  margin-bottom: 30px;
}

p {
  color: var(--dark_gray);
  font-weight: 300;
  max-width: 250px;
}

#header_img {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  /* background-color: green; */
}

#introduction {
  width: 100vw;
  max-width: 100%;
  height: max-content;
  background-color: var(--white);
  padding: 80px 20px 80px 20px;
  border: 1px solid red;
}

#introduction h2 {
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
  height: 100vh;
  background-color: var(--black_3);
}
@media (min-width: 1200px) {
  h1 {
    font-size: 64px;
  }

  #introduction h2 {
    font-size: 54px;
  }
}
</style>
