import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
	return (
		<Fade bottom>
			<div className='h-screen mt-4 ml-24 md:h-96 lg:h-96  justify-center items-center md:ml-48 md:mt-28 lg:ml-64 lg:mt-32 text-3xl w-3/5'>
				<h3 className='font-black text-black'>About</h3>
				<p className='text-sm p-6 h-80 bg-white bg-opacity-50 sm:p-0 md:bg-opacity-0 mt-3 h-28'>
					This lady from a little town in central Italy told me I had a
					2bad-eye" over me, and made a ritual to make it go away. She used two
					dishes, some oil drops, and while she moved her hands she prayed, and
					repeatedly said something I couldn't understand. It was in an italian
					dialect. I was inspired by this episode to draw all the ingredients I
					saw that night and made some kind of tea towels that are also a spell.
					This is done to remember her, she died two months later.{' '}
				</p>
			</div>
		</Fade>
	);
};

export default About;
