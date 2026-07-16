import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { CATEGORIES } from '@/consts/const';
import type { useForm } from 'react-hook-form';
import type { PostFormTypes } from '../PostForm';

const CategorySelect = ({
	form,
}: {
	form: ReturnType<typeof useForm<PostFormTypes>>;
}) => {
	const categories = CATEGORIES.filter(c => c !== 'All');

	return (
		<FormField
			control={form.control}
			name="type"
			rules={{ required: 'Category is required' }}
			render={({ field }) => (
				<FormItem>
					<FormLabel>Category</FormLabel>
					<FormControl>
						<Select value={field.value} onValueChange={field.onChange}>
							<SelectTrigger>
								<SelectValue placeholder="Select category" />
							</SelectTrigger>
							<SelectContent>
								{categories.map(cat => (
									<SelectItem key={cat} value={cat}>
										{cat}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CategorySelect;
