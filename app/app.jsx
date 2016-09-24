var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Cars = require('Cars');
var CarMessage = require('CarMessage');
var CarForm = require('CarForm');
var ErrorModal = require('ErrorModal');
var NewArray = require('NewArray');
var Car = require('Car');



// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}> 		
  		<IndexRoute component={Cars} />
  	</Route>
  </Router>,
  document.getElementById('app')
);

