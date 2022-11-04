import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

build: {
    // Exemplo: Gera `pagina.html` ao invés de `pagina/index.html` durante a build.
    format: 'directory'
  }
