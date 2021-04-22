## Minimal React.js Setup
Minimal setup proyek React.js menggunakan Webpack dan Babel<br>
~~~bash
mkdir minimal-react-setup
cd minimal-react-setup

npm init -y
~~~

## Install Webpack & Membuat File webpack.config
~~~javascript
npm install -D webpack webpack-cli

touch webpack.config.js // unix command
copy nul 'webpack.config.js' // windows command
~~~

## Inisialisasi Konfigurasi Webpack
Ini adalah struktur dasar pada konfigurasi webpack. Kunjungi link dibawah ini untuk membaca dokumentasi resminya webpack.<br>

[https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)
~~~javascript
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
~~~

## Install React & React-dom
~~~bash
npm install -S react react-dom
~~~

## Install Babel & konfigurasi .babelrc
~~~javascript
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react

touch .babelrc // membuat file .babelrc
~~~
~~~javascript
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
~~~

## Install Webpack Dev Server
~~~bash
npm install -D webpack-dev-server
~~~

## Update Konfigurasi Webpack
~~~javascript
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // tambahkan loader
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-source-map', // optional
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000, // menjalankan aplikasi pada port 3000
    hot: true
  }
}
~~~

## Finishing Setup
Langkah terakhir, tambahkan script start, dev dan build pada package.json
~~~javascript
"scripts": {
  "start": "webpack --mode=development",
  "dev": "webpack serve --mode=development --config ./webpack.config.js",
  "build": "webpack --mode=production"
}
~~~

## Menjalankan Aplikasi
~~~javascript
npm start // membuat file bundle.js
npm run dev // menjalankan aplikasi pada port 3000

npm run build // production
~~~