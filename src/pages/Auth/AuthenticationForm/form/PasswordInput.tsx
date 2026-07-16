import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { FormTypes } from '../AuthenticationForm';

interface IPasswordInputProps {
	form: ReturnType<typeof useForm<FormTypes>>;
	showPassword: boolean;
	setShowPassword: (show: boolean) => void;
}

const PasswordInput = ({
	form,
	showPassword,
	setShowPassword,
}: IPasswordInputProps) => {
	return (
		<FormField
			control={form.control}
			name="password"
			rules={{ required: 'Password is required' }}
			render={({ field }) => (
				<FormItem>
					<FormLabel>Password</FormLabel>
					<FormControl>
						<div className="relative">
							<Lock
								size={16}
								className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
							/>
							<Input
								type={showPassword ? 'text' : 'password'}
								placeholder="••••••••"
								className="pl-10 pr-10"
								{...field}
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
							>
								{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
							</button>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default PasswordInput;
