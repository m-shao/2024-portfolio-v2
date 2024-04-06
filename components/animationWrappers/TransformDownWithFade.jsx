import { motion } from 'framer-motion';

const TransformDownWithFade = ({ children, delay }) => {
	const duration = 0.6;
	const itemMain = {
		hidden: { transform: 'translateY(-100%)', opacity: '0%' },
		show: { transform: 'translateY(0)', opacity: '100%' },
		transition: {
			ease: [0.6, 0.01, 0, 0.95],
			delay: delay,
			duration: duration,
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

export default TransformDownWithFade;
