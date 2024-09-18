import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    'defu',
  ],
  rollup: {
    inlineDependencies: true,
  },
})
