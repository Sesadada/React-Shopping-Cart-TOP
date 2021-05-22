import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import products from '../assets/products';

const Hero = ({ isOpen, toggle }) => {
	const element = <FontAwesomeIcon icon={faArrowDown} size='3x' />;

	return (
		<Fade top cascade>
			<Link to='grid' spy={true} smooth={true}>
				<div
					onClick={isOpen ? toggle : undefined}
					className='h-screen w-full relative justify-center items-center'
				>
					<div className='z-50 absolute m-auto text-center w-full'>
						<h3 className='hidden font-light text-3xl md:text-2xl md:pt-36 md:text-center md:block md:text-black lg:text-4xl md:text-black'>
							Tote Bags & Tea Towels made with a spell
						</h3>

						<h1 className=' cursor-pointer text-5xl pt-16 text-black hover:text-pink-600 text-center font-black sm:pt-28 md:text-6xl md:pt-0 lg:text-9xl lg:pt-0 lg:mt-0 '>
							Buy Yours
						</h1>
						<div className='cursor-pointer hover:text-pink-600 text-black text-center	transition duration-300 ease-in-out animate-bounce'>
							{element}
						</div>
					</div>
					<img
						src={products[0].image}
						alt={products[0].name}
						className='w-full h-screen object-cover'
					/>
				</div>
			</Link>
		</Fade>
	);
};

export default Hero;

/*
				<div
					onClick={isOpen ? toggle : undefined}
					style={{ height: '90vh', backgroundImage: `url(${bg})` }}
					className='	w-full white justify-center items-center bg-cover bg-no-repeat'
        >
*/
