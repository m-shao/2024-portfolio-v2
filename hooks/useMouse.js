'use client';

import { useState, useEffect } from 'react';
const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const updateMousePosition = (ev) => {
		setMousePosition({ x: ev.clientX, y: ev.clientY });
	};

	useEffect(() => {
		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, [setMousePosition]);

	return mousePosition;
};
export default useMousePosition;
