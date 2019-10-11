module.exports = {
  webpack: {
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'babel-loader-8',
            options: {
              presets: [require.resolve('@babel/preset-typescript')]
            }
          }
        }
      ]
    }
  }
};
