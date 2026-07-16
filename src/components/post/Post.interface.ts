import type { PostWithImage } from '@/lib/types';

export interface IPostProps {
	id: number;
	image_url?: string;
	title: string;
	index: number;
	type: string;
	created_at: string;
	setPosts: React.Dispatch<React.SetStateAction<PostWithImage[]>>;
}
