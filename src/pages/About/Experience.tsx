import { EXPERIENCE } from '@/consts/const';

const Experience = () => {
	return (
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
	);
};

export default Experience;
