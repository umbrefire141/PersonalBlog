import { useAuth } from '@/contexts/auth/AuthContext';
import { LogOut, PenSquare, UserCog } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

type Page = '/' | '/gallery' | '/about' | '/auth' | '/create-post' | '/edit-profile';

const NAV_ITEMS: { label: string; page: Page }[] = [
	{ label: 'Home', page: '/' },
	{ label: 'Gallery', page: '/gallery' },
	{ label: 'About', page: '/about' },
];

const MotionLink = motion.create(Link);

const variants = {
	hidden: { opacity: 0, x: 0, y: -20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -20 },
};

const Layout = () => {
	const [page, setPage] = useState<Page>('/');
	const [menuOpen, setMenuOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const { isAuthenticated, user, signOut } = useAuth();

	useEffect(() => {
		if (location.pathname !== page) {
			setPage(location.pathname);
		}
	}, []);

	const handlePageChange = (p: Page) => {
		setMenuOpen(false);
		window.scrollTo(0, 0);
	};

	console.log(page);
	console.log(location);

	return (
		<div
			ref={containerRef}
			className="min-h-screen w-full overflow-x-hidden"
			style={{
				fontFamily: "'DM Sans', sans-serif",
				background: '#08080f',
				color: '#f0eef8',
			}}
		>
			{/* Ambient background blobs */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
				<div
					className="absolute rounded-full blur-[120px] opacity-20"
					style={{
						width: 600,
						height: 600,
						background: '#7c3aed',
						top: '-10%',
						left: '-15%',
					}}
				/>
				<div
					className="absolute rounded-full blur-[100px] opacity-15"
					style={{
						width: 400,
						height: 400,
						background: '#2563eb',
						bottom: '10%',
						right: '5%',
					}}
				/>
				<div
					className="absolute rounded-full blur-[80px] opacity-10"
					style={{
						width: 300,
						height: 300,
						background: '#dc2626',
						top: '50%',
						left: '60%',
					}}
				/>
			</div>

			{/* Nav */}
			<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
				<Link
					to="/"
					className="text-sm tracking-[0.2em] uppercase font-semibold hover:text-violet-400 transition-colors duration-200"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
					onClick={() => handlePageChange('/')}
				>
					AV
				</Link>

				<nav className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map(({ label, page: p }) => (
						<Link
							key={p}
							to={p}
							className="text-sm tracking-widest uppercase transition-all duration-200 relative group"
							style={{ color: location.pathname === p ? '#c4b5fd' : '#8b7fb8' }}
							onClick={() => handlePageChange(p)}
						>
							{label}
							<span
								className="absolute -bottom-1 left-0 h-px transition-all duration-200"
								style={{
									width: location.pathname === p ? '100%' : '0%',
									background: '#7c3aed',
								}}
							/>
						</Link>
					))}
					{isAuthenticated && (
						<Link
							to="/create-post"
							className="text-sm tracking-widest uppercase transition-all duration-200 relative group"
							style={{
								color:
									location.pathname === '/create-post' ? '#c4b5fd' : '#8b7fb8',
							}}
							onClick={() => handlePageChange('/create-post')}
						>
							<PenSquare size={14} className="inline mr-1" />
							Create
							<span
								className="absolute -bottom-1 left-0 h-px transition-all duration-200"
								style={{
									width: location.pathname === '/create-post' ? '100%' : '0%',
									background: '#7c3aed',
								}}
							/>
						</Link>
					)}
					{isAuthenticated && (
						<Link
							to="/edit-profile"
							className="text-sm tracking-widest uppercase transition-all duration-200 relative group"
							style={{ color: location.pathname === '/edit-profile' ? '#c4b5fd' : '#8b7fb8' }}
							onClick={() => handlePageChange('/edit-profile')}
						>
							<UserCog size={14} className="inline mr-1" />
							Profile
							<span
								className="absolute -bottom-1 left-0 h-px transition-all duration-200"
								style={{
									width: location.pathname === '/edit-profile' ? '100%' : '0%',
									background: '#7c3aed',
								}}
							/>
						</Link>
					)}
					{isAuthenticated && (
						<button
							onClick={signOut}
							className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-destructive transition-colors duration-200 cursor-pointer"
						>
							<LogOut size={14} />
							logout
						</button>
					)}
				</nav>

				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="md:hidden flex flex-col gap-1.5 cursor-pointer"
				>
					<span
						className="block w-6 h-px bg-violet-400 transition-all duration-200"
						style={{
							transform: menuOpen ? 'rotate(45deg) translate(3px,4px)' : 'none',
						}}
					/>
					<span
						className="block w-4 h-px bg-violet-400 transition-all duration-200"
						style={{ opacity: menuOpen ? 0 : 1 }}
					/>
					<span
						className="block w-6 h-px bg-violet-400 transition-all duration-200"
						style={{
							transform: menuOpen
								? 'rotate(-45deg) translate(3px,-4px)'
								: 'none',
						}}
					/>
				</button>
			</header>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-0 z-40 flex flex-col items-center justify-center"
						style={{ background: 'rgba(8,8,15,0.97)' }}
					>
						{NAV_ITEMS.map(({ label, page: p }, i) => (
							<MotionLink
								key={p}
								to={p}
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: i * 0.08 }}
								onClick={() => handlePageChange(p)}
								className="text-5xl font-bold mb-6 hover:text-violet-400 transition-colors duration-200"
								style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
							>
								{label}
							</MotionLink>
						))}
						{isAuthenticated && (
							<MotionLink
								key="create"
								to="/create-post"
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: NAV_ITEMS.length * 0.08 }}
								onClick={() => handlePageChange('/create-post')}
								className="flex items-center gap-3 text-3xl font-bold mb-6 text-violet-400 hover:text-violet-300 transition-colors duration-200"
								style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
							>
								<PenSquare size={24} />
								Create
							</MotionLink>
						)}
						{isAuthenticated && (
							<MotionLink
								key="edit-profile"
								to="/edit-profile"
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: (NAV_ITEMS.length + 1) * 0.08 }}
								onClick={() => handlePageChange('/edit-profile')}
								className="flex items-center gap-3 text-3xl font-bold mb-6 text-violet-400 hover:text-violet-300 transition-colors duration-200"
								style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
							>
								<UserCog size={24} />
								Profile
							</MotionLink>
						)}
						{isAuthenticated ? (
							<MotionLink
								to="/"
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: (NAV_ITEMS.length + (isAuthenticated ? 2 : 0)) * 0.08,
								}}
								onClick={() => {
									signOut();
									handlePageChange('/');
								}}
								className="flex items-center gap-3 text-2xl font-bold mt-4 text-muted-foreground hover:text-destructive transition-colors duration-200"
							>
								<LogOut size={20} />
								Sign Out
							</MotionLink>
						) : (
							<MotionLink
								to="/auth"
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: NAV_ITEMS.length * 0.08 }}
								onClick={() => handlePageChange('/auth')}
								className="text-5xl font-bold mb-6 hover:text-violet-400 transition-colors duration-200"
								style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
							>
								Auth
							</MotionLink>
						)}
					</motion.div>
				)}
			</AnimatePresence>

			<motion.main
				key={location.pathname}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className="relative z-10"
			>
				<Outlet />
			</motion.main>

			<style>{`
							html { scrollbar-width: none; }
							::-webkit-scrollbar { display: none; }
							* { scrollbar-width: none; }
						`}</style>
		</div>
	);
};

export default Layout;
