<script setup lang="ts">
// const { $gsap } = useNuxtApp();

// onMounted(() => {
//   $gsap.to("h1", { x: 100 });

//   $gsap.to(".box", {
//     x: 500,
//     duration: 3,
//     scrollTrigger: {
//       trigger: ".box",
//       start: "top 50%",
//       end: "bottom 50%",
//       markers: true,
//       scrub: true,
//     },
//   });
// });
</script>

<template>
  <div>
    <Button>menu</Button>
  </div>
</template>

<style scoped>
div {
  /* 50px from navbar and +20px  */
  padding-top: 70px;
  /* height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}
</style>
