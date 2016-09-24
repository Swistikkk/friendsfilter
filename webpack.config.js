var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ["./src/app/app.js"],
    styles: './src/app/sass/style.scss'
  },
  output: {
    path: path.resolve(__dirname, "./src/app"),
    publicPath: "/src/",
    filename: `bundle.js`
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    inline: true
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
        allChunks: true
    })
  ]
};
