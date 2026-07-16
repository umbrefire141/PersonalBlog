const Info = () => {
	return (
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
	);
};

export default Info;
