var React = require('react');
var Main = require('Main');
var Nav  = require('Nav');
var CarForm = require('CarForm');
var ErrorModal = require('ErrorModal');
var Car = require('Car');
var NewArray = require('NewArray');

var ModernCars = React.createClass({
  render: function(){
    return (
        <div className="div-display">
          <h1 className="page-title">Top 3 Muscle Cars of 2016</h1>
          <div className="flex-container red">
          <div className="flex-item-img-hellcat"></div>
          <div className="flex-item-content">
            <h3>2016 DODGE CHALLENGER HELLCAT</h3>
            <p>The Challenger Hellcat has quickly made a name for itself as the fastest production muscle car of all time. The Hellcat puts out a whomping 707 horsepower and 650 pound-feet of torque, which allows it to get to 60 miles per hour in around 3.5 seconds on its way to an overall top speed of 199 miles per hour, putting it in a class with other supercars from Ferrari and Lamborghini.</p>
          </div> 
          </div>


          <div className="flex-container white">
          <div className="flex-item-content">
            <h3>2016 FORD SHELBY GT500</h3>
            <p>The Shelby GT 500 Mustang showcases the best of Ford. The Shelby GT 500 has the ability to tackle the quarter mile in 11.5 seconds, and also rocket to 60 miles per hour from a standstill in 3.5 seconds. The Shelby tops out at 191 miles per hour behind the power of 662 horses and a monstrous 631 pound-feet of torque, all courtesy of a 5.8-liter supercharged V8 engine.</p>
            </div>
          <div className="flex-item-img-gt500"></div> 
          </div>


          <div className="flex-container blue">
          <div className="flex-item-img-gt350"></div>
          <div className="flex-item-content">
            <h3>2016 FORD MUSTANG GT 350</h3>
            <p>Ford’s newest pony car on steroids, the Shelby GT350, is more than just a quarter-mile monster. Yes, the 5.2-liter V-8 can hustle it down the straight at a brain-melting pace. It’s not the 526 hp, the 429 lb-ft of torque, or the 4.3-second zero-to-60-mph run that has us drooling; it’s that Ford has finally built a muscle car that can hold its own through corners. True speed freaks can opt for the GT350R, which loses the rear seat, adds carbon fiber, and cuts 0.4 second off the zero-to-60 time.</p>
          </div> 
          </div>
        </div>
    )
  }
});

module.exports = ModernCars;
