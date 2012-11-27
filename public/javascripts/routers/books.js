App.config.templates = ['index', 'new'],

App.router.Books = Backbone.Router.extend({
	routes: {
		// "books/:id": "edit",
		"!/index": "index",
		"!/new": "newBook"
	},

	// edit: function(id) {
	// 	var book = new Book({id: id});
	// 	book.fetch({
	// 		success: function(model, resp) {
	// 			new App.Views.Edit({model: book});
	// 		},
	// 		error: function() {
	// 			new Error({ message: 'error'});
	// 			window.location.hash ='#';
	// 		}
	// 	});
	// },

	index: function() {
		var books = new App.models.Books();
		books.fetch({
			success: function(books) {
				new App.Views.IndexView({collection: books});
			}
		});
	},

	newBook: function () {
		var self = this;
		new App.Views.NewView({ model: new App.models.Book() });
	}

});

$(function () {
	App.helper.loadTemplates(function () {
		App.app = new App.router.Books();
    Backbone.history.start();
	});
});