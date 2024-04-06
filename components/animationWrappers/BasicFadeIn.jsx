'use client';

import { motion } from 'framer-motion';

const BasicFadeIn = ({ children, delay, duration, direction }) => {
	const itemMain = {
		hidden: {
			down: { opacity: 0, y: '50px', pointerEvents: 'none' },
			up: { opacity: 0, y: '-50px', pointerEvents: 'none' },
			left: { opacity: 0, x: '-50px', pointerEvents: 'none' },
			right: { opacity: 0, x: '50px', pointerEvents: 'none' },
		},
		show: {
			opacity: 1,
			y: 0,
			x: 0,
			pointerEvents: 'auto',
			transition: {
				duration: duration || 1,
				ease: [0.6, 0.01, 0, 0.95],
				delay: delay || 0,
			},
		},
		viewport: {
			once: true,
		},
	};

	return (
		<motion.div
			initial={itemMain.hidden[direction]}
			whileInView={itemMain.show}
			viewport={itemMain.viewport}
			className='flex-1 w-full h-full'>
			{children}
		</motion.div>
	);
};

export default BasicFadeIn;
