import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import burgers from '../components/burgers.json';
import styles from './Home.module.css';

export function Home({ cart, setCart }) {
	const addToCart = item => {
		return setCart([...cart, item]);
	};
	console.log(cart);
	return (
		<section>
			<div className={styles.container}>
				{burgers.map(item => {
					return (
						<div key={item.id} className={styles.card}>
							<img
								className={styles.image}
								width={265}
								height={260}
								src={item.img}
								alt={item.name}
							/>
							<span className={styles.name}>{item.name}</span>
							<p className={styles.description}>{item.description}</p>

							<strong className={styles.price}>${item.price}</strong>
							<button className={styles.add} onClick={() => addToCart(item)}>
								Add to cart
							</button>
						</div>
					);
				})}
			</div>
			<div className={styles.cart}>
				<Link to='/shoppingcart'>
					<BsCart4 size={22} />
				</Link>
			</div>
		</section>
	);
}
