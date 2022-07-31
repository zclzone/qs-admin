import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

import unplugins from './unplugin'
import { setupHtmlPlugin } from './html'
import { setupMockPlugin } from './mock'

export function setupVitePlugins(viteEnv: VIteEnv, isBuild: boolean): PluginOption[] {
  const plugins = [vue(), ...unplugins, unocss(), setupHtmlPlugin(viteEnv)]
  if (viteEnv.VITE_USE_MOCK)
    plugins.push(setupMockPlugin(isBuild))

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    )
  }

  return plugins
}
