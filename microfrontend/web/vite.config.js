import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Importacion del paquete vite-plugin-federation
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      // Servir componente 'Web' 'remote'
      name: "web-app",
      filename: "remoteEntry.js",
      exposes: {
        "./WebApp": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    // Configuracion de la compilación de producción
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
});
