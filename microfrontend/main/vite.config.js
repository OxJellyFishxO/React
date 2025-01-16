import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Importacion del paquete vite-plugin-federation
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Importamos los Micro Frontends 'Imagen' y 'Web'
    federation({
      name: "main",
      //Aplicaciones remotas que nuestra aplicacion puede consumir
      remotes: {
        imagenApp: "http://localhost:4173/assets/remoteEntry.js",
        webApp: "http://localhost:4174/assets/remoteEntry.js"
      },
      shared:["react", 'react-dom'],
    }),
  ],

  build: {
    // Configuramos la compilación de producción
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})
