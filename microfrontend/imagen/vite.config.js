/**
 * Configuración principal de Vite donde personalizar como funciona el proyecto
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Importacion del paquete vite-plugin-federation
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
// Configuracion basica
export default defineConfig({
  plugins: [
    react(),
    // Plugin de MicroFrontend
    federation({
      // Servir componente 'Imagen' 'remote'
      name:"imagen",

      // El archivo que contendrá la configuración de federation
      filename: "remoteEntry.js",
      
      // Los componentes/módulos que expones para que otros puedan consumir
      exposes: {
        "./Imagen:": "./src/Imagen.jsx",
      },

      // Las dependencias compartidas entre aplicaciones
      shared: ["react"],
    }),
  ],

  build: {
    // Configuracion de la compilación de producción
    // Deshabilita la precarga automática de módulos, como y cuando se carga los modulos
    modulePreload: false,
    // Define el nivel de compatibilidad de JavaScript, mas reciente
    target: "esnext",
    // Deshabilita la minificación del código, codigo optimizado
    minify:false,
    // Deshabilita la división del código CSS, un archivo css unico styles.css
    cssCodeSplit: false,
  },
});
