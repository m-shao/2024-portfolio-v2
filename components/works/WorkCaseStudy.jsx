'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import BasicFadeIn from '../animationWrappers/BasicFadeIn';
import OverflowReveal from '../animationWrappers/OverflowReveal';

import Back from '@/assets/utils/Back';

const WorkCaseStudy = ({
	project,
	index,
	selected,
	prevSelected,
	setSelectedWork,
}) => {
	return (
		<>
			<div className='w-full h-auto opacity-0'>
				<Image
					className='w-full h-full'
					src={project.image}
					alt={project.name + ' project banner'}
				/>
			</div>
			<motion.div
				layoutId={project.name + '-outer-container'}
				transition={{
					duration: 1,
					ease: [0.6, 0.01, 0, 0.95],
				}}
				className={
					'flex flex-col w-screen min-h-[100vh] absolute top-0 left-0 font-sans group cursor-pointer ' +
					(prevSelected ? 'z-30' : 'z-20')
				}
				style={{
					backgroundColor: project.bg,
					color: project.text,
				}}>
				<div className='flex flex-col w-screen h-screen'>
					<div className='flex flex-col flex-1 w-screen'>
						<nav className='flex items-center justify-between w-full h-auto px-8 py-4 md:px-12'>
							<div>
								<BasicFadeIn delay={1} direction={'up'}>
									<div
										className='w-10 h-10 lg:w-12 lg:h-12'
										onClick={() => setSelectedWork(-1)}>
										<Back />
									</div>
								</BasicFadeIn>
							</div>
							<div>
								<BasicFadeIn delay={1} direction={'up'}>
									<Image
										alt={project.name + ' project logo'}
										src={project.logo}
										className='w-16 h-16 md:w-24 md:h-24'
									/>
								</BasicFadeIn>
							</div>
						</nav>
						<div className='flex flex-col flex-1 gap-2 px-12 md:px-24 lg:px-36'>
							<OverflowReveal delay={1.5}>
								<h2 className='font-bold font-[englisch]'>
									Mission Statement
								</h2>
							</OverflowReveal>
							<BasicFadeIn delay={1.5} direction='left'>
								<p className='max-w-[50ch] leading-7'>
									{project.description2}
								</p>
							</BasicFadeIn>
						</div>
					</div>
					<motion.div
						className='w-full h-auto py-2'
						layoutId={project.name + '-inner-image'}
						transition={{
							duration: 1,
							ease: [0.6, 0.01, 0, 0.95],
						}}>
						<Image
							className='w-full h-full'
							src={project.image}
							alt={project.name + ' project banner'}
						/>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default WorkCaseStudy;
