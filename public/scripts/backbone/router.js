function unmountAllComponents(els){
	_.each(els, function(el){
		React.unmountComponentAtNode(el);
	})
};

InstaApp.Router.AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "favorites": "favorites"
  }
});

var router = new InstaApp.Router.AppRouter();

router.on('route:home', function(){
	$('header').text("Popular Instagram Pictures!")

	if (initialAppLoad == false){
		InstaApp.initialize();
	} else {
		console.log("already loaded")
	};
});

router.on('route:favorites', function(){
	var listItems = document.getElementsByClassName("listitem");
	unmountAllComponents(listItems);

	$("#pictures").empty();
	if(favorites){
		console.log("exists")
	} else {
		favorites = favorites || new InstaApp.Collections.FavoritesCollection();

		favorites.fetch();
	};
	var listView = new InstaApp.Views.FavoritesListView({
		collection: favorites,
		el: $("#pictures")
	});
	$('header').text("Favorites")
});


