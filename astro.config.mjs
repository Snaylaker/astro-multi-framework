import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import solidJs from "@astrojs/solid-js";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), solidJs(), vue()]
});