import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { skillsApi } from '@/lib/api';
import type { Skill } from '@/lib/types';
import { Pencil, Save, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import PercentBar from './PercentBar';
import SkillHeader from './SkillHeader';

interface SkillItemProps {
	skill: Skill;
	editingSkill: number | null;
	setEditingSkill: (id: number | null) => void;
	setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
	updateSkill: (id: number) => void;
}

const SkillItem = ({
	skill,
	editingSkill,
	setEditingSkill,
	setSkills,
	updateSkill,
}: SkillItemProps) => {
	const deleteSkill = async (id: number) => {
		try {
			await skillsApi.delete(id);
			setSkills(prev => prev.filter(s => s.id !== id));
			toast.success('Skill deleted');
		} catch {
			toast.error('Failed to delete skill');
		}
	};

	return (
		<div
			key={skill.id}
			className="flex items-center gap-3 p-3 rounded-md border border-border"
		>
			{editingSkill === skill.id ? (
				<>
					<Input
						value={skill.name}
						onChange={e =>
							setSkills(prev =>
								prev.map(s =>
									s.id === skill.id ? { ...s, name: e.target.value } : s,
								),
							)
						}
						className="flex-1 h-8 text-sm"
					/>
					<Input
						type="number"
						value={skill.percent}
						onChange={e =>
							setSkills(prev =>
								prev.map(s =>
									s.id === skill.id
										? { ...s, percent: Number(e.target.value) }
										: s,
								),
							)
						}
						className="w-20 h-8 text-sm"
						min={0}
						max={100}
					/>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => updateSkill(skill.id)}
					>
						<Save size={14} />
					</Button>
				</>
			) : (
				<>
					<div className="flex-1 flex items-center gap-3">
						<div className="flex-1">
							<SkillHeader name={skill.name} percent={skill.percent} />
							<PercentBar percent={skill.percent} />
						</div>
					</div>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => setEditingSkill(skill.id)}
					>
						<Pencil size={14} />
					</Button>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => deleteSkill(skill.id)}
					>
						<Trash2 size={14} className="text-destructive" />
					</Button>
				</>
			)}
		</div>
	);
};

export default SkillItem;
