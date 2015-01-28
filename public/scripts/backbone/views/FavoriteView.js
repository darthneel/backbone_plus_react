InstaApp.Views.FavoriteView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "destroy", this.remove );
	},
	tagName: 'li',
	render: function() {
		this.component = React.render(
			<InstaApp.Components.FavComponment model={this.model} viewDelete={this.clickDelete.bind(this)} unfavoriteHandler={this.unfavorite.bind(this)} />,
			this.el
		)

		return this;
	},
	clickDelete: function(){
		React.unmountComponentAtNode(this.el);
		this.model.destroy();
	},
	unfavorite: function(){
		favorites.localStorage.destroy(this.model);
	}
});