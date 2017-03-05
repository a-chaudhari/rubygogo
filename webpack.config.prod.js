var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/rubygogo.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  plugins:[
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings: true
    }
  })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx" ]
  },
  devtool: 'source-map'
};
