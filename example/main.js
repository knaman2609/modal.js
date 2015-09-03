;(function() {
  var modal = Modal();

  // create the modal box
  modal.create({
    _class: 'modal--doSomething',
    header: 'My custom header',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      'Praesent venenatis metus vel eleifend sodales. Etiam consequat euismod ex in sollicitudin.',
    footer: {confirmText: 'CONFIRM', cancelText: 'CANCEL'},
    done: function() {
      console.log('done');
    },

    cancel: function() {
      console.log('cancel');
    },

    confirm: function() {
      console.log('confirm');
    },
  });

  modal.open();

  // update the modal box
  setTimeout(function() {
    modal.update({
      _class: 'modal--success',
      header: 'delete this person',
      body: 'delete Success',
      footer: {confirmText: null, cancelText: null},
    });

    // close after 2000 ms;
    modal.close(2000);
  }, 3000);

  window.modal = modal;
})();
