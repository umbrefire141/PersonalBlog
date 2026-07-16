interface PercentBarProps {
	percent: number;
}
const PercentBar = ({ percent }: PercentBarProps) => {
	return (
		<div className="h-1 rounded-full bg-border overflow-hidden">
			<div
				className="h-full rounded-full bg-primary"
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
};

export default PercentBar;
