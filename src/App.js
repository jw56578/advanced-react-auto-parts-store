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

function App(props) {
	var content  = "";
	if(props.view === "contact"){
		content = <Contact />;
	}
	else{
		content = 	<div><ImageSlider /><Products /></div>;
	}
	return (
		<div className="App">
			<div className="wrap">
				<div className="header">
				<Header />
				<div className="clear"> </div>
				<SubHeader />
				<div className="clear"> </div>
				<TopNav changeView={props.changeView} />
				</div>
				<div className="content">
					{content}
				</div>
				<div className="clear"> 
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default App;
