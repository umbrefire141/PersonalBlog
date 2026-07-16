import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface SkillFormProps {
	newSkill: { name: string; percent: number };
	setNewSkill: React.Dispatch<
		React.SetStateAction<{ name: string; percent: number }>
	>;
	addSkill: () => void;
}

const SkillForm = ({ newSkill, setNewSkill, addSkill }: SkillFormProps) => {
	return (
		<div className="flex items-center gap-3 p-3 rounded-md border border-dashed border-border">
			<Input
				placeholder="Skill name"
				value={newSkill.name}
				onChange={e => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
				className="flex-1 h-8 text-sm"
			/>
			<Input
				type="number"
				placeholder="%"
				value={newSkill.percent || ''}
				onChange={e =>
					setNewSkill(prev => ({
						...prev,
						percent: Number(e.target.value),
					}))
				}
				className="w-20 h-8 text-sm"
				min={0}
				max={100}
			/>
			<Button size="sm" onClick={addSkill} className="gap-1">
				<Plus size={14} />
				Add
			</Button>
		</div>
	);
};

export default SkillForm;
