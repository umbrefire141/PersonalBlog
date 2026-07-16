import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { FormTypes } from '../AuthenticationForm';

interface IEmailInputProps {
	form: ReturnType<typeof useForm<FormTypes>>;
}

const EmailInput = ({ form }: IEmailInputProps) => {
	return (
		<FormField
			control={form.control}
			name="email"
			rules={{
				required: 'Email is required',
				pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
			}}
			render={({ field }) => (
				<FormItem>
					<FormLabel>Email</FormLabel>
					<FormControl>
						<div className="relative">
							<Mail
								size={16}
								className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
							/>
							<Input
								placeholder="you@example.com"
								className="pl-10"
								{...field}
							/>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default EmailInput;
