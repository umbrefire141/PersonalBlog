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

interface CompanyInputProps {
	form: ReturnType<typeof useForm<IFormValues>>;
}

const CompanyInput = ({ form }: CompanyInputProps) => {
	return (
		<FormField
			control={form.control}
			name="job"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Company</FormLabel>
					<FormControl>
						<Input placeholder="Studio Void" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CompanyInput;
