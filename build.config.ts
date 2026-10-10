import { defineBuildConfig } from 'unbuild'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const crawlerUserAgentsJson = require.resolve('crawler-user-agents')

export default defineBuildConfig({
  alias: {
    'crawler-user-agents': crawlerUserAgentsJson,
  },
  rollup: {
    inlineDependencies: ['crawler-user-agents'],
  },
})
