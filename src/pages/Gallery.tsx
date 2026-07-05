import { CATEGORIES, WORKS } from '@/consts/const';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function GalleryPage() {
	const [activeCategory, setActiveCategory] = useState('All');
	const [hoveredWork, setHoveredWork] = useState<number | null>(null);

	const filteredWorks =
		activeCategory === 'All'
			? WORKS
			: WORKS.filter(w => w.category === activeCategory);

	return (
		<div className="min-h-screen pt-28 px-8 md:px-16 pb-24">
			<div className="mb-12">
				<p className="text-xs tracking-[0.35em] uppercase opacity-50 mb-4">
					Portfolio
				</p>
				<h1
					className="text-5xl md:text-7xl font-extrabold leading-none mb-8"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					Gallery
				</h1>

				{/* Filters */}
				<div className="flex flex-wrap gap-3">
					{CATEGORIES.map(cat => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className="text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200"
							style={{
								borderColor:
									activeCategory === cat ? '#7c3aed' : 'rgba(124,58,237,0.25)',
								color: activeCategory === cat ? '#c4b5fd' : '#8b7fb8',
								background:
									activeCategory === cat
										? 'rgba(124,58,237,0.15)'
										: 'transparent',
							}}
						>
							{cat}
						</button>
					))}
				</div>
			</div>
			<motion.div
				layout
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
				style={{ background: 'rgba(124,58,237,0.12)' }}
			>
				{filteredWorks.map((work, i) => (
					<motion.div
						key={work.id}
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: i * 0.04 }}
						className="relative overflow-hidden cursor-pointer"
						style={{ background: '#08080f', aspectRatio: '3/4' }}
						onMouseEnter={() => setHoveredWork(work.id)}
						onMouseLeave={() => setHoveredWork(null)}
					>
						<img
							src={work.image}
							alt={work.title}
							className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
							style={{
								transform:
									hoveredWork === work.id ? 'scale(1.1)' : 'scale(1.0)',
								filter: hoveredWork === work.id ? 'none' : 'grayscale(30%)',
							}}
						/>
						<div
							className="absolute inset-0 transition-opacity duration-300"
							style={{
								background:
									hoveredWork === work.id
										? `linear-gradient(to top, ${work.color}cc 0%, transparent 60%)`
										: 'linear-gradient(to top, rgba(8,8,15,0.8) 0%, transparent 60%)',
							}}
						/>
						<div className="absolute inset-0 flex flex-col justify-between p-5">
							<div className="flex justify-between items-start">
								<span
									className="text-xs tracking-widest uppercase px-2 py-1"
									style={{
										background: work.color + '33',
										color: work.color,
										opacity: hoveredWork === work.id ? 1 : 0,
										transition: 'opacity 0.2s',
									}}
								>
									{work.category}
								</span>
								<span
									className="text-xs opacity-60"
									style={{
										opacity: hoveredWork === work.id ? 0.6 : 0,
										transition: 'opacity 0.2s',
									}}
								>
									{work.year}
								</span>
							</div>
							<div>
								<h3
									className="text-lg font-bold"
									style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
								>
									{work.title}
								</h3>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
