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

interface BioTextareaProps {
	form: ReturnType<typeof useForm<IFormValues>>;
}

const BioTextarea = ({ form }: BioTextareaProps) => {
	return (
		<FormField
			control={form.control}
			name="bio"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Bio</FormLabel>
					<FormControl>
						<Textarea
							placeholder="Short bio about yourself..."
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

export default BioTextarea;
