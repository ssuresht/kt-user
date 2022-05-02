const webpack = require("webpack");
// const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Kotonaru Project";
      return args;
    });
  },
  css: {
    extract: { ignoreOrder: true },
  },
  configureWebpack: {
    plugins: [
      // new VuetifyLoaderPlugin(),
      // eslint-disable-next-line no-useless-escape
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /jp/),
    ],
  },
};
