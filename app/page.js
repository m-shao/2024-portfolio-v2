'use client';

import React from 'react';
import Image from 'next/image';

import headshot from '@/assets/headshot.png';
import { projects } from '@/config/projects';
import { experience } from '@/config/experience';

export default function Home() {
	return (
		<div className='flex items-start justify-center w-screen px-6 py-12 text-white bg-zinc-900'>
			<main className='w-full max-w-[40rem]'>
				<section className='w-full pb-8 border-b-2 border-zinc-800'>
					<div className='flex justify-between w-full'>
						<div className='flex flex-col gap-3'>
							<h1 className='text-6xl font-bold text-left'>
								Minglun <br /> Shao
							</h1>
							<p className='font-normal max-w-[34ch]'>
								I’m a fullstack devloper who works creatively,
								efficiently and with intention. Check out some
								of my work. I used Arial on my website because I
								thought it would be funny.
							</p>
						</div>
						<div className='w-[40%] h-auto'>
							<Image
								className='w-full'
								src={headshot}
								alt='Minglun Shao headshot with white background'
							/>
						</div>
					</div>
				</section>
				<section className='flex flex-col gap-8 pt-8'>
					<h2>Works</h2>
					<div className='flex flex-col gap-8'>
						{projects.map((project, index) => (
							<div
								className='flex flex-col w-full font-sans bg-white group'
								key={index}
								style={{
									backgroundColor: project.bg,
									color: project.text,
								}}>
								<Image
									className='w-full'
									src={project.image}
									alt={project.name + ' project banner'}
								/>
								<div className='grid grid-rows-[0fr] transition-all group-hover:grid-rows-[1fr] duration-500 origin-bottom'>
									<div className='overflow-hidden'>
										<div className='flex flex-col gap-4 px-8 py-4'>
											<div>
												<p>{project.description}</p>
											</div>
											<div className='flex flex-wrap gap-2'>
												{project.tech.map(
													(tech, index) => (
														<span
															key={index}
															className='px-8 py-2 border-2 text-md'
															style={{
																background:
																	project.bg,
															}}>
															{tech}
														</span>
													)
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className='flex flex-col gap-8 pt-16'>
					<h2>Experience</h2>
					<div className='flex flex-col gap-8'>
						{experience.map((project, index) => (
							<div
								key={index}
								style={{ backgroundColor: project.bg }}
								className='flex gap-4'>
								<div className='flex items-center justify-center w-[4rem] h-[4rem]'>
									<Image
										className='h-full'
										src={project.image}
										alt={project.name + ' logo'}
									/>
								</div>
								<div>
									<h3>{project.company}</h3>
									<p>{project.role}</p>
									<p className='text-zinc-300'>
										{project.date}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className='flex flex-col gap-8 pt-16'>
					<h2>About Me</h2>
					<div>
						<p>
							I’m a Chinese Canadian university student living
							(near) 11° Toronto ON Canada. Other than programming
							I like playing video games, building keyboards and
							art & crafts. I run off of a really old pc that I
							got from my cousin that surprising still works. Here
							are some more fun facts for those interested 😄.
						</p>
					</div>
					<ul className='flex flex-col gap-4'>
						<li>🎬 (Re)Watching: Haikyuu!!</li>
						<li>📂 Working on: This website</li>
						<li>⌨️ Current obsession: Keyboards</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
