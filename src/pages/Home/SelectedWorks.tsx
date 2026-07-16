const SelectedWorks = () => {
	return (
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
									i % 3 === 0 ? '#7c3aed' : i % 3 === 1 ? '#2563eb' : '#dc2626',
							}}
						>
							{t} ·
						</span>
					)),
				)}
			</div>
		</div>
	);
};

export default SelectedWorks;
