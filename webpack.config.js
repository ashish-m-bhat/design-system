const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules(?!\/@ashish-m-bhat\/dummy-react-package)/
      },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
 plugins: [htmlPlugin]
};