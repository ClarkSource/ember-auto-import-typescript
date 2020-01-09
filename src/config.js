module.exports = targets => ({
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
              presets: [
                require.resolve('@babel/preset-typescript'),
                [
                  require.resolve('@babel/preset-env'),
                  {
                    modules: false,
                    targets
                  }
                ]
              ]
            }
          }
        }
      ]
    }
  }
});
