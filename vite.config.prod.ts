import react from '@vitejs/plugin-react';
import webfontDownload from 'vite-plugin-webfont-dl';
import viteImagemin from 'vite-plugin-imagemin';
import tsconfigPaths from 'vite-tsconfig-paths';
import cleanPlugin from 'vite-plugin-clean';
import favicon from '@axelrindle/vite-plugin-favicon';

const srcFolder = `./src`;
const publicFolder = `./public`;

export const paths = {
   src: {
      spriteIcons: `${srcFolder}/assets/icons/**/*.svg`,
      favIcon: `${srcFolder}/assets/favicon.svg`,
   },
   public: {
      assets: `${publicFolder}/assets`,
   },
};

export const prodConfig = {
   plugins: [
      react(),
      cleanPlugin(),
      webfontDownload(),
      tsconfigPaths(),
      viteImagemin({
         gifsicle: {
            optimizationLevel: 3,
            interlaced: false,
         },
         optipng: {
            optimizationLevel: 3,
         },
         mozjpeg: {
            quality: 83,
         },
         pngquant: {
            quality: [0.8, 0.9],
            speed: 4,
         },
         svgo: {
            plugins: [
               {
                  name: 'removeViewBox',
                  active: false,
               },
               {
                  name: 'removeEmptyAttrs',
                  active: false,
               },
               {
                  params: {
                     name: 'removeAttrs',
                     attrs: '(width|height)',
                  },
               },
            ],
         },
      }),
      favicon({
         source: paths.src.favIcon,
         output: paths.public.assets,
         generatorOptions: {
            path: './assets',
            appName: 'Gulp Helper',
            appDescription: 'Gulp Helper',
            developerName: 'Binarion',
            developerURL: '',
            lang: 'ru',
            theme_color: '#D9D9D9',
            background: '#D9D9D9',
            icons: {
               favicons: true,
               appleIcon: true,
               android: true,
               windows: false,
               yandex: false,
               appleStartup: false,
            },
         },
      }),
   ],
   css: {
      modules: {
         localsConvention: 'camelCase',
      },
      preprocessorOptions: {
         scss: {
            additionalData: `@use "../src/scss/tools/vars" as v; @use "../src/scss/tools/mixins" as m; @use "../src/scss/tools/functions" as f; @use "../src/scss/tools/extends";`,
         },
      },
   },
   build: {
      rollupOptions: {
         input: {
            main: './index.html',
         },
      },
   },
   base: '',
};
