import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from '../pages/Home';
import { ShoppingCart } from '../pages/ShoppingCart';
import styles from './App.module.css';

export function App() {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const getLocalCart = () => {
			if (localStorage.getItem('cart') === null) {
				localStorage.setItem('cart', JSON.stringify([]));
			} else {
				let localCart = JSON.parse(localStorage.getItem('cart'));
				setCart(localCart);
			}
		};
		getLocalCart();
	}, []);

	useEffect(() => {
		const saveLocalCart = () => {
			localStorage.setItem('cart', JSON.stringify(cart));
		};
		saveLocalCart();
	}, [cart]);

	return (
		<BrowserRouter>
			<header className={styles.head}>
				<Link to='/'>
					<h1 className={styles.title}>BURGERS</h1>
				</Link>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home cart={cart} setCart={setCart} />} />
					<Route
						path='/ShoppingCart'
						element={<ShoppingCart cart={cart} setCart={setCart} />}
					/>
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
