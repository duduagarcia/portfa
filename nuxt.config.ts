// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,401,500,501,700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@hypernym/nuxt-gsap"],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
