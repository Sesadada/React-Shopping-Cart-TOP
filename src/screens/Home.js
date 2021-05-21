import Grid from '../components/Grid';
import Hero from '../components/Hero';
const Home = ({ toggle, isOpen }) => {
	return (
		<>
			<Hero toggle={toggle} isOpen={isOpen} />
			<Grid />
		</>
	);
};

export default Home;
