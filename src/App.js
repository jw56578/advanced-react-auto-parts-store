import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TopNav from './components/TopNav';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import Products from './components/Products';
import  Home from './components/Home';

import {
  BrowserRouter,
  Route,
  Link,
	Switch
} from 'react-router-dom'

function App(props) {
	var content  = "";
	content = 	<div><ImageSlider /><Products /></div>;

	const ProductsByCategory = (myprops) => {
		return (
			<Products 
				{...myprops} //take every property from this object and send it in as a prop
				//store = {myprops.store} whatever ={myprops.whatever}
				{...props} //take every property from this object and send it in as a prop
			/>
		);
	}

		
	return (
		<div className="App">
	    <BrowserRouter>
				<div className="wrap">
					<div className="header">
					<Header />
					<div className="clear"> </div>
					<SubHeader />
					<div className="clear"> </div>
					<TopNav changeView={props.changeView} />
					</div>
					<div className="content">
							<div>
								<Switch>
									<Route exact path="/" component={Home}/>
									<Route path="/contact" component={Contact}/>
									<Route path="/products/:category" component={ProductsByCategory}/>
									<Route render={() => <h2>Not Found!</h2>} />
								</Switch>
							</div>
					</div>
					<div className="clear"> 
					</div>
						<Footer />
				</div>
			
			</BrowserRouter>
		</div>
	);
}
export default App;
