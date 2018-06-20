const { environment } = require('@rails/webpacker')

const babelLoader = environment.loaders.get('babel')
babelLoader.use.query = { presets: ['react', 'es2015', 'stage-3'] }

environment.loaders.append('haml-jsx-loader', {
  test: /\.jsx$/,
  use: 'haml-jsx-loader'
})

module.exports = environment
