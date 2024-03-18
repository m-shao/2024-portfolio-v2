import { motion } from 'framer-motion';

const OnLoadFadeIn = ({ children, delay }) => {
	const itemMain = {
		hidden: { opacity: 0, y: 200, pointerEvents: 'none' },
		show: {
			opacity: 1,
			y: 0,
			pointerEvents: 'auto',
		},
		transition: {
			duration: 2,
			ease: [0.6, 0.01, 0, 0.95],
			delay: delay,
		},
	};
	return (
		<motion.div
			initial={itemMain.hidden}
			animate={itemMain.show}
			transition={itemMain.transition}
			className='pointer-events-auto'>
			{children}
		</motion.div>
	);
};

export default OnLoadFadeIn;
