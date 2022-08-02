import { defineConfig } from 'vite'
import postcssNested from 'postcss-nested'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true
    })
  ],
  css: {
    postcss: {
      plugins: [
        postcssNested
      ]
    }
  }
})
