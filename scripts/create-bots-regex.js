const fetch = require('node-fetch')

const agentsJsonUrl = 'https://raw.githubusercontent.com/monperrus/crawler-user-agents/master/crawler-user-agents.json'
async function main() {
  const response = await fetch(agentsJsonUrl)
  const items = await response.json()
  const patterns = items.map(item => item.pattern)
  const regex = patterns.join('|')
  console.log(`/${regex}/`)
}

main()
