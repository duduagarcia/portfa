<script setup>
const { $gsap } = useNuxtApp();

const percentage = ref("000");

const ten = ref(undefined);
const one = ref(undefined);

onMounted(() => {
  const tl = $gsap.timeline();

  tl.to(".one span", {
    duration: 3.6,
    y: `-${(one.value.querySelectorAll("*").length - 1) * 100}%`,
    // stagger: 0.1,
    ease: "power2.inOut",
  })
    .to(
      ".ten span",
      {
        duration: 3,
        y: `-${(ten.value.querySelectorAll("*").length - 1) * 100}%`,
        //   stagger: 0.1,

        ease: "power2.inOut",
      },
      0.4
    )
    .to(
      ".hundred span",
      {
        duration: 1.5,
        y: "-100%",
        ease: "circ.inOut",
      },
      0.9
    )
    .to(".bg", {
      delay: 0.3,
      height: 0,
      ease: "circ.inOut",
      //   ease: "power2.inOut",
      duration: 1.4,
      onComplete: () => {
        tl_controls.isTransitionStart = false;
      },
    });
});
</script>

<template>
  <section>
    <div class="bg"></div>
    <div class="title">
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
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  /* background-color: var(--white); */
}

.bg {
  width: 100%;
  height: 100%;
  background-color: var(--black_3);
}

.title {
  position: absolute;
  bottom: 30px;
  left: 30px;
  display: flex;
  font-size: 8em;
  font-weight: bold;
  color: var(--white);

  height: 193px;
  overflow: hidden;
  /* background-color: aqua; */
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
</style>
