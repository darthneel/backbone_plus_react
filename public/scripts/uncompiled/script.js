// Libraries
window.$ = require('jquery');
window._ = require('underscore');
window.Backbone = require('Backbone');
window.Backbone.$ = $;
window.Backbone.LocalStorage = require("backbone.localstorage");
window.React = require('react');

// Initialize global namespace
var InstaApp = InstaApp || { Models: {}, Collections: {}, Views: {}, Router: {}, Components: {} };
window.InstaApp = InstaApp;
window.collection;
window.favorites;
window.initialAppLoad = false;

// Backbone model
var Pics = require("../backbone/models/Pics.js");

// React component
var PicComponment = require("../backbone/components/pic.jsx");
var FavComponment = require("../backbone/components/favorite.jsx");

// Backbone collection
var PicsCollection = require("../backbone/collections/PicsCollection.js");
var FavoritesCollection = require("../backbone/collections/FavoritesCollection.js");

//Backbone Views
var PicsListView = require("../backbone/views/PicsListView.js");
var FavsListView = require("../backbone/views/FavoritesListView.js");
var PicView = require("../backbone/views/PicView.js");
var FavView = require("../backbone/views/FavoriteView.js");

//App init script
var App = require("../backbone/app.js");

//Router init
var Router = require('../backbone/router.js');

