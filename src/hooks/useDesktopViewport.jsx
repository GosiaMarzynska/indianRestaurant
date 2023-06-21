import React from 'react';
import { useScrollbarWidth } from './useScrollbarWidth';

export default function useDesktopViewport() {
	const scrollBarWidth = useScrollbarWidth();

	const [width, setWidth] = React.useState(document.getElementById('width').clientWidth - scrollBarWidth -1);

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(document.getElementById('width').clientWidth -1);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return width;
}
