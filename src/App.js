import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react';
import bg from './assets/IMG_1.JPEG';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from './components/Grid';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Cart from './components/Cart';
import ProductScreen from './screens/ProductScreen';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [cart, setCart] = useState([]);

	const addToCart = (prod) => {
		if (cart.length === 0) {
			setCart([...cart, prod]);
		} else {
			// cart.forEach((item) =>
			// 	item._id === prod._id
			// 		? [...item, item.count++]
			// 		: setCart([...cart, prod])
			// );
		}
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};
		window.addEventListener('resize', hideMenu);
		console.log('resizing first');
		return () => {
			window.removeEventListener('resize', hideMenu);
		};
	});
	console.log('Cart from App', cart);
	return (
		<Router>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className='h-screen bg-no-repeat bg-cover min-h-screen '
			>
				<Navbar toggle={toggle} cart={cart} />
				<Dropdown isOpen={isOpen} toggle={toggle} />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/grid'>
						<Grid />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route exact path='/yourcart'>
						<Cart />
					</Route>
					<Route
						exact
						path='/productscreen/:id'
						render={(props) => (
							<ProductScreen {...props} addToCart={addToCart} cart={cart} />
						)}
					></Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
