import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
	return (
		<div>
			{isOpen && (
				<div
					onClick={toggle}
					className='grid grid-rows-4 text-center items-center z-50'
				>
					<div className='p-3 bg-white hover:bg-pink-200'>
						<Link to='/'>Home</Link>
					</div>
					<div className='p-3 bg-white  hover:bg-pink-200'>
						<Link to='/yourcart'>Your Cart</Link>
					</div>
					<div className='p-3 bg-white  hover:bg-pink-200'>
						<Link to='/about'>About</Link>
					</div>
					<div className='p-3 bg-white  hover:bg-pink-200'>
						<Link to='/contact'>Contact</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
