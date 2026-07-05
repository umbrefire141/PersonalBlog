import { EXPERIENCE, SKILLS } from '@/consts/const';
import { ArrowRight, Github, Instagram, Mail, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
	return (
		<div className="min-h-screen pt-28 pb-24">
			<div className="px-8 md:px-16 mb-20">
				<p className="text-xs tracking-[0.35em] uppercase opacity-50 mb-4">
					About
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
					<h1
						className="text-5xl md:text-7xl font-extrabold leading-none"
						style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
					>
						Ana
						<br />
						<span
							style={{ WebkitTextStroke: '2px #7c3aed', color: 'transparent' }}
						>
							Vásquez
						</span>
					</h1>
					<div>
						<p
							className="text-base leading-relaxed mb-6"
							style={{ color: '#a89dc4' }}
						>
							I'm a Berlin-based visual artist and art director with 7 years of
							experience working at the intersection of graphic design,
							photography, and motion. My work explores fragmentation, memory,
							and the residue of digital culture.
						</p>
						<p
							className="text-base leading-relaxed"
							style={{ color: '#a89dc4' }}
						>
							Currently Senior Art Director at Studio Void, where I lead visual
							identity, campaign, and editorial projects for clients in fashion,
							music, and technology.
						</p>
					</div>
				</div>
			</div>

			{/* Photo + Skills */}
			<div className="px-8 md:px-16 mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Photo */}
				<div className="relative">
					<div
						className="absolute inset-0 translate-x-3 translate-y-3"
						style={{ border: '1px solid #7c3aed', opacity: 0.4 }}
					/>
					<img
						src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&h=800&fit=crop&auto=format"
						alt="Ana Vásquez, portrait"
						className="relative w-full object-cover"
						style={{ background: '#111120', aspectRatio: '7/8' }}
					/>
					<div
						className="absolute bottom-0 left-0 right-0 h-1/3"
						style={{
							background: 'linear-gradient(to top, #08080f, transparent)',
						}}
					/>
					{/* Red accent stripe */}
					<div
						className="absolute top-0 right-0 w-1 h-24"
						style={{
							background: 'linear-gradient(to bottom, #dc2626, transparent)',
						}}
					/>
				</div>

				{/* Skills */}
				<div>
					<h2
						className="text-2xl font-bold mb-8"
						style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
					>
						Disciplines
					</h2>
					<div className="space-y-6">
						{SKILLS.map(({ name, level }) => (
							<div key={name}>
								<div className="flex justify-between text-sm mb-2">
									<span className="tracking-wide">{name}</span>
									<span style={{ color: '#7c3aed' }}>{level}%</span>
								</div>
								<div
									className="h-px w-full relative overflow-hidden"
									style={{ background: 'rgba(124,58,237,0.2)' }}
								>
									<motion.div
										className="absolute inset-y-0 left-0"
										style={{
											background: 'linear-gradient(to right, #7c3aed, #2563eb)',
										}}
										initial={{ width: 0 }}
										animate={{ width: `${level}%` }}
										transition={{
											duration: 1,
											delay: 0.3,
											ease: [0.22, 1, 0.36, 1],
										}}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Experience */}
			<div className="px-8 md:px-16 mb-20">
				<h2
					className="text-2xl font-bold mb-10"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					Experience
				</h2>
				<div className="space-y-0">
					{EXPERIENCE.map((exp, i) => (
						<div
							key={i}
							className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-8 border-t"
							style={{ borderColor: 'rgba(124,58,237,0.2)' }}
						>
							<p className="text-xs tracking-widest uppercase opacity-50 pt-1">
								{exp.year}
							</p>
							<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<p
										className="text-lg font-semibold mb-1"
										style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
									>
										{exp.role}
									</p>
									<p className="text-sm" style={{ color: '#7c3aed' }}>
										{exp.company}
									</p>
								</div>
								<p
									className="text-sm leading-relaxed"
									style={{ color: '#8b7fb8' }}
								>
									{exp.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Contact CTA */}
			<div
				className="mx-8 md:mx-16 p-10 md:p-16 relative overflow-hidden"
				style={{
					background: '#111120',
					border: '1px solid rgba(124,58,237,0.25)',
				}}
			>
				<div
					className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-20"
					style={{ background: '#7c3aed' }}
				/>
				<div
					className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[60px] opacity-15"
					style={{ background: '#dc2626' }}
				/>
				<p
					className="text-xs tracking-[0.35em] uppercase opacity-50 mb-4"
					style={{ position: 'relative' }}
				>
					Available for Projects
				</p>
				<h2
					className="text-4xl md:text-5xl font-extrabold mb-8 relative"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					Let"s make something
					<br />
					<span style={{ color: '#c4b5fd' }}>unforgettable.</span>
				</h2>
				<div className="flex flex-wrap gap-4 relative">
					<a
						href="mailto:ana@studiovasquez.com"
						className="flex items-center gap-2 text-sm tracking-widest uppercase border px-6 py-3 hover:bg-violet-600 hover:border-violet-600 transition-all duration-200"
						style={{ borderColor: '#7c3aed', color: '#c4b5fd' }}
					>
						<Mail size={14} />
						Email Me
					</a>
					<Link
						to="/gallery"
						className="flex items-center gap-2 text-sm tracking-widest uppercase px-6 py-3 transition-all duration-200"
						style={{ color: '#8b7fb8' }}
					>
						See Work <ArrowRight size={14} />
					</Link>
				</div>

				{/* Social links */}
				<div className="flex gap-4 mt-8 relative">
					{[
						{ Icon: Github, href: '#' },
						{ Icon: Twitter, href: '#' },
						{ Icon: Instagram, href: '#' },
					].map(({ Icon, href }, i) => (
						<a
							key={i}
							href={href}
							className="w-8 h-8 flex items-center justify-center border transition-all duration-200 hover:border-violet-500"
							style={{ borderColor: 'rgba(124,58,237,0.3)', color: '#8b7fb8' }}
						>
							<Icon size={14} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
