var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Cars = require('Cars');
var CarForm = require('CarForm');
var ErrorModal = require('ErrorModal');
var NewArray = require('NewArray');
var Car = require('Car');
var Gallery = require("Gallery");
var ModernCars = require('ModernCars');
var EdmundsForm = require('EdmundsForm');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}> 		
  		<IndexRoute component={ModernCars} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/search" component={Cars} />
      <Route path="/edmundsForm" component={EdmundsForm} />
  	</Route>
  </Router>,
  document.getElementById('app')
);

