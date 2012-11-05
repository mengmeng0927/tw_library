App.Views.Index = Backbone.View.extend({
	initialize: function() {
		this.books = this.options.books;
		this.render();
	},

	render: function() {
		var out;
		if (this.books.length > 0) {
		out = "<h3><a href='#new'>Create New</a></h3><ul>";
		}
		$(this.el).html(out);
		$('#app').html(this.el);
	}
});