import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		// why pass value as an object? Why not an array?
		<ProductContext.Provider value={{ products, addItem }}> 
			<CartContext value={cart}>
				<div className="App">
					{/* this doesn't need props anymore because of CartContext */}
					{/* <Navigation cart={cart} />  */}
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} //What is component? means this component will render

						// render={() => (
						// 	<Products
						// 		products={products}
						// 		addItem={addItem}
						// 	/>
						// )}
					/>

					<Route path="/cart" component={ShoppingCart}
						// render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</CartContext>
		</ProductContext.Provider>
	);
}

export default App;
