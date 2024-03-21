'use client';

import { motion } from 'framer-motion';

const BasicFadeIn = ({ children, delay, direction }) => {
	const itemMain = {
		hidden: {
			down: { opacity: 0, y: '20%', pointerEvents: 'none' },
			up: { opacity: 0, y: '-20%', pointerEvents: 'none' },
			left: { opacity: 0, x: '-20%', pointerEvents: 'none' },
			right: { opacity: 0, x: '20%', pointerEvents: 'none' },
		},
		show: {
			opacity: 1,
			y: 0,
			x: 0,
			pointerEvents: 'auto',
		},
		transition: {
			duration: 1,
			ease: [0.6, 0.01, 0, 0.95],
			delay: delay || 0,
		},
	};

	return (
		<motion.div
			initial={itemMain.hidden[direction]}
			whileInView={itemMain.show}
			transition={itemMain.transition}>
			{children}
		</motion.div>
	);
};

export default BasicFadeIn;
