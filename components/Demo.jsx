var Demo = React.createClass({
	render : function(){
	var radioOptionArr = [{value:'newspaper', label: 'newspaper'},{value:'radio', label:'Radio'},{value:'tv',label:'TV'},{value:'search',label:'Label'}];

		return (

				<div className="container">
				<h1>React.js Radio Group Demo</h1>
				
				<form>
					<p className="h3">How did you hear about us?</p>

					<RadioOptionGroup otherOption={true} options={radioOptionArr} /> 

					<p><input type="submit"/></p>
				</form>
			</div>

			)
	}

});