var App = {
    models: {},
    Views: {},
    router: {},
    helper: {},
    config: {}
};

App.helper.loadTemplates = function (callback, options) {
  var loadedTemplates = 0;

	$(App.config.templates).each(function (index, name) {
    var path = '/javascripts/templates/' + name + '.html.haml';
    if (options && options.publicPath) {
      path = options.publicPath + path;
    }
    $.get(path, function (template) {
      registerTemplate(name, template);
      loadedTemplates ++;
      if (isLoadComplete()) {
        callback();
      }
    });
  });

  var registerTemplate = function (name, template) {
		var templateElement = $('<script type="text/haml-template" id="' + name + '"></script>');
    templateElement.html(template).appendTo($('body'));
  };

  var isLoadComplete = function () {
    return loadedTemplates === App.config.templates.length;
  };

};

App.helper.renderTemplate = function (sourceId, model) {
	var fn = haml.compileHaml({sourceId: sourceId});
	return fn(model);
};
