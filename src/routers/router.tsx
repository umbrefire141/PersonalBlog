import AboutPage from '@/pages/About';
import GalleryPage from '@/pages/Gallery';
import HomePage from '@/pages/Home';

export const routes = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/gallery',
		element: <GalleryPage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
];
