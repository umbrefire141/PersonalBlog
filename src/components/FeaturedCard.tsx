import { WORKS } from '@/consts/const';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({
	work,
	to,
}: {
	work: (typeof WORKS)[0];
	to: string;
}) => {
	const [hovered, setHovered] = useState(false);
	return (
		<Link
			to={to}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="relative overflow-hidden text-left"
			style={{ background: '#08080f', aspectRatio: '4/3' }}
		>
			<img
				src={work.image}
				alt={work.title}
				className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
				style={{ transform: hovered ? 'scale(1.08)' : 'scale(1.0)' }}
			/>
			<div
				className="absolute inset-0 transition-opacity duration-300"
				style={{
					background: `linear-gradient(to top, rgba(8,8,15,0.9) 0%, rgba(8,8,15,0.2) 60%, transparent 100%)`,
				}}
			/>
			<div className="absolute inset-0 flex flex-col justify-end p-6">
				<p
					className="text-xs tracking-widest uppercase mb-2 opacity-70"
					style={{ color: work.color }}
				>
					{work.category}
				</p>
				<h3
					className="text-xl font-bold"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					{work.title}
				</h3>
			</div>
			<div
				className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-opacity duration-200"
				style={{ background: work.color, opacity: hovered ? 1 : 0 }}
			>
				<ArrowRight size={12} />
			</div>
		</Link>
	);
};

export default FeaturedCard;
