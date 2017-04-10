import React, { Component } from 'react';

function SubHeader(props){
  return(
    	<div className="top-nav">
				<ul>
					<li><a href="carlights.html">car lights</a></li>
					<li><a href="carwheels.html">Car wheels</a></li>
					<li><a href="carbumpers.html">car bumpers</a></li>
					<li><a href="caradsystem.html">car audiosystem</a></li>
					<li><a href="truckbumpers.html">Truck bumpers</a></li>
					<li><a href="#" onClick={
						(e)=>{
							e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
							props.changeView('contact')
						}
						}>Feedback</a></li>
					<div className="clear"> </div>
				</ul>
			</div>
  );
}
export default SubHeader;