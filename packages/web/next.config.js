const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@app/components'])

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
})
