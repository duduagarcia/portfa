// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,401,500,501,700&display=swap",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favico.svg",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@hypernym/nuxt-gsap"],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  imports: {
    dirs: ["utils"],
  },
});
