'use client';

import { useState, useEffect } from 'react';

import { projects } from '@/config/projects';

import Work from './Work';
import WorkCaseStudy from './WorkCaseStudy';
import OverflowReveal from '@/components/animationWrappers/OverflowReveal';
import BasicFadeIn from '@/components/animationWrappers/BasicFadeIn';

const Works = () => {
	const [selectedWork, setSelectedWork] = useState(-1);
	const [prevSelectedWork, setPrevSelectedWork] = useState(-1);

	useEffect(() => {
		if (selectedWork !== -1) {
			setPrevSelectedWork(selectedWork);
		}
	}, [selectedWork]);

	return (
		<section className='flex flex-col gap-8 pt-8'>
			<OverflowReveal delay={1}>
				<h2>Works</h2>
			</OverflowReveal>
			<div className='flex flex-col gap-8'>
				{projects.map((project, index) => (
					<BasicFadeIn
						key={index}
						direction={'left'}
						delay={1.5 + index * 0.1}>
						{selectedWork === index ? (
							<WorkCaseStudy
								project={project}
								index={index}
								selected={selectedWork === index}
								prevSelected={prevSelectedWork === index}
								setSelectedWork={setSelectedWork}
							/>
						) : (
							<Work
								project={project}
								index={index}
								selected={selectedWork === index}
								prevSelected={prevSelectedWork === index}
								setSelectedWork={setSelectedWork}
							/>
						)}
					</BasicFadeIn>
				))}
			</div>
		</section>
	);
};

export default Works;
