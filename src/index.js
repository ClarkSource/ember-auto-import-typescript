module.exports = {
  name: require('./package').name,

  init(parent) {
    // eslint-disable-next-line prefer-rest-params
    this._super.init && this._super.init.apply(this, arguments);
    this.patchConfig(parent);
  },

  patchConfig(parent) {
    console.log(parent);
    // debugger;
  }
};
