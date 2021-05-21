import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Contact = () => {
	const [state, setState] = useState({
		name: '',
		lastname: '',
		email: '',
		text: '',
	});
	const [isVisible, setIsVisible] = useState(true);

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const submitting = () => {
		console.log(state);
		setIsVisible(false);
		setState({
			name: '',
			lastname: '',
			email: '',
			text: '',
		});
	};

	return (
		<Fade bottom>
			<div
				id='contact'
				className='mt-4 justify-center items-center overflow-auto'
			>
				<div className='rounded m-4 mt-3 p-4 bg-pink-400 sm:p-5 md:w-2/4 md:m-auto md:mt-10 lg:w-2/4'>
					<h3 className='font-black text-4xl text-white text-center'>
						Contact
					</h3>
					{isVisible ? (
						<form onSubmit={submitting} className='m-6 pr-4'>
							<input
								name='name'
								value={state.name}
								onChange={handleChange}
								className='w-full focus:outline-none m-2 h-8 rounded p-2'
								placeholder='Name'
								type='text'
							></input>
							<input
								name='lastname'
								type='text'
								onChange={handleChange}
								className='w-full focus:outline-none m-2 h-8 rounded p-2'
								placeholder='Lastname'
							></input>
							<input
								name='email'
								type='email'
								onChange={handleChange}
								className='w-full focus:outline-none m-2 h-8 rounded p-2'
								placeholder='Email'
							></input>
							<textarea
								name='text'
								type='text'
								onChange={handleChange}
								className='focus:outline-none m-2 p-2 w-full rounded'
								placeholder='Message'
							></textarea>
							<button className='focus:outline-none flex m-auto py-1 px-4 my-10 bg-white hover:shadow-md hover:bg-black hover:text-white text-black font-bold rounded-full shadow-xl '>
								Send
							</button>
						</form>
					) : (
						<div className=' h-60 '>
							<h3 className='text-2xl font-black text-center text-white pt-16'>
								Thanks! Your message was sent!
							</h3>
							<Link to='/grid'>
								<button className='m-auto flex focus:outline-none my-10 bg-white hover:shadow-md hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full shadow-xl'>
									Continue Shopping
								</button>
							</Link>{' '}
						</div>
					)}
				</div>
			</div>
		</Fade>
	);
};

export default Contact;
