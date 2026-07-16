import { imageApi, profileApi, skillsApi } from '@/lib/api';
import type { Profile, Skill } from '@/lib/types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import EditForm from './EditForm/EditForm';
import Skills from './Skills/Skills';
import TitleHeader from './TitleHeader';

export interface IFormValues {
	bio: string;
	job_title: string;
	job: string;
	description: string;
}

export default function EditProfilePage() {
	const [profile, setProfile] = useState<Profile | null>(null);
	const [skills, setSkills] = useState<Skill[]>([]);
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	const form = useForm<IFormValues>({
		defaultValues: { bio: '', job_title: '', job: '', description: '' },
	});

	useEffect(() => {
		Promise.all([profileApi.get(), skillsApi.list()])
			.then(([{ data: p }, { data: s }]) => {
				setProfile(p);
				setSkills(s);
				form.reset({
					bio: p.bio || '',
					job_title: p.job_title || '',
					job: p.job || '',
					description: p.description || '',
				});
				if (p.image_id) {
					imageApi
						.get(p.image_id)
						.then(({ data: img }) => {
							setImagePreview(`data:image/jpeg;base64,${img.file_data}`);
						})
						.catch(() => {});
				}
			})
			.catch(() => toast.error('Failed to load profile'));
	}, []);

	return (
		<div className="min-h-screen pt-28 px-8 md:px-16 pb-24 flex items-start justify-center">
			<div className="w-full max-w-2xl space-y-8">
				<TitleHeader />
				<EditForm
					form={form}
					profile={profile}
					imagePreview={imagePreview}
					setImagePreview={setImagePreview}
					setProfile={setProfile}
				/>
				<Skills skills={skills} setSkills={setSkills} />
			</div>
		</div>
	);
}
