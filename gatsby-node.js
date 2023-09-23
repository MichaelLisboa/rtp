exports.onCreateWebpackConfig = ({ actions }) => {
    console.log("!!!!!!!!!!!!!!!HERE NIGAAA!!!!!!!!!!!!!!!!!!!!!")
    actions.setWebpackConfig({
     resolve: {
        fallback: {
            //assert: require.resolve("assert/"),
            "crypto": require.resolve("crypto-browserify"),
            "http":  require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            //os: require.resolve("os-browserify/browser"),
            "stream": require.resolve("stream-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "url": require.resolve("url"),
            "path": require.resolve("path-browserify"),
            //"zlib": require.resolve("browserify-zlib"),
            "util": require.resolve("util"),
            "fs": require.resolve("browserify-fs"),
            //"assert": require.resolve("assert"),
            "object-assign-polyfill": require.resolve("object-assign-polyfill"),
            "zlib": false ,
            process: false
        },
      },
    })
  }