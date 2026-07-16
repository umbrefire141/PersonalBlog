import AboutPage from '@/pages/About/About';
import AuthPage from '@/pages/Auth/Auth';
import CreatePostPage from '@/pages/CreatePost/CreatePost';
import EditProfilePage from '@/pages/EditProfile/EditProfile';
import GalleryPage from '@/pages/Gallery/Gallery';
import HomePage from '@/pages/Home/Home';

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
	{
		path: '/auth',
		element: <AuthPage />,
	},
	{
		path: '/create-post',
		element: <CreatePostPage />,
	},
	{
		path: '/edit-profile',
		element: <EditProfilePage />,
	},
];
