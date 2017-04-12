import React, { Component } from 'react';
import { Link,Router } from 'react-router-dom'


function SubHeader(props){
  return(
    	<div className="top-nav">
				<ul>
					<li><a href="carlights.html">car lights</a></li>
					<li><a href="carwheels.html">Car wheels</a></li>
					<li><a href="carbumpers.html">car bumpers</a></li>
					<li><a href="caradsystem.html">car audiosystem</a></li>
					<li>
						<Link to="/products/bumpers">Truck bumpers</Link>
					</li>
					<li>
						<Link to="/contact">Feedback</Link>
					</li>     
					<div className="clear"> </div>
				</ul>
			</div>
  );
}
export default SubHeader;