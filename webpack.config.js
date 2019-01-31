const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
};