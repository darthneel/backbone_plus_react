InstaApp.Components.FavComponment = React.createClass({
	componentWillUnmount: function(){
		console.log("component unmounting")
	},
	componentDidMount: function(){
		console.log("component mounted");
	},
	render: function(){
		return (
			<li className="favlistitem">
				<img src={this.props.model.attributes.images.thumbnail.url} />
				
				<button className="button" onClick={this.props.viewDelete}>Delete</button>				
				<button className="button" onClick={this.props.unfavoriteHandler}>Remove from Favorites</button>				
			</li>
		);
	}
});