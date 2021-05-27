/* eslint-disable no-param-reassign */

module.exports = {
  name: require('./package').name,

  included(parent) {
    // eslint-disable-next-line prefer-rest-params
    this._super && this._super(...arguments);
    this.patchConfig(parent);
  },

  patchConfig(parent) {
    // Create `parent.options.autoImport.webpack = {}`
    if (!parent.options) parent.options = {};
    if (!parent.options.autoImport) parent.options.autoImport = {};
    const { autoImport } = parent.options;
    if (!autoImport.webpack) autoImport.webpack = {};
    const { webpack } = autoImport;

    // Unshift `.ts` `.d.ts` extensions to `webpack.resolve.extensions`
    if (!webpack.resolve)
      webpack.resolve = { extensions: ['.ts', '.js', '.d.ts'] };
    else if (!webpack.resolve.extensions)
      webpack.resolve.extensions = ['.ts', '.js', '.d.ts'];
    else if (!webpack.resolve.extensions.includes('.ts'))
      webpack.resolve.extensions.unshift('.ts');

    if (!webpack.resolve.extensions.includes('.d.ts'))
      webpack.resolve.extensions.push('.d.ts');

    const tsModuleRule = {
      test: /\.ts$/,
      use: {
        loader: 'babel-loader-8',
        options: {
          plugins: [
            // https://github.com/babel/ember-cli-babel/blob/4c3b9091d7c711ecb804a52226409b409a702d82/lib/babel-options-util.js#L398
            [
              require.resolve('@babel/plugin-transform-typescript'),
              { allowDeclareFields: true }
            ],

            // https://github.com/babel/ember-cli-babel/blob/4c3b9091d7c711ecb804a52226409b409a702d82/lib/babel-options-util.js#L324
            [
              require.resolve('@babel/plugin-proposal-decorators'),
              { legacy: true }
            ],

            // https://github.com/babel/ember-cli-babel/blob/4c3b9091d7c711ecb804a52226409b409a702d82/lib/babel-options-util.js#L348-L349
            [
              require.resolve('@babel/plugin-proposal-class-properties'),
              { loose: false }
            ],

            // https://github.com/webpack/webpack/issues/10227
            // Remove when `ember-auto-import` updates to `webpack@5`.
            require.resolve(
              '@babel/plugin-proposal-nullish-coalescing-operator'
            ),
            require.resolve('@babel/plugin-proposal-optional-chaining')
          ],
          presets: [
            // Transpile incompatible syntax for project build targets
            [
              require.resolve('@babel/preset-env'),
              {
                modules: false,
                targets: this.project.targets
              }
            ]
          ]
        }
      }
    };

    // Push `tsModuleRule` into `webpack.module.rules`
    if (!webpack.module) {
      webpack.module = { rules: [tsModuleRule] };
    } else if (!webpack.module.rules) {
      webpack.module.rules = [tsModuleRule];
    } else if (
      !webpack.module.rules.some(
        r => String(r.test) === String(tsModuleRule.test)
      )
    ) {
      webpack.module.rules.push(tsModuleRule);
    }
  }
};
