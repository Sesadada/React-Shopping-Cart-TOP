import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
	return (
		<Fade bottom>
			<div className='mt-4 justify-center items-center overflow-hidden'>
				<div className='m-4 p-4 rounded bg-pink-400 mt-3 sm:p-5 md:w-2/4 md:m-auto md:mt-10 lg:w-2/4'>
					<h3 className='font-black text-4xl text-white text-center'>About</h3>
					<p className=' leading-6 text-sm p-6 h-80 mt-3 h-28 text-white'>
						This lady from a little town in central Italy told me I had a
						2bad-eye" over me, and made a ritual to make it go away. She used
						two dishes, some oil drops, and while she moved her hands she
						prayed, and repeatedly said something I couldn't understand. It was
						in an italian dialect. I was inspired by this episode to draw all
						the ingredients I saw that night and made some kind of tea towels
						that are also a spell. This is done to remember her, she died two
						months later.{' '}
					</p>
				</div>
			</div>
		</Fade>
	);
};

export default About;
