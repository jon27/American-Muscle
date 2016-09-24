var React = require('react');
var ErrorModal = require('ErrorModal');

var CarForm = React.createClass({
	 onFormSubmit: function (e) {
	 	e.preventDefault();

	var year = Number(this.refs.year.value); 
  if(year >= 1949 && year<= 2016 ){
	this.props.renderCarByYear(year);
	this.refs.carform.reset();
}else{
  alert("Sorry enter a number between 1949 and 2016");
  this.refs.carform.reset();
}
	
	},
	
	render: function () {	

	 	
	 	return (
	 		<div>
	 			<form ref="carform" onSubmit={this.onFormSubmit}>
          <input type="search"  ref="year" placeholder="Search a year (1949-2016)" />
          <button className="button expanded hollow">American Muscle</button>
        </form>
        	<div>
        	</div>
      </div>
	 );
	 }
});


module.exports = CarForm;