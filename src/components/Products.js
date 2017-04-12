import React, { Component } from 'react';
import ProductDetail from './ProductDetail';

function Products(props){
	debugger;
	if(!props.store){
		return null;
	}
	var products = props.store.products.filter(function(prod){
		return prod.category === props.match.params.category;
	});

	products = products.map(function(prod){
		return <ProductDetail product={prod} />;
	});
  return(
    	<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
							{products}
						</div>
					</div>
					<div className="products products-secondbox">
						<h5><span>Our</span> Specials</h5>
						<div className="section group">
								{products}
						</div>
					</div>
				</div>
  );
}
export default Products;