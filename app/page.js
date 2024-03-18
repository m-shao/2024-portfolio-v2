'use client';

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero.jsx';

import TransformDownWithFade from '@/components/animationWrappers/TransformDownWithFade';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden'>
			<TransformDownWithFade delay={3}>
				<Navbar />
			</TransformDownWithFade>
			<Hero />
		</div>
	);
}
