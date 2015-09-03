;(function(root, factory) {
  'use strict';

  if (typeof exports === 'object') {

    // CommonJS module
    // Load jQuery as a dependency
    var jQuery;
    try {jQuery = require('jquery'); } catch (e) {}

    module.exports = factory(jQuery);
  } else {
    root.Modal = factory(root.jQuery);
  }
}

(this, function($) {
  'use strict';

  /**
   * return modal element
   * @return {Object} - jquery el
   */
  var modalEl = function() {
    return $('<div class="modal"> <div class="modal__backdrop"></div> <div class="modal__inner"> <div class="modal__header"> </div> <div class="modal__body"> </div> <div class="modal__footer"> <div class="cancel modal__btn"></div> <div class="confirm modal__btn"></div> </div> <div class="modal__close">X</div> </div> </div>');
  };

  /**
   * attach click events
   */
  var addListners = function() {
    var $cancel = this.$el.find('.modal__footer .cancel');
    var $close = this.$el.find('.modal__close');
    var $confirm = this.$el.find('.modal__footer .confirm');

    $cancel.off('click');
    $close.off('click');
    $confirm.off('click');

    $cancel.on('click', this.close.bind(this));
    $close.on('click', this.close.bind(this));
    $confirm.on('click', this.options.confirm.bind(this));
  };

  /**
   * insert data inside html tags
   */
  var prepare =  function() {
    this.clean();
    this.$el.addClass(this.options._class);
    this.$el.find('.modal__header').html(this.options.header);
    this.$el.find('.modal__body').html(this.options.body);

    if (!this.options.footer.cancelText)
    this.$el.find('.modal__footer .cancel').remove();
    else
    this.$el.find('.modal__footer .cancel').text(this.options.footer.cancelText);

    if (!this.options.footer.confirmText)
    this.$el.find('.modal__footer .confirm').remove();
    else
    this.$el.find('.modal__footer .confirm').text(this.options.footer.confirmText);
  };

  /**
   * closeNow
   */
  var closeNow = function() {
    this.$el.removeClass('is-active');
    this.isOpen = false;
    this.options.cancel.call(this);
  };

  /**
   * modalObj
   * isOpen false by default
   * @type {Object}
   */
  var modalObj = {
    isOpen: false,

    create: function(options) {
      this.options = $.extend({}, DEFAULTS, options);
      addListners.call(this);
      prepare.call(this);
      this.options.done.call(this);

      return this;
    },

    open: function() {
      if (this.isOpen)
      return;

      this.$el.addClass('is-active');
      this.isOpen = true;

      return this;
    },

    close: function(ms) {
      if (!this.isOpen)
      return;

      var _this = this;

      if (ms) {
        setTimeout(function() {
          closeNow.call(_this);
        }, ms);
      } else {
        closeNow.call(_this);
      }

      return this;
    },

    clean: function() {
      if (this.isOpen)
      this.$el.attr('class', 'modal is-active');
      else
      this.$el.attr('class', 'modal');
    },

    update: function(options) {
      this.options = $.extend({}, this.options, options);

      prepare.call(this);

      return this;
    },
  };

  /**
   * return the same modal instance
   */
  var getInstance = function() {
    if (typeof modalObj.$el === 'undefined') {
      modalObj.$el = modalEl();
      $('body').append(modalObj.$el);
    }

    return modalObj;
  };

  /**
   * Modal Constructor function
   * @param {Object} options - modal options
   */
  var Modal =  function() {

    return getInstance();
  };

  // Defaults
  var DEFAULTS = {
    _class: '',
    header: 'Modal Header',
    body: 'Modal Body',
    footer: {confirmText: null, cancelText: null},
    done: function() {},

    confirm: function() {},

    cancel: function() {},
  };

  return Modal;
}));
