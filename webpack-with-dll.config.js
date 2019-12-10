const { resolve, join } = require("path");
const { DllPlugin, DllReferencePlugin } = require("webpack");
const webpackConfig = require("./webpack.config");

const { NODE_ENV: mode } = process.env;

module.exports = (env = {}) => {
  if (env.compile_dll) {
    return {
      mode,
      entry: { common: ["./src/common"] },
      output: {
        path: join(__dirname, "dist"),
        library: "JustCommons",
        filename: "[name].js",
        libraryTarget: "umd"
      },
      plugins: [
        new DllPlugin({
          context: __dirname,
          /*
            This needs to be exactly the same as output.fileName 
            If you're using a monorepo with scoped packages, set this to the fullpath
            including the scope :)
          */
          name: "[name].js",
          path: resolve(__dirname, "dist/manifest.json")
        })
      ]
    };
  }

  const config = webpackConfig(env);
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new DllReferencePlugin({
        context: __dirname,
        manifest: resolve(__dirname, "dist/manifest.json"),
        sourceType: "umd"
      })
    ]
  };
};
