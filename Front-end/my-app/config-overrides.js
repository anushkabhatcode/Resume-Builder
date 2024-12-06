// const webpack = require("webpack");

// module.exports = function override(config) {
//   config.resolve.fallback = {
//     ...config.resolve.fallback,
//     url: require.resolve("url/"),
//     buffer: require.resolve("buffer/"),
//     stream: require.resolve("stream-browserify"),
//   };

//   config.plugins = [
//     ...(config.plugins || []),
//     new webpack.ProvidePlugin({
//       Buffer: ["buffer", "Buffer"],
//       process: "process/browser",
//     }),
//   ];

//   return config;
// };

const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "path": require.resolve("path-browserify"),
    "fs": false,
    "zlib": require.resolve("browserify-zlib"),
    "util": false,
    "process": require.resolve('process/browser'),
    "buffer": "buffer/"
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process'
    })
  );

  return config;
};

