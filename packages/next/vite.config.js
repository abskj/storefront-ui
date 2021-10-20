import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
     // We can now `import '~/path/to/module'` where `~` references the project root
    //  "~": "./node_modules/",
    }
  },
  css: {
    postcss: {
        path: "./postcss.config.js",
      },
  },
  build: {
    lib: {
      entry: "./index.js",
      name: "sfui",
      fileName: (format) => `sfui.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "cloudinary-build-url","@cld-apis/utils"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
