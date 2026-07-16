interface IPhotoProps {
	imageUrl?: string;
}

const Photo = ({ imageUrl }: IPhotoProps) => {
	return (
		<div className="relative">
			<div
				className="absolute inset-0 translate-x-3 translate-y-3"
				style={{ border: '1px solid #7c3aed', opacity: 0.4 }}
			/>
			<img
				src={
					imageUrl ||
					'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&h=800&fit=crop&auto=format'
				}
				alt="Profile portrait"
				className="relative w-full object-cover"
				style={{ background: '#111120', aspectRatio: '7/8' }}
			/>
			<div
				className="absolute bottom-0 left-0 right-0 h-1/3"
				style={{
					background: 'linear-gradient(to top, #08080f, transparent)',
				}}
			/>
			<div
				className="absolute top-0 right-0 w-1 h-24"
				style={{
					background: 'linear-gradient(to bottom, #dc2626, transparent)',
				}}
			/>
		</div>
	);
};

export default Photo;
