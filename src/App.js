import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TopNav from './components/TopNav';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="wrap">
					<div className="header">
					<Header />
					<div className="clear"> </div>
					<SubHeader />
					<div className="clear"> </div>
					<TopNav />
				</div>
				<ImageSlider />
				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
						</div>
					</div>
					<div className="products products-secondbox">
						<h5><span>Our</span> Specials</h5>
						<div className="section group">
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
							<ProductDetail />
						</div>
					</div>
				</div>
				</div>
				<div className="clear"> 
				</div>
				</div>
				<Footer />
      </div>
    );
  }
}

export default App;
