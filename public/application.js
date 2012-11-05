var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.router.Books();
        Backbone.history.start();
    }
};