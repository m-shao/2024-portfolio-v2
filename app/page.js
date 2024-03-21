'use client';

import React from 'react';

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero.jsx';
import ProjectCard from '@/components/ProjectCard';

import { projects } from '@/config/projects';

import TransformDownWithFade from '@/components/animationWrappers/TransformDownWithFade';

export default function Home() {
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
						<React.Fragment key={index}>
							<ProjectCard project={project} />
						</React.Fragment>
					))}
				</div>
			</section>
		</div>
	);
}
