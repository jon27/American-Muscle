var React = require('react');

var CarMessage = React.createClass ({
  render: function(){
  var details = this.props.details;
    return (
      console.log("I AM THE CAR MESSAGE")
    )
  }
});

module.exports = CarMessage;
