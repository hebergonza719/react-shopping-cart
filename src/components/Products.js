import React from 'react';
import { useContext } from 'react';
import ProductContext from "../contexts/ProductContext";

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext); // in component

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product} // from useContext
					addItem={addItem} // from useContext
				/>
			))}
		</div>
	);
};

export default Products;
