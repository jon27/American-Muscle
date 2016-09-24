var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {

	return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Modern Muscle Cars</li>
						<li><IndexLink to="/" actvieClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
					</ul>
				</div>
			</div>
			);
}

module.exports = Nav;


