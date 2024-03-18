import { motion } from 'framer-motion';

const OnLoadFadeIn = ({ children, delay }) => {
	const itemMain = {
		hidden: { opacity: 0, y: 200 },
		show: {
			opacity: 1,
			y: 0,
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
			transition={itemMain.transition}>
			{children}
		</motion.div>
	);
};

export default OnLoadFadeIn;
