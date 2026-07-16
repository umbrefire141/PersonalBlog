import FeaturedCard from '@/components/FeaturedCard';
import { WORKS } from '@/consts/const';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Works = () => {
	return (
		<section className="px-8 md:px-16 py-24">
			<div className="flex items-center justify-between mb-12">
				<h2
					className="text-3xl md:text-4xl font-bold"
					style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
				>
					Selected Works
				</h2>
				<Link
					to="/gallery"
					className="text-sm tracking-widest uppercase opacity-60 hover:opacity-100 hover:text-violet-400 transition-all duration-200 flex items-center gap-2"
				>
					All Works <ArrowRight size={14} />
				</Link>
			</div>

			<div
				className="grid grid-cols-1 md:grid-cols-3 gap-px"
				style={{ background: 'rgba(124,58,237,0.15)' }}
			>
				{WORKS.slice(0, 3).map(work => (
					<FeaturedCard key={work.id} work={work} to="gallery" />
				))}
			</div>
		</section>
	);
};

export default Works;
