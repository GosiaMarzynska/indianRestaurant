// import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = props => {
	const productsArray = useSelector(state => state.cart.items);
    const finalCost = useSelector(state=> state.cart.finalPrice)
	console.log(productsArray);
	const cartProducts = productsArray.map(product => (
		<CartItem
			key={product.id}
			item={{
				name: product.name,
				quantity: product.quantity,
				total: product.totalPrice,
				price: product.price,
				id: product.id,
			}}
		/>
	));
	return (
		<div className={classes.cart}>
			<h2>Twój koszyk</h2>
			<ul>{cartProducts}</ul>
            <p>Razem: {finalCost}zł</p>
		</div>
	);
};

export default Cart;
