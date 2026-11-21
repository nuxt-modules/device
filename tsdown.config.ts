import { builder } from '@nuxt/module-builder/tsdown'
import { defineConfig } from 'tsdown'

export default defineConfig({
  deps: {
    onlyBundle: ['crawler-user-agents'],
  },
  plugins: [builder()],
})
