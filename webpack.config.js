const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/bundles/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          },
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: "svg-url-loader"
      }
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [new VueLoaderPlugin()],
};
