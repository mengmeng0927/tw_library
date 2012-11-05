var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Books();
        Backbone.history.start();
    }
};