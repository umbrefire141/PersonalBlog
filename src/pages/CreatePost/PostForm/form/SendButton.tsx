import { Button } from '@/components/ui/button';
import { SendHorizonal } from 'lucide-react';
interface ISendButtonProps {
	submitting: boolean;
}

const SendButton = ({ submitting }: ISendButtonProps) => {
	return (
		<Button type="submit" className="w-full gap-2" disabled={submitting}>
			<SendHorizonal size={16} />
			{submitting ? 'Publishing...' : 'Publish Post'}
		</Button>
	);
};

export default SendButton;
