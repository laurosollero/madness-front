const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const dotenv = require("dotenv").config({ path: __dirname + "/.env" })
const webpack = require("webpack")

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      Base: path.resolve(__dirname, "src/"),
      Components: path.resolve(__dirname, "src/components/"),
      Context: path.resolve(__dirname, "src/context/"),
      Services: path.resolve(__dirname, "src/services/"),
      Types: path.resolve(__dirname, "src/types/")
    }
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: process.env.REACT_PORT ? process.env.REACT_PORT : 3333,
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true,
      filename: "../dist/index.html"
    }),
    new webpack.DefinePlugin({
      process: { env: JSON.stringify(dotenv.parsed) }
    })
  ]
}
