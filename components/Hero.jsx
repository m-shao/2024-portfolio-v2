import Image from 'next/image';

import headshot from '@/assets/headshot.png';

import BasicFadeIn from '@/components/animationWrappers/BasicFadeIn';

const Hero = () => {
	return (
		<section className='w-full pb-8 border-b-2 border-zinc-800'>
			<div className='flex justify-between w-full'>
				<BasicFadeIn direction={'left'} delay={0.2}>
					<div className='flex flex-col gap-3'>
						<h1 className='text-left'>
							Minglun <br /> Shao
						</h1>
						<p className='font-normal max-w-[34ch]'>
							I’m a fullstack devloper who works creatively,
							efficiently and with intention. Check out some of my
							work and feel free to contact me with
							question/concerns. I used Arial on my website
							because I thought it would be funny.
						</p>
					</div>
				</BasicFadeIn>
				<BasicFadeIn direction={'up'} delay={0.5}>
					<div className='flex justify-end flex-1 h-auto'>
						<div className='w-[80%]'>
							<Image
								className='w-full'
								src={headshot}
								alt='Minglun Shao headshot with white background'
							/>
						</div>
					</div>
				</BasicFadeIn>
			</div>
		</section>
	);
};

export default Hero;
