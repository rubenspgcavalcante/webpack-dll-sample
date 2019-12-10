const { resolve } = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { NODE_ENV: mode } = process.env;

module.exports = (env = {}) => ({
  mode,
  entry: {
    ComponentA: "./src/Component-A",
    ComponentB: "./src/Component-B"
  },
  plugins: [
    env.analyze &&
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: resolve(__dirname, env.reportPath) || "report.html"
      })
  ].filter(p => p)
});
