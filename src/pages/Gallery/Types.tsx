interface TypesProps {
	types: string[];
	activeType: string;
	setActiveType: (type: string) => void;
}

const Types = ({ types, activeType, setActiveType }: TypesProps) => {
	return (
		<div className="flex flex-wrap gap-3">
			{types.map(t => (
				<button
					key={t}
					onClick={() => setActiveType(t)}
					className="text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200"
					style={{
						borderColor: activeType === t ? '#7c3aed' : 'rgba(124,58,237,0.25)',
						color: activeType === t ? '#c4b5fd' : '#8b7fb8',
						background:
							activeType === t ? 'rgba(124,58,237,0.15)' : 'transparent',
					}}
				>
					{t}
				</button>
			))}
		</div>
	);
};

export default Types;
