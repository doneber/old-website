import { defineConfig } from 'vite'
import postcssNesting from 'postcss-nesting'
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
        postcssNesting
      ]
    }
  }
})
