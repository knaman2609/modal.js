(function($) {

function modalEl () {
  return $('<div class="modal"><div class="modal_overlay"></div><div class="modal_inner"> <div class="modal_header"> </div> <div class="modal_body"> </div> <div class="modal_footer"> <div class="cancel modal_btn"></div> <div class="confirm modal_btn"></div> </div> <div class="modal_close"></div> </div> </div>');
}

var modal = {
  DEFAULT: {
    _class: '',
    header: 'Modal Header',
    body: 'Modal Body',
    footer: {confirmText: 'CONFIRM', cancelText: 'CANCEL'},
    done: function(){},
    confirm: function(){},
    cancel: function(){}
  },
  isVisible: false,
  init: function(options) {
    this.options = $.extend({}, this.DEFAULT, options);

    if (typeof this.$el == 'undefined') {
      this.$el = modalEl();
      $('body').append(this.$el);
      this.addListner();
      this.options.done.bind(this);  
    }

    this.isVisible = false;
    this.create();
    this.open();
  },
  addListner: function() {
    this.$el.find('.modal_footer .cancel').on('click', this.close.bind(this));
    this.$el.find('.modal_footer .confirm').on('click', this.options.confirm.bind(this));
  },
  create: function () {
    this.applyDefaultClass();
    this.$el.addClass(this.options._class);
    this.$el.find('.modal_header').html(this.options.header);
    this.$el.find('.modal_body').html(this.options.body);
    this.$el.find('.modal_footer .cancel').text(this.options.footer.cancelText);
    this.$el.find('.modal_footer .confirm').text(this.options.footer.confirmText);
  },
  open: function() {
    if (this.isVisible)
    return;

    this.$el.fadeIn(300);
    this.$el.addClass('is-active');
    this.isVisible = true;
  },
  close: function() {
    if (!this.isVisible)
    return;

    this.$el.fadeOut(300);
    this.isVisible = false;
    this.$el.removeClass('is-active');
    this.options.cancel();
  },
  applyDefaultClass: function() {
    this.$el.attr('class', 'modal');
  },
  update: function(options) {
    this.options = $.extend({}, this.options, options);
    this.init(this.options);
  }
}

function Modal(options) {
  modal.init(options);
  return modal;
}

window.modal = Modal

})(jQuery);

