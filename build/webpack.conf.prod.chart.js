const fs = require('fs')
const path = require('path')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 重新生成 index.js 文件
// const generateIndex = require('../autoGenerateIndex')
// fs.writeFileSync('./src/index.js', generateIndex())

module.exports = {
  mode: 'production',
  entry: './src',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    library: 'CatchartsReact',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /.js(x)?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader']
      },

      {
        test: /\.(s)?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    '@qcharts/core': {
      root: 'qcharts',
      commonjs2: '@qcharts/core/lib/index.js',
      commonjs: '@qcharts/core/lib/index.js',
      amd: '@qcharts/core/lib/index.js',
      umd: 'qcharts'
    },

    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },

    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    }
  }
}
