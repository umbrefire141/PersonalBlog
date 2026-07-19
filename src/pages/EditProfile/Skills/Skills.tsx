import { Card, CardContent } from '@/components/ui/card';
import { skillsApi } from '@/lib/api';
import type { Skill } from '@/lib/types';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { toast } from 'sonner';
import SkillItem from './Skill/Skill';
import TitleHeader from './TitleHeader';
import SkillForm from './form/SkillForm';

interface SkillsProps {
	skills: Skill[];
	setSkills: Dispatch<SetStateAction<Skill[]>>;
}

const Skills = ({ skills, setSkills }: SkillsProps) => {
	const [newSkill, setNewSkill] = useState({ name: '', percent: 0 });
	const [editingSkill, setEditingSkill] = useState<number | null>(null);

	const addSkill = async () => {
		if (!newSkill.name || newSkill.percent < 1) return;
		try {
			const { data } = await skillsApi.create(newSkill);
			setSkills(prev => [...prev, data]);
			setNewSkill({ name: '', percent: 0 });
			toast.success('Skill added');
		} catch {
			toast.error('Failed to add skill');
		}
	};

	const updateSkill = async (id: number) => {
		const skill = skills.find(s => s.id === id);
		if (!skill) return;
		try {
			const { data } = await skillsApi.update(id, {
				name: skill.name,
				percent: skill.percent,
			});
			setSkills(prev => prev.map(s => (s.id === id ? data : s)));
			setEditingSkill(null);
			toast.success('Skill updated');
		} catch {
			toast.error('Failed to update skill');
		}
	};

	return (
		<Card>
			<TitleHeader />
			<CardContent className="space-y-4">
				{skills.map(skill => (
					<SkillItem
						skill={skill}
						editingSkill={editingSkill}
						setEditingSkill={setEditingSkill}
						setSkills={setSkills}
						updateSkill={updateSkill}
					/>
				))}
				<SkillForm
					newSkill={newSkill}
					setNewSkill={setNewSkill}
					addSkill={addSkill}
				/>
			</CardContent>
		</Card>
	);
};

export default Skills;
