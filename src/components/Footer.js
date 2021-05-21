import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
	return (
		<Fade bottom cascade>
			<div className=' fixed w-full inset-x-0 bottom-0'>
				<div className='flex justify-center items-center h-10 bg-black text-white'>
					Copyright @ Serena Olivieri
				</div>
			</div>
		</Fade>
	);
};

export default Footer;
