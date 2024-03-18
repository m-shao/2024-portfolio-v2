import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero.jsx';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden'>
			<Navbar />
			<Hero />
		</div>
	);
}
