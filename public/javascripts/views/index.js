App.Views.Index = Backbone.View.extend({

	tagName: 'section',

	initialize: function() {
		this.books = this.options.books;
		this.render();
	},

	render: function() {
		// var out;
		if (this.books.length > 0) {
		// out = "<h3><a href='#new'>Create New</a></h3><ul>";
			var html = App.helper.renderTemplate('new', {});
			$(this.el).html(html);
		}
		$(this.el).html(out);
		$('#app').html(this.el);
	}
});