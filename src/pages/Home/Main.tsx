import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Main = () => {
	return (
		<section className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 pt-28">
			<div className="max-w-6xl">
				<p
					className="text-xs tracking-[0.35em] uppercase mb-8 opacity-60"
					style={{ fontFamily: "'DM Sans', sans-serif" }}
				>
					Creative Direction & Visual Design
				</p>

				<h1
					className="font-extrabold leading-none mb-8 text-[clamp(3.5rem,12vw,10rem)]"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					<span className="block">ANA</span>
					<span
						className="block"
						style={{
							WebkitTextStroke: '2px #7c3aed',
							color: 'transparent',
						}}
					>
						VÁSQUEZ
					</span>
				</h1>

				<div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16">
					<p
						className="text-base md:text-lg max-w-sm leading-relaxed"
						style={{ color: '#8b7fb8' }}
					>
						Visual artist and art director based in Berlin. Obsessed with the
						tension between structure and decay.
					</p>
					<Link
						to="/gallery"
						className="group flex items-center gap-3 text-sm tracking-widest uppercase font-semibold border border-violet-600 px-6 py-4 hover:bg-violet-600 transition-all duration-300"
					>
						View Work
						<ArrowRight
							size={16}
							className="group-hover:translate-x-1 transition-transform duration-200"
						/>
					</Link>
				</div>
			</div>

			{/* Floating accent lines */}
			<div
				className="absolute right-0 top-1/3 w-px h-40 opacity-30"
				style={{
					background:
						'linear-gradient(to bottom, transparent, #dc2626, transparent)',
				}}
			/>
			<div
				className="absolute right-16 top-1/4 w-px h-24 opacity-20"
				style={{
					background:
						'linear-gradient(to bottom, transparent, #2563eb, transparent)',
				}}
			/>
		</section>
	);
};

export default Main;
