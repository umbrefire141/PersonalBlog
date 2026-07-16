interface SkillHeaderProps {
	name: string;
	percent: number;
}

const SkillHeader = ({ name, percent }: SkillHeaderProps) => {
	return (
		<div className="flex justify-between text-sm mb-1">
			<span>{name}</span>
			<span className="text-primary">{percent}%</span>
		</div>
	);
};

export default SkillHeader;
