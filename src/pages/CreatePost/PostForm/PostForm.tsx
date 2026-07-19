import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { imageApi, postsApi } from '@/lib/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import TitleHeader from './TitleHeader';
import CategorySelect from './form/CategorySelect';
import FileUpload from './form/FileUpload';
import SendButton from './form/SendButton';
import TitleInput from './form/TitleInput';

export interface PostFormTypes {
	title: string;
	type: string;
	content: string;
	image: FileList | null;
}

const PostForm = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);
	const navigate = useNavigate();

	const form = useForm<PostFormTypes>({
		defaultValues: { title: '', type: '', content: '', image: null },
	});

	const onSubmit = async (data: PostFormTypes) => {
		setSubmitting(true);
		try {
			const { data: post } = await postsApi.create({
				title: data.title,
				type: data.type,
			});
			if (data.image?.[0] && post) {
				await imageApi.upload(post.id, data.image[0]);
			}
			toast.success('Post created successfully');
			navigate('/gallery');
		} catch {
			toast.error('Failed to create post');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Card>
			<TitleHeader />
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<TitleInput form={form} />
						<CategorySelect form={form} />
						<FileUpload
							form={form}
							imagePreview={imagePreview}
							setImagePreview={setImagePreview}
						/>
						<SendButton submitting={submitting} />
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default PostForm;
