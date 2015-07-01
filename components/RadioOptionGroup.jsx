var RadioOptionGroup = React.createClass({
	onChange: function(){
		console.log("on onChange");
		this.refs.other.forceUpdate();

	},
	render :  function(){

		return (
				<div onChange={this.onChange}>
					{this.props.options.map(function(option){
						return (<RadioOption value={option.value} key={option.value}>
							{option.label}
						</RadioOption>)
					})}

					{this.props.otherOption && <RadioOtherOption ref="other" />}
					
					
				</div>
			)
	}
})