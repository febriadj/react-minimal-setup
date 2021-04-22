## React.js Minimal Setup
![reactjs](https://img.shields.io/badge/reactjs-90e0ef?style=for-the-badge&logo=react&logoColor=black)
![webpack](https://img.shields.io/badge/webpack-006d77?style=for-the-badge&logo=webpack&logoColor=white)
![babel](https://img.shields.io/badge/babel-ffff3f?style=for-the-badge&logo=babel&logoColor=black)
<br>

React.js minimal setup menggunakan Webpack dan Babel<br>
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

## Konfigurasi Package
Pada file package.json, tambahkan script start, dev dan build
~~~javascript
"scripts": {
  "start": "webpack --mode=development",
  "dev": "webpack serve --mode=development --config ./webpack.config.js",
  "build": "webpack --mode=production"
}
~~~

## Menambahkan CSS Dan Sass
Agar dapat menggunakan CSS atau Sass pada aplikasi React, butuh konfigurasi tambahan yang harus dilakukan
~~~bash
npm install -D style-loader css-loader sass-loader node-sass
~~~

## Update Konfigurasi Webpack
Tambahkan module rules untuk file CSS dan Sass
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
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { // tambahkan bagian ini
        test: /\.(css|s[ac]ss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    hot: true
  }
}
~~~
Untuk penggunaan Sass dapat langsung diimport ke file React, tidak perlu melakukan kompilasi ke file CSS. Untuk melihat lebih jelas, ikuti link dibawah ini

[Import File Sass](https://github.com/febriadj/react-minimal-setup/blob/master/src/App.js)

## Menjalankan Aplikasi
~~~javascript
npm start // membuat file bundle.js
npm run dev // menjalankan aplikasi pada port 3000

npm run build // production
~~~