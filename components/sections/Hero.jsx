'use client';
import { useState, useEffect, useRef } from 'react';

import useMousePosition from '@/hooks/useMouse';

import OverflowReveal from '@/components/animationWrappers/OverflowReveal';
import OnLoadFadeIn from '@/components/animationWrappers/OnLoadFadeIn';

import { motion } from 'framer-motion';

const Hero = () => {
	const [boundingBox, setBoundingBox] = useState({ x: 0, y: 0 });

	const divRefs = useRef([
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	]);
	const [center, setCenter] = useState([
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
	]);
	const [divOffsets, setDivOffsets] = useState([
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
	]);

	const { x, y } = useMousePosition();

	useEffect(() => {
		const updateCenter = () => {
			if (divRefs.current) {
				const centerArray = [{}, {}, {}, {}];

				for (let i = 0; i < 4; i++) {
					let { left, top, width, height } =
						divRefs.current[i].current.getBoundingClientRect();
					let centerX = left + width / 2;
					let centerY = top + height / 2;
					centerArray[i] = { x: centerX, y: centerY };
				}

				setCenter(centerArray);
			}
			setBoundingBox({
				x: window.innerWidth * 0.5,
				y: window.innerHeight * 0.5,
			});
		};

		updateCenter(); // Initial update

		window.addEventListener('resize', updateCenter);

		return () => {
			window.removeEventListener('resize', updateCenter);
		};
	}, []);

	useEffect(() => {
		const offsetValues = [40, 20, 30, 40];
		const divOffsetsArray = [{}, {}, {}, {}];
		for (let i = 0; i < 4; i++) {
			divOffsetsArray[i] = {
				x:
					Math.min((center[i].x - x) / boundingBox.x, 1) *
					-offsetValues[i],
				y:
					Math.min((center[i].y - y) / boundingBox.y, 1) *
					-offsetValues[i],
			};
		}

		setDivOffsets(divOffsetsArray);
	}, [x, y, boundingBox, center]);

	return (
		<main className='flex items-center justify-center flex-1 w-full h-full pb-64'>
			<div className='text-[11rem] relative'>
				<div
					ref={divRefs.current[0]}
					className='w-48 h-56 md:w-60 md:h-72 absolute top-32 left-[5rem] md:top-48 md:left-[7rem]'></div>
				<OnLoadFadeIn delay={0.25}>
					<div
						className='w-48 h-56 md:w-60 md:h-72 absolute top-32 left-[5rem] md:top-48 md:left-[7rem] group'
						style={{
							transform: `translate(${divOffsets[0].x}px,${divOffsets[0].y}px)`,
						}}>
						<div
							className='w-full h-full transition-all duration-500 group-hover:rotate-y-180'
							style={{ transformStyle: 'preserve-3d' }}>
							<div className='w-full h-full bg-red-200'></div>
							<div
								className='w-full h-full -translate-y-full bg-primary'
								style={{ backfaceVisibility: 'hidden' }}></div>
						</div>
					</div>
				</OnLoadFadeIn>
				<div
					ref={divRefs.current[1]}
					className='w-48 h-56 md:w-60 md:h-72 absolute top-7 left-[10rem] md:left-[14rem] md:top-14'></div>
				<OnLoadFadeIn delay={1}>
					<div
						className='w-48 h-56 md:w-60 md:h-72 absolute top-7 left-[10rem] md:left-[14rem] md:top-14 group'
						style={{
							transform: `translate(${divOffsets[1].x}px,${divOffsets[1].y}px)`,
						}}>
						<div
							className='w-full h-full transition-all duration-500 group-hover:rotate-y-180'
							style={{ transformStyle: 'preserve-3d' }}>
							<div className='w-full h-full bg-red-200'></div>
							<div
								className='w-full h-full -translate-y-full bg-accent-100'
								style={{ backfaceVisibility: 'hidden' }}></div>
						</div>
					</div>
				</OnLoadFadeIn>
				<div
					ref={divRefs.current[2]}
					className='w-36 h-48 md:w-52 md:h-64 absolute left-[20rem] top-28 md:left-[26rem] md:top-48'></div>
				<OnLoadFadeIn delay={0.75}>
					<div
						className='w-36 h-48 md:w-52 md:h-64 absolute left-[20rem] top-28 md:left-[26rem] md:top-48 group'
						style={{
							transform: `translate(${divOffsets[2].x}px,${divOffsets[2].y}px)`,
						}}>
						<div
							className='w-full h-full transition-all duration-500 group-hover:rotate-y-180'
							style={{ transformStyle: 'preserve-3d' }}>
							<div className='w-full h-full bg-red-200'></div>
							<div
								className='w-full h-full -translate-y-full bg-accent-200'
								style={{ backfaceVisibility: 'hidden' }}></div>
						</div>
					</div>
				</OnLoadFadeIn>
				<div
					ref={divRefs.current[3]}
					className='w-36 h-44 md:w-48 md:h-56 absolute left-[26rem] top-20 md:left-[34rem] md:top-32'></div>
				<OnLoadFadeIn delay={0.5}>
					<div
						className='w-36 h-44 md:w-48 md:h-56 absolute left-[26rem] top-20 md:left-[34rem] md:top-32 group'
						style={{
							transform: `translate(${divOffsets[3].x}px,${divOffsets[3].y}px)`,
						}}>
						<div
							className='w-full h-full transition-all duration-500 group-hover:rotate-y-180'
							style={{ transformStyle: 'preserve-3d' }}>
							<div className='w-full h-full bg-red-200'></div>
							<div
								className='w-full h-full -translate-y-full bg-background-200'
								style={{ backfaceVisibility: 'hidden' }}></div>
						</div>
					</div>
				</OnLoadFadeIn>
				<div className='text-center text-[6rem] md:text-[9rem] font-englisch font-extrabold leading-[91%] tracking-tight relative pointer-events-none'>
					<OverflowReveal delay={2.25}>
						<h1>Hello I&#8217;m</h1>
					</OverflowReveal>
					<OverflowReveal delay={2.4}>
						<h1>Minglun Shao</h1>
					</OverflowReveal>
				</div>
			</div>
		</main>
	);
};

export default Hero;
