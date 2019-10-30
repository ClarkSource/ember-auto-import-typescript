/* eslint-disable no-param-reassign */

module.exports = {
  name: require('./package').name,

  included(parent) {
    // eslint-disable-next-line prefer-rest-params
    this._super && this._super(...arguments);
    this.patchConfig(parent);
  },

  patchConfig(parent) {
    if (!parent.options) parent.options = {};
    parent.options.autoImport = require('./config');
  }
};
