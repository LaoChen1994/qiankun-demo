import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /.(m?js|jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                [
                  "@babel/preset-typescript",
                  {
                    isTsx: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(a|c)ss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  cache: true,
  output: {
    path: path.resolve(__dirname, "../dist"),
    library: "ReactMicroApp",
    libraryTarget: "umd",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    },
  }
};

export default config;
