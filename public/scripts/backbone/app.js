
InstaApp.initialize = function(){

	collection = new InstaApp.Collections.PicsCollection();
	favorites = new InstaApp.Collections.FavoritesCollection();

	favorites.fetch();

	var listView = new InstaApp.Views.PicsListView({
		collection: collection,
		el: $("#pictures")
	});
	
	//collection.fetch({reset: true});

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