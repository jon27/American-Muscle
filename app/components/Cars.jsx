var React = require('react');
var Main = require('Main');
var Nav  = require('Nav');
var CarForm = require('CarForm');
var ErrorModal = require('ErrorModal');
var CarInfo = require('CarInfo');
var Car = require('Car');
var NewArray = require('NewArray');

var Cars = React.createClass({
  getInitialState: function () {
    return {
      cars: [undefined]
    }
  },
componentDidUpdate: function(prevProps, prevState){

},

renderCarByYear: function(key){
   var year = key;
   var cars = require("./NewArray.jsx");
   console.log("i am the year input from carform passed to the renderCarByYear " + year);
   function findCarByYear(car){
    return car.year === key;
   }
    var specificCar = cars.find(findCarByYear);
    this.setState({
      cars: specificCar
    });

},

  render: function () {
    var {specificCar} = this.state;
    var rendercar = () => {
      if(this.state.cars != ""){
        return <Car details={this.state.cars} />
      }
    };

    return (
      <div>
        <h1 className="text-center page-title">Best of The Year</h1>
        <CarForm renderCarByYear={this.renderCarByYear} cars={this.state.cars}/>
        <span className="car-display">{rendercar()}</span>
      </div>
      
    )
  }
});


module.exports = Cars;
