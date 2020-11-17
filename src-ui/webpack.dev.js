const path = require("path");
module.exports = {
  ...require("./webpack.base"),
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "..", "dist", "ui"),
    port: Number(process.env.PORT) || 41234,
    watchContentBase: true,
  },
  watch: true,
  watchOptions: {
    poll: true,
  },
};
