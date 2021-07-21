const { singleSpaAngularWebpack } = require('../single-spa-webpack');

  require('@angular/animations');

  module.exports = (config, options) => {
    const custom = singleSpaAngularWebpack(config, options);
    const filename = 'angular-animations';

    custom.entry = {
      '@angular/animations': '@angular/animations'
    };
    custom.output.filename = filename + '.umd' + (config.mode === 'development' ? '' : '.min') + '.js';
    custom.externals.push('tslib', 'rxjs', 'rxjs/operators', 'zone.js', '@angular/core');

    return custom;
  };
