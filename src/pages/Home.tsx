import { WORKS } from '@/consts/const';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<div className="min-h-screen">
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
			<div
				className="border-y overflow-hidden py-4"
				style={{ borderColor: 'rgba(124,58,237,0.2)' }}
			>
				<div
					className="flex gap-12 whitespace-nowrap text-sm tracking-widest uppercase opacity-40"
					style={{
						animation: 'marquee 18s linear infinite',
					}}
				>
					{Array.from({ length: 3 }).flatMap(() =>
						[
							'Digital Art',
							'Photography',
							'Motion Design',
							'Art Direction',
							'Visual Identity',
							'Berlin',
						].map((t, i) => (
							<span
								key={Math.random()}
								style={{
									color:
										i % 3 === 0
											? '#7c3aed'
											: i % 3 === 1
												? '#2563eb'
												: '#dc2626',
								}}
							>
								{t} ·
							</span>
						)),
					)}
				</div>
			</div>
			<section className="px-8 md:px-16 py-24">
				<div className="flex items-center justify-between mb-12">
					<h2
						className="text-3xl md:text-4xl font-bold"
						style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
					>
						Selected Works
					</h2>
					<Link
						to="/gallery"
						className="text-sm tracking-widest uppercase opacity-60 hover:opacity-100 hover:text-violet-400 transition-all duration-200 flex items-center gap-2"
					>
						All Works <ArrowRight size={14} />
					</Link>
				</div>

				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-px"
					style={{ background: 'rgba(124,58,237,0.15)' }}
				>
					{WORKS.slice(0, 3).map(work => (
						<FeaturedCard key={work.id} work={work} to="gallery" />
					))}
				</div>
			</section>
			<section className="px-8 md:px-16 pb-24 grid grid-cols-2 md:grid-cols-4 gap-8">
				{[
					{ n: '7+', label: 'Years Active' },
					{ n: '140+', label: 'Projects' },
					{ n: '38', label: 'Clients' },
					{ n: '12', label: 'Awards' },
				].map(({ n, label }) => (
					<div
						key={label}
						className="border-t pt-6"
						style={{ borderColor: 'rgba(124,58,237,0.25)' }}
					>
						<p
							className="text-4xl md:text-5xl font-extrabold mb-1"
							style={{
								fontFamily: "'Bricolage Grotesque', sans-serif",
								color: '#c4b5fd',
							}}
						>
							{n}
						</p>
						<p className="text-xs tracking-widest uppercase opacity-50">
							{label}
						</p>
					</div>
				))}
			</section>
			<style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
		</div>
	);
}

function FeaturedCard({ work, to }: { work: (typeof WORKS)[0]; to: string }) {
	const [hovered, setHovered] = useState(false);
	return (
		<Link
			to={to}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="relative overflow-hidden text-left"
			style={{ background: '#08080f', aspectRatio: '4/3' }}
		>
			<img
				src={work.image}
				alt={work.title}
				className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
				style={{ transform: hovered ? 'scale(1.08)' : 'scale(1.0)' }}
			/>
			<div
				className="absolute inset-0 transition-opacity duration-300"
				style={{
					background: `linear-gradient(to top, rgba(8,8,15,0.9) 0%, rgba(8,8,15,0.2) 60%, transparent 100%)`,
				}}
			/>
			<div className="absolute inset-0 flex flex-col justify-end p-6">
				<p
					className="text-xs tracking-widest uppercase mb-2 opacity-70"
					style={{ color: work.color }}
				>
					{work.category}
				</p>
				<h3
					className="text-xl font-bold"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					{work.title}
				</h3>
			</div>
			<div
				className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-opacity duration-200"
				style={{ background: work.color, opacity: hovered ? 1 : 0 }}
			>
				<ArrowRight size={12} />
			</div>
		</Link>
	);
}
