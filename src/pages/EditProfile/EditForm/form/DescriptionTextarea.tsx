import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import type { useForm } from 'react-hook-form';
import type { IFormValues } from '../../EditProfile';

interface DescriptionTextareaProps {
	form: ReturnType<typeof useForm<IFormValues>>;
}

const DescriptionTextarea = ({ form }: DescriptionTextareaProps) => {
	return (
		<FormField
			control={form.control}
			name="description"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Description</FormLabel>
					<FormControl>
						<Textarea
							placeholder="Detailed description..."
							className="min-h-20 resize-y"
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default DescriptionTextarea;
