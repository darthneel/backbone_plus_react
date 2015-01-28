InstaApp.Router.AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "favorites": "favorites"
  }
});

var router = new InstaApp.Router.AppRouter();

router.on('route:home', function(){
	if (initialAppLoad == false){
		InstaApp.initialize();
	} else {
		console.log("already loaded")
	};
});

router.on('route:favorites', function(){
	console.log("Sweet favorites bro")
});


