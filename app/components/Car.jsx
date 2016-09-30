var React= require('react');

var Car = React.createClass ({

	render: function(){
	var details = this.props.details;
	var key = this.props.key;
  var year = this.props.year;
	var specs = details.desc + details.name + details.descTwo + details.name + details.descThree + details.name + details.descFour;


		return (
          <div className="div-display-search">
          <div className="flex-container">
          <div className="flex-item-img"><img src={details.image} /></div>
          <div className="flex-item-content">
            <h3>{details.year} {details.name}</h3>
            <p>{specs}</p>
          </div> 
          </div>
				</div>
			)
	}
});

module.exports = Car;


      // <div className="media-object stack-for-small">
      //   <div className="media-object-section">
      //     <div className="thumbnail">
      //   <img src={details.image} />
      //     </div> 
      //   </div>
      //   <div className="media-object-section">
      //     <h2 className="align-center">{details.year}  {details.name}</h2>
      //     <h5 >{specs}</h5>
      //   </div>