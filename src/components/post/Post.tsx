import { useAuth } from '@/contexts/auth/AuthContext';
import { postsApi } from '@/lib/api';
import { Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import type { IPostProps } from './Post.interface';

const COLORS = ['#7c3aed', '#2563eb', '#dc2626', '#c4b5fd'];

const PostCard = ({
	id,
	image_url,
	title,
	type,
	created_at,
	index,
	setPosts,
}: IPostProps) => {
	const [hoveredPost, setHoveredPost] = useState<number | null>(null);
	const { isAuthenticated } = useAuth();
	const color = COLORS[index % COLORS.length];

	const deletePost = async (e: React.MouseEvent, id: number) => {
		e.stopPropagation();
		try {
			// if (image_id) await imageApi.delete(id);
			await postsApi.delete(id);
			setPosts(prev => prev.filter(p => p.id !== id));
		} catch {
			// ignore
		}
	};

	return (
		<motion.div
			key={id}
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: index * 0.04 }}
			className="relative overflow-hidden cursor-pointer"
			style={{ background: '#08080f', aspectRatio: '3/4' }}
			onMouseEnter={() => setHoveredPost(id)}
			onMouseLeave={() => setHoveredPost(null)}
		>
			{image_url && (
				<img
					src={image_url}
					alt={title}
					className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
					style={{
						transform: hoveredPost === id ? 'scale(1.1)' : 'scale(1.0)',
						filter: hoveredPost === id ? 'none' : 'grayscale(30%)',
					}}
				/>
			)}
			{isAuthenticated && (
				<button
					onClick={e => deletePost(e, id)}
					className="absolute top-3 right-3 z-20 p-2 rounded-full transition-all duration-200 cursor-pointer"
					style={{
						background: 'rgba(220,38,38,0.9)',
						color: '#fff',
						opacity: hoveredPost === id ? 1 : 0,
					}}
				>
					<Trash2 size={14} />
				</button>
			)}
			<div
				className="absolute inset-0 transition-opacity duration-300"
				style={{
					background:
						hoveredPost === id
							? `linear-gradient(to top, ${color}cc 0%, transparent 60%)`
							: 'linear-gradient(to top, rgba(8,8,15,0.8) 0%, transparent 60%)',
				}}
			/>
			<div className="absolute inset-0 flex flex-col justify-between p-5">
				<div className="flex justify-between items-start">
					<span
						className="text-xs tracking-widest uppercase px-2 py-1"
						style={{
							background: color + '33',
							color: color,
							opacity: hoveredPost === id ? 1 : 0,
							transition: 'opacity 0.2s',
						}}
					>
						{type}
					</span>
					<span
						className="text-xs opacity-60"
						style={{
							opacity: hoveredPost === id ? 0.6 : 0,
							transition: 'opacity 0.2s',
						}}
					>
						{new Date(created_at).getFullYear()}
					</span>
				</div>
				<div>
					<h3
						className="text-lg font-bold"
						style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
					>
						{title}
					</h3>
				</div>
			</div>
		</motion.div>
	);
};

export default PostCard;
