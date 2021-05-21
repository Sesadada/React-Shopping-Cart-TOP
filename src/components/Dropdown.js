import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Dropdown = ({ isOpen, toggle }) => {
	return (
		<Fade top cascade>
			<div className='z-50'>
				{isOpen && (
					<div className='grid grid-rows-4 text-center items-center z-50 '>
						<Link to='/'>
							<div
								onClick={toggle}
								className='p-3 bg-black text-white hover:bg-pink-200 border'
							>
								Home
							</div>
						</Link>
						<Link to='/yourcart'>
							<div
								onClick={toggle}
								className='p-3 bg-black text-white hover:bg-pink-200 border'
							>
								Your Cart
							</div>
						</Link>
						<Link to='/about'>
							<div
								onClick={toggle}
								className='p-3 bg-black text-white hover:bg-pink-200 border'
							>
								About
							</div>
						</Link>
						<Link to='/contact'>
							<div
								onClick={toggle}
								className='p-3 bg-black text-white hover:bg-pink-200 border'
							>
								Contact
							</div>
						</Link>
					</div>
				)}
			</div>
		</Fade>
	);
};

export default Dropdown;
