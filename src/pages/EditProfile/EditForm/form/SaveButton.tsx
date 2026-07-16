import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

interface SaveButtonProps {
	saving: boolean;
}
const SaveButton = ({ saving }: SaveButtonProps) => {
	return (
		<Button type="submit" className="w-full gap-2" disabled={saving}>
			<Save size={16} />
			{saving ? 'Saving...' : 'Save Profile'}
		</Button>
	);
};

export default SaveButton;
