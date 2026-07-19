import PostCard from '@/components/post/Post';
import { imageApi, postsApi } from '@/lib/api';
import type { Post } from '@/lib/types';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import TitleHeader from './TitleHeader';
import Types from './Types';

interface PostWithImage extends Post {
	image_url?: string;
}

export default function GalleryPage() {
	const [posts, setPosts] = useState<PostWithImage[]>([]);
	const [activeType, setActiveType] = useState('All');

	useEffect(() => {
		postsApi
			.list()
			.then(async ({ data }) => {
				const withImages = await Promise.all(
					data.map(async post => {
						if (!post.image_id) return { ...post } as PostWithImage;
						try {
							const { data: img } = await imageApi.get(post.image_id);
							console.log(img);
							return {
								...post,
								image_url: `data:image/jpeg;base64,${img.file_data}`,
							} as PostWithImage;
						} catch {
							return { ...post } as PostWithImage;
						}
					}),
				);
				setPosts(withImages);
			})
			.catch(() => {});
	}, []);

	const types = ['All', ...new Set(posts.map(w => w.type))];

	const filteredPosts =
		activeType === 'All' ? posts : posts.filter(w => w.type === activeType);

	return (
		<div className="min-h-screen pt-28 px-8 md:px-16 pb-24">
			<div className="mb-12">
				<TitleHeader />
				<Types
					types={types}
					activeType={activeType}
					setActiveType={setActiveType}
				/>
			</div>
			<motion.div
				layout
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
				style={{ background: 'rgba(124,58,237,0.12)' }}
			>
				{filteredPosts.map((post, i) => (
					<PostCard
						key={post.id}
						id={post.id}
						image_url={post.image_url}
						title={post.title}
						type={post.type}
						created_at={post.created_at}
						index={i}
						setPosts={setPosts}
					/>
				))}
			</motion.div>
		</div>
	);
}
