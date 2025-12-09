import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  rollup: {
    inlineDependencies: ['crawler-user-agents'],
  },
})
