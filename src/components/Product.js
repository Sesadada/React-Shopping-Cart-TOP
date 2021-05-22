import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	const slug = product.name.replace(/\s/g, '-');
	return (
		<div className='bg-pink-400'>
			<Link to={`/productscreen/${slug}-${product._id}/`}>
				<img
					src={product.image}
					alt={product.name}
					className='hover:opacity-60'
				/>
			</Link>
		</div>
	);
};

export default Product;
