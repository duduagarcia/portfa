<template>
  <div>
    <InitialLoader v-if="tl_controls.isTransitionStart" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
