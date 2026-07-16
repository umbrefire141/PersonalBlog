import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const ButtonSignIn = () => {
	return (
		<Button type="submit" className="w-full gap-2">
			<LogIn size={16} />
			Sign In
		</Button>
	);
};

export default ButtonSignIn;
