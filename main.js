var m = modal({
	_class: 'modal-addReminder',
	header: 'header',
	body: 'body',
	footer: {confirmText: 'CONFIRM', cancelText: 'CANCEL'},
	done: function() {
		console.log(this.$el);
	},
	confirm: function() {
		console.log(this.$el);
		this.close();
	},
	cancel: function() {
		console.log('cancel');
	}
});