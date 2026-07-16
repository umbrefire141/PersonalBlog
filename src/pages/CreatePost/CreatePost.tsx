import PostForm from './PostForm/PostForm';
import TitleHeader from './TitleHeader';

export default function CreatePostPage() {
	return (
		<div className="min-h-screen pt-28 px-8 md:px-16 pb-24 flex items-start justify-center">
			<div className="w-full max-w-2xl">
				<TitleHeader />
				<PostForm />
			</div>
		</div>
	);
}
