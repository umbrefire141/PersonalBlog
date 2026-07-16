import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { useForm } from 'react-hook-form';
import type { IFormValues } from '../../EditProfile';

interface TitleInputProps {
	form: ReturnType<typeof useForm<IFormValues>>;
}

const TitleInput = ({ form }: TitleInputProps) => {
	return (
		<FormField
			control={form.control}
			name="job_title"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Job Title</FormLabel>
					<FormControl>
						<Input placeholder="Senior Art Director" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default TitleInput;
