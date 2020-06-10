const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
			// parse react js
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, path.resolve(__dirname, "src/index.js")],
        use: {
          loader: "babel-loader"
        }
			},
			// use a .html template and create it in the build folder with the scripts and styles
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
			},
			// parse SCSS to css, then commonjs so webpack can import in the app.js file
			{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // parse files, jsons, etc
      // {
      //   test: /\.(png|jpe?g|gif|json)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
