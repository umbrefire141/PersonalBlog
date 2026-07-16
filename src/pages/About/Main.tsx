interface IMainProps {
	job_title?: string;
	bio?: string;
	description?: string;
}

const Main = ({ job_title, bio, description }: IMainProps) => {
	return (
		<div className="px-8 md:px-16 mb-20">
			<p className="text-xs tracking-[0.35em] uppercase opacity-50 mb-4">
				About
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
				<h1
					className="text-5xl md:text-7xl font-extrabold leading-none"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					{job_title?.split(' ')[0] || 'Ana'}
					<br />
					<span
						style={{ WebkitTextStroke: '2px #7c3aed', color: 'transparent' }}
					>
						{job_title?.split(' ').slice(1).join(' ') || 'Vásquez'}
					</span>
				</h1>
				<div>
					<p
						className="text-base leading-relaxed mb-6"
						style={{ color: '#a89dc4' }}
					>
						{bio}
					</p>
					<p className="text-base leading-relaxed" style={{ color: '#a89dc4' }}>
						{description ||
							'Currently Senior Art Director at Studio Void, where I lead visual identity, campaign, and editorial projects for clients in fashion, music, and technology.'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
