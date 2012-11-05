App.router.Books = Backbone.Router.extend({
	routes: {
		// "books/:id": "edit",
		"": "index"
		// "new": "newBook"
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
		$.getJSON('/books', function (data) {
			if (data) {
				var books = _(data).map(function (i) {
					return new Book(i);
				});
				new App.Views.Index({ books: books});
			} else {
				new Error({ message: "Error loading books."});
			}
		});
	}

	// newBook: function () {
	// 	new App.Views.Edit({ model: new Book()});
	// }

});

var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.router.Books();
        Backbone.history.start();
    }
};