InstaApp.Collections.FavoritesCollection = Backbone.Collection.extend({
	model: InstaApp.Models.Pic,
	localStorage: new Backbone.LocalStorage("favoritesCollection")
});

