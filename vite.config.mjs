import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [glsl()],
    server: {
      port: 5500,
    },
    assetsInclude: "**/*.glb",
  })