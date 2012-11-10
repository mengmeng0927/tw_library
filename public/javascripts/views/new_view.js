App.Views.NewView = Backbone.View.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		var html = App.helper.renderTemplate('new', {});
		$(this.el).html(html);
		$('#app').html(this.el);
	}

});