// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true,
    tooling: true,
  },
  dirs: {
    src: [
      './playground',
      './playground-v5',
    ],
  },
})
  .append(
    {
      files: ['test/**'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  )
