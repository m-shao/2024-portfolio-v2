'use client';

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero.jsx';
import Image from 'next/image';

import { projects } from '@/config/projects';

import TransformDownWithFade from '@/components/animationWrappers/TransformDownWithFade';

export default function Home() {
	const colourRotation = ['bg-primary', 'bg-accent-200', 'bg-accent-100'];

	return (
		<div className='w-screen overflow-x-hidden'>
			<section className='flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden'>
				<TransformDownWithFade delay={3}>
					<Navbar />
				</TransformDownWithFade>
				<Hero />
			</section>
			<section className='flex flex-col items-center w-screen gap-12 py-64'>
				<h1>Projects</h1>
				<div className='flex flex-col justify-center w-3/4 max-w-4xl gap-12'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='flex items-center flex-col md:flex-row w-full gap-8 px-4 py-4 bg-background-200 hover:scale-[101%] transition-transform duration-500'>
							<div className='flex flex-col items-start flex-1 h-full gap-4'>
								<h2 className='text-center md:text-left'>
									{project.name}
								</h2>
								<div className='flex flex-wrap justify-center gap-2 md:justify-start md:gap-4'>
									{project.tech.map((tech, index) => (
										<div
											key={index}
											className={
												'px-4 py-2 font-sans text-white ' +
												colourRotation[index % 3]
											}>
											{tech}
										</div>
									))}
								</div>
							</div>
							<div className='flex items-center justify-center w-48 h-48 p-3 border-4 bg-background-100 border-primary'>
								<Image
									className='w-full h-full'
									src={project.image}
									alt={project.name}
								/>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
