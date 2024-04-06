import Hero from '@/components/Hero';
import Works from '@/components/works/Works';
import Experiences from '@/components/experiences/Experiences';
import About from '@/components/About';

export default function Home() {
	return (
		<div className='flex items-start justify-center w-screen px-6 py-12 text-white bg-zinc-900'>
			<main className='w-full max-w-[40rem]'>
				<Hero />
				<Works />
				<Experiences />
				<About />
			</main>
		</div>
	);
}
