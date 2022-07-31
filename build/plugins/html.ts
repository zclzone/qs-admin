import { createHtmlPlugin } from 'vite-plugin-html'

export function setupHtmlPlugin(viteEnv: VIteEnv) {
  const { VITE_APP_TITLE } = viteEnv

  const htmlPlugin = createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: VITE_APP_TITLE,
      },
    },
  })
  return htmlPlugin
}
