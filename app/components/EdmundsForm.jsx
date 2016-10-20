var React = require('react');
var axios = require('axios');

var EdmundsForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();
    var cars;
    var make = this.refs.make.value;
    var model = this.refs.model.value;
    var year = Number(this.refs.year.value);
    var condition = this.refs.condition.value;
    if(make !== "" & model !== "" & year !== "" & condition !== ""){
      this.refs.EdmundsForm.reset;

    }else{
      alert("Please fill out the entire form");
    }

    $(function(){
      var $cars = $('#cars');
        var Edmunds_API = 'https://api.edmunds.com/api/vehicle/v2';
        var Edmunds_API_KEY = "styles?&view=full&fmt=json&api_key=phf96xc8yshx4yupyjvqe83g";

      var encodedMake = encodeURIComponent(make);
      var encodedModel = encodeURIComponent(model);
      var encodedYear = encodeURIComponent(year);
        $.ajax({
          type: 'GET',
          url: `${Edmunds_API}/${encodedMake}/${encodedModel}/${encodedYear}/${Edmunds_API_KEY}`,
          success: function(data){
            $.each(data, function(i, data){
              cars = data;
              });
            // out of each
            var cars = data;
              if(data){

                // storing data into variables
                var makeName = data.styles[0].make.name;
                var modelName = data.styles[0].model.name;
                var cylinder = data.styles[0].engine.cylinder;
                var horsepower = data.styles[0].engine.horsepower;
                var torque = data.styles[0].engine.torque;
                var gasType = data.styles[0].engine.type;

                // Replacing html with stored variables
                var replaceMake = document.getElementById('make');
                replaceMake.innerHTML = makeName;
                var replaceModel = document.getElementById('model');
                replaceModel.innerHTML = modelName;
                var replacecylinder = document.getElementById('cylinder');
                replacecylinder.innerHTML  = " Cylinders: " + cylinder;
                var replaceHorsepower = document.getElementById('horsepower');
                replaceHorsepower.innerHTML = " Horsepower: " + horsepower + "hp";
                var replaceTorque = document.getElementById('torque');
                replaceTorque.innerHTML = " Torque: " + torque +" lb-ft";
                var replaceGasType = document.getElementById('gasType');
                replaceGasType.innerHTML = " Fuel Type: " + gasType.toUpperCase();
              }
            }
          });
        });
},

  render: function(){


    return (
      <div>
        <form ref="EdmundsForm" className="border" onSubmit={this.onFormSubmit}>
          <input className="edmundsFormInput" placeholder="Make" isRequired="required" ref="make" />
          <input className="edmundsFormInput" placeholder="Model" isRequired="required" ref="model" />
          <input className="edmundsFormInput" placeholder="Year" isRequired="required" ref="year" />
          <select name="condition" ref="condition">
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <button>Submit</button>
        </form>
        <div>
          <h1 className="text-center page-title"><span id="make"></span> <span id="model"></span></h1>
          <h3 className="text-center page-title"><span id="horsepower"></span><span id="torque"></span></h3>
          <h3 className="text-center page-title"><span id="cylinder"></span><span id="gasType"></span></h3>
        </div>
      </div>
    )
  }
});

module.exports = EdmundsForm;
