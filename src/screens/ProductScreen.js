import React from 'react';
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import products from '../assets/products';

const ProductScreen = ({ match, addToCart, cart }) => {
	const [state, setState] = useState('');
	const num = match.params.id.match(/(?:-)(\d+)$/)[1];

	useEffect(() => {
		const item = products.filter((prod) => prod._id === num);
		setState(...item);
	}, [match.params.id, num]);

	console.log('Cart from ProdScreen', cart);
	return (
		<Fade bottom>
			<div className='grid lg:grid-cols-2 z-10 md:grid-cols-2 sm:grid-cols-1'>
				<div className='h-full justify-center items-center  text-3xl'>
					<img src={state.image} alt={state.name} className='flex w-screen ' />
				</div>
				<div className='bg-white w-full p-8'>
					<h3 className='font-black text-5xl pt-8 pb-8'>{state.name}</h3>
					<h4 className='border p-4 font-bold text-1xl mb-8'>
						{state.description}
					</h4>
					<button
						onClick={() => addToCart(state)}
						className=' mb-10 bg-pink-400 hover:shadow-md hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-2xl'
					>
						Add to cart
					</button>{' '}
					<button className=' ml-4 mb-10 bg-pink-200 hover:shadow-md hover:bg-pink-400 text-gray-600 font-bold py-2 px-4 rounded-full shadow-2xl'>
						Continue Shopping
					</button>
					<button className=' ml-4 mb-10 bg-grey-200 hover:shadow-md hover:bg-pink-200 text-black font-bold py-2 px-4 shadow-2xl  rounded-full border'>
						Go to Cart
					</button>
					<div className='border'>
						<h3>Your Cart {cart.length === 0 ? 'is empty!' : ':'}</h3>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default ProductScreen;
