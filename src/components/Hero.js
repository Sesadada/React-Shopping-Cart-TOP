import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
const Hero = () => {
	const element = <FontAwesomeIcon icon={faArrowDown} size='3x' />;

	//white bg for title: bg-white bg-opacity-60	rounded-2xl
	return (
		<Fade top cascade>
			<Link to='grid' spy={true} smooth={true}>
				<div
					style={{ height: '90vh' }}
					className=' cursor-pointer	w-full white justify-center items-center'
				>
					<h1 className='text-5xl hover:text-pink-600 text-center font-black lg:text-8xl lg:pt-24 md:text-6xl md:pt-20 '>
						Buy Yours
					</h1>
					<div className='hover:text-pink-600 text-center	transition duration-300 ease-in-out animate-bounce'>
						{element}
					</div>
				</div>
			</Link>
		</Fade>
	);
};

export default Hero;

/*
				<Link to='/grid'>
					<h1 className='text-5xl hover:text-pink-600 text-center font-black lg:text-8xl lg:pt-24 md:text-6xl md:pt-20 '>
						Buy Yours
					</h1>
					<div className='hover:text-pink-600 text-center	transition duration-300 ease-in-out animate-bounce'>
						{element}
					</div>
				</Link>
*/
