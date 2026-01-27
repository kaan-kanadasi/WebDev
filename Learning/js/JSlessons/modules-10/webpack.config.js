import path from "path";

export default {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve("assets/scripts"),
    publicPath: "/assets/scripts/",
    clean: false
  },
  devtool: 'eval-cheap-module-source-map', // for debugging
  module: { // for babel
    rules: [
        {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
            targets: "defaults",
            presets: [
                ['@babel/preset-env', {useBuiltIns: 'usage', corejs: 3}]
            ]
            }
        }
        }
    ]
    }
//   devServer: {  
//     contentBase: './'
//   }
};
