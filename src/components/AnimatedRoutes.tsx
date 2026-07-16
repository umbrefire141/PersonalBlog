import Layout from '@/layouts/layout/Layout';
import { routes } from '@/routers/router';
import { AnimatePresence } from 'motion/react';
import { Route, Routes, useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route element={<Layout />}>
					{routes.map(route => (
						<Route path={route.path} element={route.element} />
					))}
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
