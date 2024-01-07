import process from 'node:process'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'production',
  base: '/magic/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'Магическое ЧП',
    short_name: 'Магическое ЧП',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: ['any', 'maskable'],
      },
    ],
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    type: 'module',
    navigateFallback: 'index.html',
    suppressWarnings: true,
  },
}

const claims = process.env.CLAIMS === 'true'
const selfDestroying = process.env.SW_DESTROY === 'true'

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src'
  pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
  pwaOptions.strategies = 'injectManifest'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).name = 'Магическое ЧП'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'Магическое ЧП'
}

if (claims)
  pwaOptions.registerType = 'autoUpdate'

if (selfDestroying)
  pwaOptions.selfDestroying = selfDestroying

export default defineConfig({
  base: '/magic/',
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  },
  plugins: [
    Vue(),
    VitePWA(pwaOptions),
    replace({
      __DATE__: new Date().toISOString(),
      __RELOAD_SW__: process.env.RELOAD_SW === 'true' ? 'true' : 'false',
    }),
  ],
})
