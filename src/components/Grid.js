import React from 'react';
import products from '../assets/products';
import Product from './Product';

const Grid = () => {
	return (
		<div className='grid lg:grid-cols-3 z-10 md:grid-cols-2 sm:grid-cols-1'>
			{products.map((prod) => {
				return <Product key={prod._id} product={prod} />;
			})}
		</div>
	);
};

export default Grid;
