import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Navbar = ({ toggle, total }) => {
	return (
		<Fade top cascade>
			<nav
				className='flex justify-between items-center h-16 text-white relative shadow-sm'
				role='navigation'
			>
				<Link to='/React-Shopping-Cart-TOP/'>
					<div>
						<h1 className='text-3xl font-bold text-white text-center pl-4  lg:text-4xl'>
							Witchcraft
						</h1>
					</div>
				</Link>
				<div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</div>

				<div className='pr-8 md:block hidden'>
					<Link to='/React-Shopping-Cart-TOP/' className='p-4 font-black	'>
						Home
					</Link>
					<Link to='/yourcart' className='p-4 font-bold'>
						Your Cart ( {total} )
					</Link>
					<Link to='/about' className='p-4 font-bold'>
						About
					</Link>
					<Link to='/contact' className='p-4 font-bold'>
						Contact
					</Link>
				</div>
			</nav>
		</Fade>
	);
};

export default Navbar;
