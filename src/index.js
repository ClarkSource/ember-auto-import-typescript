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
            // https://github.com/babel/ember-cli-babel/blob/036723709e26aba68eee1d5a9df49f97944e435b/index.js#L359-L385
            [
              require.resolve('@babel/plugin-transform-typescript'),
              { allowDeclareFields: true }
            ],

            // https://github.com/babel/ember-cli-babel/blob/036723709e26aba68eee1d5a9df49f97944e435b/index.js#L403-L409
            [
              require.resolve('@babel/plugin-proposal-decorators'),
              { legacy: true }
            ],

            // https://github.com/babel/ember-cli-babel/blob/036723709e26aba68eee1d5a9df49f97944e435b/index.js#L420-L426
            [
              require.resolve('@babel/plugin-proposal-class-properties'),
              { loose: true }
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
    if (!webpack.module) webpack.module = { rules: [tsModuleRule] };
    else if (!webpack.module.rules) webpack.module.rules = [tsModuleRule];
    else webpack.module.rules.push(tsModuleRule);
  }
};
