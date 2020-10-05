// @ts-check

const isProduction = process.env.NODE_ENV === 'production';
console.log('isProduction', isProduction);

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: mode === 'development' ? 'inline-source-map' : false,
  mode,
  entry: [`${__dirname}/src/index.js`],
  externals: {
    gon: 'gon',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist/public`,
    publicPath: '/assets/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
