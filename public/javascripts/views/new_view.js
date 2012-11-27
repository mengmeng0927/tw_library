App.Views.NewView = Backbone.View.extend({

	events: {
		'change input': 'update_model',
		'click button[type="submit"]': 'save'
	},

	initialize: function () {
		this.render();
	},

	render: function () {
		var html = App.helper.renderTemplate('new', {});
		$(this.el).html(html);
		$('#app').html(this.el);
	},

	save: function (e) {
		e.preventDefault();
		this.model.save(null, {
			success: function () {
				App.app.navigate('!/index', {trigger: true});
			}
		});
	},

	update_model: function (e) {
		var input = e.target.id;
		this.model.attributes[e.target.id] = e.target.value;
	}

});