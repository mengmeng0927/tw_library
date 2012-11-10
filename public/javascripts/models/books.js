App.models.Books = Backbone.Collection.extend({

	model: App.models.Book,

	url: '/books'

});