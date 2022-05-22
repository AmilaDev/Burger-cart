import { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs';

import styles from './ShoppingCart.module.css';

export function ShoppingCart({ cart, setCart }) {
	const [total, setTotal] = useState([]);

	useEffect(() => {
		const getTotal = () => {
			let prices = [];

			if (cart.length !== 0) {
				cart.map(item => {
					return prices.push(item.price);
				});
			}
			let result = prices.reduce((acc, current) => acc + current, 0);
			setTotal(result);
		};
		getTotal();
	}, [cart]);

	const removeItem = id => {
		const removeItem = cart.filter(item => item.id !== id);
		setCart(removeItem);
	};

	const emptyCart = () => {
		setCart([]);
	};

	return (
		<section>
			<div className={styles.container}>
				{cart.map((item, index) => {
					return (
						<div key={index} className={styles.card}>
							<img src={item.img} alt={item.name} width={180} height={150} />
							<div className={styles.productInfo}>
								<span className={styles.name}>{item.name}</span>
								<span className={styles.price}>${item.price}</span>
							</div>

							<MdDelete
								className={styles.delete}
								size={30}
								onClick={() => {
									removeItem(item.id);
								}}
							/>
						</div>
					);
				})}
			</div>
			<div>
				{cart.length === 0 ? (
					<span className={styles.empty}>
						Your <BsCart4 size={55} /> is empty
					</span>
				) : (
					<div>
						<div className={styles.total}>
							<span>
								<strong>TOTAL : $</strong>
							</span>
							<span>{total}</span>
						</div>
						<div className={styles.contBtn}>
							<button className={styles.btnE} onClick={() => emptyCart()}>
								Empty cart
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
