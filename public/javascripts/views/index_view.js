App.Views.IndexView = Backbone.View.extend({

	initialize: function() {
		this.books = this.options.books;
		this.render();
	},

	render: function() {
		if (this.collection.length > 0) {
			var html = App.helper.renderTemplate('index', {books: this.collection});
			$(this.el).html(html);
		}
		$('#app').html(this.el);
	}
});