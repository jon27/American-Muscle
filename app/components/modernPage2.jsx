var React = require('react');
var Main = require('Main');
var Nav  = require('Nav');
var CarForm = require('CarForm');
var ErrorModal = require('ErrorModal');
var CarInfo = require('CarInfo');
var Car = require('Car');
var NewArray = require('NewArray');

var ModernCars = React.createClass({
  render: function(){
    return (
        <div>
        <h2 className="text-center">Best ModernMuscle Cars of 2016</h2>
        <div className="div-display">
          <div className="left-img left image-hellcat">
            
          </div>
          <div className="right-text font-color-white"><p>
              The new kid on the block is also the most formidable. The Challenger Hellcat — 
              perhaps the most aptly named vehicle ever — has quickly made a name for itself as the 
              fastest production muscle car of all time. The Hellcat purrs out a hearty 707 horsepower 
              and 650 pound-feet of torque, which allows it to spring to 60 miles per hour in around 3.5 
              seconds on its way to an overall top speed of 199 miles per hour, putting it in a className 
              with other supercars from Ferrari and Lamborghini. The quarter-mile can also be done in a 
              relative snap, as the Hellcat can get it done in a scant 11.2 seconds. Of course, it does 
              burn through gas at a rate of 1.5 gallons per minute, so don’t plan on commuting with this beast.</p>
            </div>
        </div>
        
          <div className="div-display">
          <div className="left-img left image-hellcat">
            
          </div>
          <div className="right-text font-color-white"><p>
              The new kid on the block is also the most formidable. The Challenger Hellcat — 
              perhaps the most aptly named vehicle ever — has quickly made a name for itself as the 
              fastest production muscle car of all time. The Hellcat purrs out a hearty 707 horsepower 
              and 650 pound-feet of torque, which allows it to spring to 60 miles per hour in around 3.5 
              seconds on its way to an overall top speed of 199 miles per hour, putting it in a className 
              with other supercars from Ferrari and Lamborghini. The quarter-mile can also be done in a 
              relative snap, as the Hellcat can get it done in a scant 11.2 seconds. Of course, it does 
              burn through gas at a rate of 1.5 gallons per minute, so don’t plan on commuting with this beast.</p>
            </div>
        </div>
        </div>
    )
  }
});

module.exports = ModernCars;

        // <div className="">
        // <h2 className="text-center">Best ModernMuscle Cars of 2016</h2>
        // <div className="car-div">
        //   <div className="container">
        //     <div className="image-div left">
        //       <img className="image" src='https://lh3.googleusercontent.com/LmC8WZdkJsWTp6z7mtcXBdQhLK-khXJ-p9xjx7svKCVEWKymYqtqdc9bFG5C8hd2cTzbB6WpRqdc_GvhMsKZwNpvQHwO_PLdKz8AEsgZ_2xZ_C3o9MWkyIkzq5DJ03I4lMDyfMD0xkN70PtztWyCIKvRL-3aBmRdrUN4cpxtc7K1Xc62T7UP3E-1d9DvcSP99a29AgPKOmyFaDTcHq7EVi1Oif42XZu94aHZDviAf2rgK26vaTr5nITsYOHO8x29NsriCTh1rVBLJ6AKyvQuUQASbN8TwQ_VnAvMcICmgrsdiVoaWwnj00odF_WYg6E_RxoopwH_H36omzZc1UwvVy6CbkI-1WLSWSs7SoLmEhUxM8UZ5YGBNncnv_Dl61U7kP4OGpqpF0Mm3y6vNO-ll7tvdLO7m3I8HDhEU0PcSvX4Jw8hOSYoqan2bPxVclO4bJx5PE1ufULi0AtaqVTPrQ0odT2Thj7stnu0XYSyweLynVc5rPhGnq66kvgIHhXd53KTUwiC5i_s9matGagQaKlv1INb_zt-otgRJ8jot7I6s5nQqn09-rItccfkh0GnQBTG8yW8fGFozU2ixW77V86i2Tgn1HDvnU5f4d1okJSv54af=s600-no' />
            
        //       <span className="right">
        //     The new kid on the block is also the most formidable. The Challenger Hellcat — perhaps the most aptly named vehicle ever — has quickly made a name for itself as the fastest production muscle car of all time. The Hellcat purrs out a hearty 707 horsepower and 650 pound-feet of torque, which allows it to spring to 60 miles per hour in around 3.5 seconds on its way to an overall top speed of 199 miles per hour, putting it in a className with other supercars from Ferrari and Lamborghini. The quarter-mile can also be done in a relative snap, as the Hellcat can get it done in a scant 11.2 seconds. Of course, it does burn through gas at a rate of 1.5 gallons per minute, so don’t plan on commuting with this beast.
        //     </span>
        //     </div>
        //   </div>
        // </div>
        // </div>


        //         <div className="div-display">
        // <div className="left-img image-hellcat">
        // </div>
        //   <div className="font-color-white right-img">
        //     <h4 className="text-center">2016 Dodge Challenger SRT Hellcat.</h4>
        //     <p>The new kid on the block is also the most formidable. The Challenger Hellcat — 
        //     perhaps the most aptly named vehicle ever — has quickly made a name for itself as the 
        //     fastest production muscle car of all time. The Hellcat purrs out a hearty 707 horsepower 
        //     and 650 pound-feet of torque, which allows it to spring to 60 miles per hour in around 3.5 seconds 
        //     on its way to an overall top speed of 199 miles per hour, putting it in a className with other supercars 
        //     from Ferrari and Lamborghini. The quarter-mile can also be done in a relative snap, as the Hellcat can 
        //     get it done in a scant 11.2 seconds. Of course, it does burn through gas at a rate of 1.5 gallons per minute, 
        //     so don’t plan on commuting with this beast.</p>
        //   </div>
        // <div className="div-display">
        // <div className="">
        // </div>
        //   <div className="font-color-white ">
        //     <h4 className="text-center">2016 Dodge Challenger SRT Hellcat.</h4>
        //     <p>The new kid on the block is also the most formidable. The Challenger Hellcat — 
        //     perhaps the most aptly named vehicle ever — has quickly made a name for itself as the 
        //     fastest production muscle car of all time. The Hellcat purrs out a hearty 707 horsepower 
        //     and 650 pound-feet of torque, which allows it to spring to 60 miles per hour in around 3.5 seconds 
        //     on its way to an overall top speed of 199 miles per hour, putting it in a className with other supercars 
        //     from Ferrari and Lamborghini. The quarter-mile can also be done in a relative snap, as the Hellcat can 
        //     get it done in a scant 11.2 seconds. Of course, it does burn through gas at a rate of 1.5 gallons per minute, 
        //     so don’t plan on commuting with this beast.</p>
        //   </div>
        // </div>
        // </div>
