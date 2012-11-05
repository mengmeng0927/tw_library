var Book = Backbone.Model.extend({
	url: function () {
		var base = 'books';
		if (this.isNew()) return base;
		return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
	}
});