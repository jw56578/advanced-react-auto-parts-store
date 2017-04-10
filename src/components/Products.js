import React, { Component } from 'react';
import ProductDetail from './ProductDetail';

function SubHeader(){
  return(
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
              <ProductDetail />
							<ProductDetail />
							<ProductDetail />
						</div>
					</div>
				</div>
  );
}
export default SubHeader;