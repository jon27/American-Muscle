var webpack = require('webpack');

module.exports = {
  entry: [
  'script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/foundation.min.js',
  './app/app.jsx'],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss',
      Cars: 'app/components/Cars.jsx',
      CarInfo: 'app/components/CarInfo.jsx',
      CarForm: 'app/components/CarForm.jsx',
      CarMessage: 'app/components/CarMessage.jsx',
      NewArray: 'app/components/NewArray.jsx',
      Car: 'app/components/Car.jsx',
      Gallery: 'app/components/Gallery.jsx'
      
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
