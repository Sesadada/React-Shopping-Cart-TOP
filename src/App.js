import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react';
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
	const [totalProd, setTotalProd] = useState(0);
	const [state, setState] = useState(window.pageYOffset);
	const [visible, isVisible] = useState(true);

	const addToCart = (prod) => {
		let tempCart = cart.slice(); //shallow copy of array
		let alreadyIn = false; //flag
		tempCart.forEach((item) => {
			if (item._id === prod._id) {
				item.count++;
				alreadyIn = true;
			}
		});
		if (!alreadyIn) {
			tempCart.push({ ...prod, count: 1 });
		}
		setCart(tempCart);
		bought(tempCart);
	};

	const removeFromCart = (prod) => {
		let tempCart = cart.slice();
		tempCart.forEach((item, index) => {
			if (item._id === prod._id) {
				if (item.count > 1) {
					item.count--;
				} else if (item.count === 1) {
					tempCart.splice(index, 1);
				}
			}
		});

		setCart(tempCart);
		bought(tempCart);
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const bought = (tot) => {
		let num = 0;
		tot.forEach((i) => {
			num += i.count;
		});
		setTotalProd(num);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};
		window.addEventListener('resize', hideMenu);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', hideMenu);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isOpen]);

	const handleScroll = () => {
		const prevScrollpos = JSON.parse(JSON.stringify(state));
		const currentScrollPos = window.pageYOffset;

		const newVisible = prevScrollpos === currentScrollPos;
		setState(currentScrollPos);
		isVisible(newVisible);
	};

	return (
		<Router>
			<div onClick={isOpen ? toggle : undefined} className='h-screen bg-black'>
				<Navbar toggle={toggle} total={totalProd} />
				<Dropdown isOpen={isOpen} toggle={toggle} />
				<Switch>
					<Route
						exact
						path='/React-Shopping-Cart-TOP/'
						render={(props) => (
							<Home {...props} toggle={toggle} isOpen={isOpen} />
						)}
					></Route>
					<Route exact path='/grid'>
						<Grid />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route
						exact
						path='/yourcart'
						render={(props) => (
							<Cart
								{...props}
								cart={cart}
								totalP={totalProd}
								remove={removeFromCart}
								add={addToCart}
							/>
						)}
					></Route>
					<Route
						exact
						path='/productscreen/:id'
						render={(props) => (
							<ProductScreen {...props} addToCart={addToCart} cart={cart} />
						)}
					></Route>
				</Switch>
				{visible ? <Footer /> : undefined}
			</div>
		</Router>
	);
}

export default App;
