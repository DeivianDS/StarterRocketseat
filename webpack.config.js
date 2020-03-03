module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public"
  },

  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
