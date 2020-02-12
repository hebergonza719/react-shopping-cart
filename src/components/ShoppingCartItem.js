import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Item = props => {
	const [cart, setCart] = useContext(CartContext);
	
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={e => {
					console.log("this is key", props.id);
					console.log("this is cart", cart);
					const newCart = cart.filter((item) => {
						return item.id !== props.id;
					})
					console.log("this is newCart", newCart);
					setCart(newCart);
					}}
				>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
