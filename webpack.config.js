const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry:
    process.env.NODE_ENV === 'production' ? './src/main.js' : './demo/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'production' ? './' : '',
    library: 'Admincraft',
    // libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: process.env.NODE_ENV,
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.vue']
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '加载中……'
    })
  ]
}
