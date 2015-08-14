;(function(root, factory) {
  'use strict';

  if (typeof exports === 'object') {

    // CommonJS module
    // Load jQuery as a dependency
    var jQuery;
    try {jQuery = require('jquery'); } catch (e) {}

    module.exports = factory(jQuery);
  } else {
    root.Module = factory(root.jQuery);
  }
}

(this, function($) {
  'use strict';

  // Module helper functions below
  var helperFunction = function() {
    // i cannot be accessed outside
  }


  // Constructor function
  var Module = function(options) {
    this.options = $.extend({}, this.DEFAULTS, options);

    // your code
  };

  // Module Apis below
  Module.prototype.doSomething = function() {

  }

  // Defaults
  Module.prototype.DEFAULTS = {

  };

  return Module;
}));
