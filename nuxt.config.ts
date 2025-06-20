import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        name: "star's site",
        url: "https://skylar.sh",
    },

    compatibilityDate: "2025-06-09",
    devtools: {enabled: true},
    modules: ["@nuxt/fonts", "@nuxtjs/sitemap"],

    runtimeConfig: {
        spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
        spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
    },

    sourcemap: {client: true, server: false},

    css: ["~/styles/globals.css"],

    vite: {
        plugins: [tailwindcss()],
    },

    fonts: {
        families: [{name: "JetBrains Mono", provider: "google"}],
    },

    experimental: {
        viewTransition: true,
    },

    app: {
        head: {
            script: [{src: "/oneko/oneko.js", tagPosition: "bodyOpen"}],
            title: "star's site",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {name: "theme-color", content: "#000000"},
                {name: "color-scheme", content: "dark"},
                {
                    name: "description",
                    content: "star's site",
                },
                {name: "author", content: "skywhoami"},
                {
                    name: "keywords",
                    content: "star, sky, sky castro, software developer, meeows",
                },

                {property: "og:type", content: "website"},
                {property: "og:site_name", content: "star's site"},
                {property: "og:title", content: "star's site"},
                {
                    property: "og:description",
                    content: "star's site",
                },
                {property: "og:url", content: "https://skylar.sh"},
                {property: "og:image:width", content: "1200"},
                {property: "og:image:height", content: "630"},
                {property: "og:image:alt", content: "star's site"},
                {property: "og:locale", content: "en_US"},

                {name: "twitter:card", content: "summary_large_image"},
                {name: "twitter:site", content: "@skywhoami"},
                {name: "twitter:creator", content: "@skywhoami"},
                {name: "twitter:title", content: "star's site"},
                {
                    name: "twitter:description",
                    content: "star's site",
                },
                {name: "twitter:image:alt", content: "star's site"},
            ],
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
                {rel: "canonical", href: "https://skylar.sh/"},
                {rel: "sitemap", type: "application/xml", href: "/sitemap.xml"},
            ],
        },

        rootAttrs: {
            id: "star", // <3
        },
    },

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ["/", "/projects", "/uses", "/privacy", "/domains", "/terms", "/about", "/philosophy"],
        },
        preset: "cloudflare_module",
        cloudflare: {
            deployConfig: true,
            nodeCompat: true,
            wrangler: {
                name: "website",
                observability: {
                    logs: {enabled: true},
                },
            },
        },
    },
});
