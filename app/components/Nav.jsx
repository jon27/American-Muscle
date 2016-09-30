var React = require('react');
var {Link, IndexLink} = require('react-router');
// Look up Drop Down Menu or vertical menu
var Nav = React.createClass({
	render: function(){
			return (
			<div className="top-bar">
				<div className="top-bar-left align-vertical">
					<ul className="menu">
						<li className="font-bold"><span className="red-text">American</span> <span className="white-text">Muscle</span> <span className="blue-text">Cars</span></li>
            <li>
              <IndexLink to="/" className="menu-text" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span>Home</span></IndexLink>
            </li>
            <li>
              <Link to="/gallery" className="menu-text" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Gallery</Link>
            </li>
            <li>
              <Link to="/search" className="menu-text" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Take a look at history</Link>
            </li>					
          </ul>
					</div>
					<div className="top-bar-right align-vertical">
					<div className="ssk-group ssk-count">
    				<a href="https://www.facebook.com" className="ssk ssk-facebook"></a>
    				<a href="https://www.twitter.com" className="ssk ssk-twitter"></a>
    				<a href="https://plus.google.com" className="ssk ssk-google-plus"></a>
					</div>
				</div>
			</div>

			);
	}
});

module.exports = Nav;


