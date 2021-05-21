import React from 'react';
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import products from '../assets/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProductScreen = ({ match, addToCart, cart }) => {
	const [state, setState] = useState('');
	const num = match.params.id.match(/(?:-)(\d+)$/)[1];
	const element = <FontAwesomeIcon icon={faEuroSign} size='1x' />;

	useEffect(() => {
		window.scrollTo(0, 0);

		const item = products.filter((prod) => prod._id === num);
		setState(...item);
	}, [match.params.id, num]);

	return (
		<Fade bottom>
			<div className='grid lg:grid-cols-2 z-10 md:grid-cols-2 sm:grid-cols-1'>
				<div className='h-full justify-center items-center  text-3xl'>
					<img src={state.image} alt={state.name} className='flex w-screen ' />
				</div>
				<div className='bg-white w-full p-8'>
					<h3 className='font-black text-3xl pt-8 pb-8 sm:text-5xl'>
						{state.name}
					</h3>
					<h4 className='border p-4 font-medium text-1xl mb-8'>
						{state.description}
					</h4>
					<h6 className='border p-4 font-black text-4xl'>
						{state.price} {element}{' '}
						<p className='text-sm font-medium'>
							+ 10 {element} flat shipping fee
						</p>
						<p className='text-xs font-normal'>
							If you buy up to 4 products, the shipping fee will be only 10
							euros
						</p>
					</h6>
					<div className='grid grid-cols-3 gap-1'>
						<button
							onClick={() => addToCart(state)}
							className='focus:outline-none  my-10 bg-pink-400 active:bg-yellow-400 hover:shadow-md hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-xl'
						>
							Add to cart
						</button>{' '}
						<Link to='/grid'>
							<button className='focus:outline-none my-10 bg-pink-200 hover:shadow-md hover:bg-pink-400 text-gray-600 font-bold py-2 px-4 rounded-full shadow-xl'>
								Continue Shopping
							</button>
						</Link>
						<Link to='/yourcart'>
							<button className='focus:outline-none my-10 bg-grey-200 hover:shadow-md hover:bg-pink-200 text-black font-bold py-2 px-4 shadow-xl  rounded-full border'>
								Check Out
							</button>
						</Link>
					</div>
					<div className='border p-4'>
						<h3 className='font-medium'>
							{cart.length === 0
								? 'Your cart is empty! :('
								: 'Currently in your cart: '}
						</h3>
						<div className='py-4'>
							{cart.map((item, index) => (
								<div key={index}>
									{item.name} X {item.count}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default ProductScreen;
