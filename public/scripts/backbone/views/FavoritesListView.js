InstaApp.Views.FavoritesListView = Backbone.View.extend({
	initialize: function(){
		this.collection.fetch().done(this.render.bind(this));
		this.listenTo(this.collection, 'destroy', this.render);

	},
	render: function() {
		var self = this;
		this.$el.empty()

		_.each(this.collection.models, function(model) {
			var picView = new InstaApp.Views.FavoriteView({ model: model });
			self.$el.append(picView.render().$el);
		});
	}
});


