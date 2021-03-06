InstaApp.Views.PicsListView = Backbone.View.extend({
	initialize: function(){
		this.collection.fetch().done(this.render.bind(this));
		this.listenTo(this.collection, 'destroy', this.render);

	},
	render: function() {
		// console.log("rendering")
		var self = this;
		this.$el.empty()

		_.each(this.collection.models, function(model) {
			var picView = new InstaApp.Views.PicView({ model: model });
			self.$el.append(picView.render().$el);
			// console.log(self.collection.models.length)
		});
	}
});


