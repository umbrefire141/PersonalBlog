import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { useAuth } from '@/contexts/auth/AuthContext';
import { LogIn } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import TitleHeader from './TitleHeader';
import EmailInput from './form/EmailInput';
import PasswordInput from './form/PasswordInput';

export interface FormTypes {
	email: string;
	password: string;
}

const AuthenticationForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { signIn } = useAuth();
	const navigate = useNavigate();

	const form = useForm<FormTypes>({
		defaultValues: { email: '', password: '' },
	});

	const onSubmit = async (data: FormTypes) => {
		try {
			await signIn(data.email, data.password);
			toast.success('Signed in successfully');
			navigate('/');
		} catch {
			toast.error('Invalid credentials');
		}
	};

	return (
		<Card>
			<TitleHeader />
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
						<EmailInput form={form} />
						<PasswordInput
							form={form}
							showPassword={showPassword}
							setShowPassword={setShowPassword}
						/>
						<Button type="submit" className="w-full gap-2">
							<LogIn size={16} />
							Sign In
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default AuthenticationForm;
