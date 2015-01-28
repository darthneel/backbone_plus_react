InstaApp.Views.PicView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render )
		this.listenTo( this.model, "destroy", this.remove );
	},
	tagName: 'li',
	render: function() {
		this.component = React.render(
			<InstaApp.Components.PicComponment model={this.model} viewDelete={this.clickDelete.bind(this)} favoriteHandler={this.addFavorite.bind(this)} />,
			this.el
		)

		return this;
	},
	clickDelete: function(){
		React.unmountComponentAtNode(this.el);
		this.model.destroy();
	},
	addFavorite: function(){
		favorites.create(this.model);
		// favorites.sync();
	}
});