import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import type { PostFormTypes } from '../PostForm';

interface ITitleInputProps {
	form: ReturnType<typeof useForm<PostFormTypes>>;
}

const TitleInput = ({ form }: ITitleInputProps) => {
	return (
		<FormField
			control={form.control}
			name="title"
			rules={{
				required: 'Title is required',
				minLength: { value: 3, message: 'Min 3 characters' },
			}}
			render={({ field }) => (
				<FormItem>
					<FormLabel>Title</FormLabel>
					<FormControl>
						<Input placeholder="Post title..." {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default TitleInput;
