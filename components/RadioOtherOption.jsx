var RadioOtherOption = React.createClass({
	getInitialState : function(){
		return {
			checked : false
		}
	},
	clickMessage:function (e) {
		var el = e.currentTarget;
		this.setState({checked:el.checked});	

	console.log("hello");
	},
	componentDidUpdate: function(prevProps,prevState){
		console.log("componentDidUptate");
		var el = this.refs.input.getDOMNode();
		if(prevState.checked != el.checked){
			this.setState({checked:el.checked});	
		}	
	},
	render : function(){
		console.log("radio other option");
		return (

				<p className="form-group radio">
					<label>
						<input ref="input" type="radio" onChange={this.clickMessage} name="referrer" value="other"/>
						Other
					</label>
					{this.state.checked && (
						<label className="form-inline">
							Please specify:
							<input type="text" name="referrer_other"/>
						</label>
					)}
					
					
				</p>

			)
	}
}); 