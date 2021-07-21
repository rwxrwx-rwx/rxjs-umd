const { singleSpaAngularWebpack } = require('../single-spa-webpack');

  require('ng-zorro-antd');

  module.exports = (config, options) => {
    const custom = singleSpaAngularWebpack(config, options);
    const filename = 'ng-zorro-antd-cascader';

    custom.entry = {
      'ng-zorro-antd/cascader': 'ng-zorro-antd/cascader'
    };
    custom.output.filename = filename + '.umd' + (config.mode === 'development' ? '' : '.min') + '.js';
    custom.externals.push('tslib', 'rxjs', 'rxjs/operators', 'zone.js', '@angular/core', '@angular/common', '@angular/animations', '@angular/platform-browser', '@angular/forms', '@angular/cdk', '@angular/router', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/types', 'ng-zorro-antd/core/environments', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'ng-zorro-antd/core/polyfill', 'ng-zorro-antd/core/services', 'ng-zorro-antd/core/config', '@angular/animations/browser', '@angular/platform-browser/animations', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/time', 'ng-zorro-antd/i18n', 'ng-zorro-antd/core/highlight', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/empty', '@angular/common/http', 'ng-zorro-antd/icon', 'ng-zorro-antd/input');

    return custom;
  };
