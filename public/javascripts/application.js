var App = {
    Views: {},
    router: {},
    helper: {}
};


App.helper.renderTemplate = function (sourceId, model) {
	var fn = haml.compileHaml({sourceId: sourceId + '-template'});
	return fn(model);
};