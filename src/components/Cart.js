import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faEuroSign} size='1x' />;

const Cart = ({ cart, totalP, remove, add }) => {
	const total = (tot) => {
		let temp = 0;
		tot.forEach((i) => {
			if (i.count === 1) {
				temp += i.price;
			} else {
				temp += i.price * i.count;
			}
		});
		return temp;
	};

	const shipping = (n) => {
		return n > 4 ? 15 : 10;
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const prodCost = total(cart);
	const shipCost = shipping(totalP);

	return (
		<Fade bottom>
			<div className='mt-4 justify-center items-center '>
				<div className='m-4 p-4 bg-pink-400 rounded mt-3 sm:p-5 md:w-3/4 md:m-auto md:mt-10 lg:w-3/4'>
					<h3 className='font-black text-3xl text-white text-center sm:text-3xl'>
						{cart.length === 0
							? 'Your cart is empty!'
							: 'Currently in your cart '}
					</h3>
					<div className='py-2 text-center'>
						{cart.map((item, index) => (
							<div key={index} className='grid'>
								<div className='grid grid-cols-3 border bg-white rounded-t-lg'>
									<img
										src={item.image}
										alt={item.name}
										className='w-18 p-2 sm:w-18 md:w-28 lg:w-32 rounded'
									/>{' '}
									<div className='p-2 m-2 md:border-none rounded border'>
										<p className='font-bold'>Product</p>
										<p className='text-sm pt-4 md:pt-2 text-left md:text-center'>
											{item.name}
										</p>
										<p className='font-bold text-left md:text-center'>
											{' '}
											X {item.count}
										</p>
									</div>
									<div className='text-center border md:border-none rounded p-2 m-2'>
										<p className='font-bold'>Price </p>
										<div className='text-1xl pt-4 md:pt-2'>
											<p className='font-bold'>
												{item.price * item.count} {element}
											</p>
										</div>
									</div>
								</div>
								<div className='flex'>
									<button
										onClick={() => remove(item)}
										className='focus:outline-none w-2/4 text-sm bg-black hover:bg-red-600 text-white mb-3 rounded-bl-lg'
									>
										Remove Item
									</button>
									<button
										onClick={() => add(item)}
										className='focus:outline-none w-2/4 border text-sm bg-pink-400 hover:bg-pink-600 text-white mb-3 rounded-br-lg'
									>
										Add Another One
									</button>
								</div>
							</div>
						))}

						{prodCost > 0 && (
							<div className='mt-2'>
								<div className=' rounded border mb-2 p-2 flex justify-between bg-white'>
									<h6>
										Shipping of {totalP} product{totalP > 1 && 's'}:{' '}
									</h6>
									<h6 className='mr-4'>
										{shipCost} {''} {element}
									</h6>
								</div>

								<div className=' rounded border p-2 flex justify-between bg-white'>
									<h6>Total: </h6>
									<h6 className='mr-4'>
										{prodCost + shipCost} {''} {element}
									</h6>
								</div>
							</div>
						)}

						{prodCost > 0 && (
							<div className='grid grid-cols-3 gap-1 mt-6'>
								<button className='focus:outline-none mt-5 bg-black hover:shadow-md hover:bg-white hover:text-black text-white font-bold py-1 px-4 rounded-full shadow-xl mt-4'>
									PayPal
								</button>
								<button className='focus:outline-none mt-5 bg-black hover:shadow-md hover:bg-white hover:text-black text-white text-white font-bold py-1 px-4 rounded-full shadow-xl mt-4'>
									Credit Card
								</button>
								<button className='focus:outline-none mt-5 bg-black hover:shadow-md hover:bg-white hover:text-black text-white text-white font-bold py-1 px-4 rounded-full shadow-xl mt-4'>
									Apple Pay
								</button>
							</div>
						)}
						<Link to='/grid'>
							<button className='focus:outline-none my-10 bg-white hover:shadow-md hover:text-white hover:bg-black text-black-600 font-bold py-2 px-4 rounded-full shadow-xl'>
								Back to Shop
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Cart;
