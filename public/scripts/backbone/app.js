
InstaApp.initialize = function(){

	collection = new InstaApp.Collections.PicsCollection();

	if(favorites){
		return true
	} else {
		favorites = favorites || new InstaApp.Collections.FavoritesCollection();

		favorites.fetch();
	};

	var listView = new InstaApp.Views.PicsListView({
		collection: collection,
		el: $("#pictures")
	});
	
	console.log(collection)

	console.log(listView);

	$('body').find('form').on('submit', function(e){
		e.preventDefault();
		$.ajax({
			type: 'GET',
			url: "/pics"
		}).done(function(data){
			console.log(data)
		})
	})

	initialAppLoad = !initialAppLoad;
	console.log("app init!");
}


$(function(){
	Backbone.history.start();

});