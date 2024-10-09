import react from "@vitejs/plugin-react";
import webfontDownload from "vite-plugin-webfont-dl";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

export const devConfig = {
   server: {
      open: "/",
      port: 5500,
   },
   plugins: [react(), webfontDownload(), checker({ typescript: true }), tsconfigPaths()],
   base: "",
   css: {
      devSourcemap: true,
      modules: {
         localsConvention: "camelCase",
      },
      preprocessorOptions: {
         scss: {
            additionalData: `@use "../src/scss/tools/vars" as v; @use "../src/scss/tools/mixins" as m; @use "../src/scss/tools/functions" as f; @use "../src/scss/tools/extends";`,
         },
      },
   },
};
