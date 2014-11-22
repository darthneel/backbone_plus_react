// Libraries
window.$ = require('jquery');
window._ = require('underscore');
window.Backbone = require('Backbone');
window.Backbone.$ = $;
window.React = require('react');

// Initialize global namespace
var App = App || { Models: {}, Collections: {}, Views: {}, Components: {} };
window.App = App;
