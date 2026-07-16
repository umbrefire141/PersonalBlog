import type { Profile } from '@/lib/types';
import { motion } from 'motion/react';

interface ISkillsProps {
	profile?: Profile | null;
	loaded: boolean;
}

const Skills = ({ profile, loaded }: ISkillsProps) => {
	return (
		<div>
			<h2
				className="text-2xl font-bold mb-8"
				style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
			>
				Disciplines
			</h2>
			<div className="space-y-6">
				{(profile?.skills || []).map(({ name, percent }) => (
					<div key={name}>
						<div className="flex justify-between text-sm mb-2">
							<span className="tracking-wide">{name}</span>
							<span style={{ color: '#7c3aed' }}>{percent}%</span>
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
								animate={loaded ? { width: `${percent}%` } : { width: 0 }}
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
	);
};

export default Skills;
