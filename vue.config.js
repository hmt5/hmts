"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

module.exports = {
  publicPath: "./", // 根域上下文目录
  devServer: {
    proxy: {
      "/active": {
        target: "http://10.2.38.8",
        changeOrigin: true
      }
    }
  }
};
