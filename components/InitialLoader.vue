<script setup lang="ts">
const { $gsap } = useNuxtApp();

// pegando a div pai do número decimal e da unidade
const ten = ref(undefined);
const one = ref(undefined);

onMounted(() => {
  const tl = $gsap.timeline();

  // Quando o loader for montado, desativamos o scroll de toda página, para
  // evitar usuários macacos rolando pela página enquanto o loader está ativo
  document.body.style.overflow = "hidden";

  // ========== começando a tl dando trigger nos números ==========
  tl.to(".one span", {
    duration: 3.6,
    // Como o número de elementos é dinâmico, pegamos o número de elementos e multiplicamos pela sua altura (100%)
    y: `-${(one.value.querySelectorAll("*").length - 1) * 100}%`,
    ease: "power2.inOut",
  })
    .to(
      ".ten span",
      {
        duration: 3,
        // same shit as before
        y: `-${(ten.value.querySelectorAll("*").length - 1) * 100}%`,
        ease: "power2.inOut",
      },
      0.4
    )
    .to(
      ".hundred span",
      {
        // como a centena tem apenas dois números (0 e 1) fica mais tranquilo
        duration: 2.7,
        y: "-100%",
        ease: "circ.inOut",
      },
      1.4
    )
    // ========== Fazendo os números do clock desaparecerem ==========
    .to(
      ".hundred",
      {
        duration: 1,
        y: "-100vh",
        ease: "power4.inOut",
        stagger: 0.1,
      },
      3.1
    )
    .to(
      ".ten",
      {
        duration: 1,
        y: "-100vh",
        ease: "power4.inOut",
        stagger: 0.1,
      },
      3.1
    )
    .to(
      ".one",
      {
        duration: 1,
        y: "-100vh",
        ease: "power4.inOut",
        stagger: 0.1,
      },
      3.1
    )
    // ========== Dando o scale ==========
    .to(
      ".wrapper",
      {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 1,
      },
      3.3
    )
    // ========== Zerando a height ==========
    .to(
      ".bg",
      {
        duration: 0.6,
        ease: "power4.inOut",

        height: "0px",
      },
      3.9
    )
    // ========== Adicionando a altura de volta do hero ==========
    .to(
      "#hero",
      {
        height: "100vh",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          document.body.style.overflow = "auto";
          tl_controls.isTransitionStart = false;
        },
      },
      3.5
    );
});
</script>

<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="timer">
      <div class="hundred">
        <span>0</span>
        <span>1</span>
      </div>
      <div class="ten" ref="ten">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>0</span>
      </div>
      <div class="one" ref="one">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>0</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
}

.bg {
  width: 100%;
  height: 100%;
  background-color: var(--black_1);
  transform-origin: bottom;
}

.timer {
  display: flex;
  font-size: 8em;
  font-weight: bold;
  color: var(--white);

  height: 193px;
  overflow: hidden;
  position: absolute;
  bottom: 0px;
  left: 30px;
  z-index: 1000;
}

.hundred,
.ten,
.one {
  display: flex;
  flex-direction: column;
}

.hundred span {
  text-align: end;
}

@media screen and (max-width: 700px) {
  .timer {
    left: 10px;
    font-size: 6em;
    bottom: 140px;
    height: 120px;
  }
}
</style>
