import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { profileApi } from '@/lib/api';
import type { Profile } from '@/lib/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { IFormValues } from '../EditProfile';
import TitleHeader from './TitleHeader';
import BioTextarea from './form/BioTextarea';
import CompanyInput from './form/CompanyInput';
import DescriptionTextarea from './form/DescriptionTextarea';
import ImageUpload from './form/ImageUpload';
import SaveButton from './form/SaveButton';
import TitleInput from './form/TitleInput';

interface EditFormProps {
	form: ReturnType<typeof useForm<IFormValues>>;
	profile: Profile | null;
	imagePreview: string | null;
	setImagePreview: (preview: string | null) => void;
	setProfile: (profile: Profile) => void;
}

const EditForm = ({
	form,
	profile,
	imagePreview,
	setImagePreview,
	setProfile,
}: EditFormProps) => {
	const [saving, setSaving] = useState(false);
	const [imageFile, setImageFile] = useState<File | null>(null);

	const onSubmit = async (data: {
		bio: string;
		job_title: string;
		job: string;
		description: string;
	}) => {
		setSaving(true);
		try {
			const { data: updated } = await profileApi.update(data);
			setProfile(updated);
			if (imageFile) {
				const { data: img } = await profileApi.uploadImage(imageFile);
				setImagePreview(`data:image/jpeg;base64,${img.file_data}`);
				setImageFile(null);
			}
			toast.success('Profile saved');
		} catch {
			toast.error('Failed to save profile');
		} finally {
			setSaving(false);
		}
	};

	return (
		<Card>
			<TitleHeader />
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
						<ImageUpload
							imagePreview={imagePreview}
							setImagePreview={setImagePreview}
							setImageFile={setImageFile}
							profile={profile}
						/>

						<div className="grid grid-cols-2 gap-4">
							<TitleInput form={form} />
							<CompanyInput form={form} />
						</div>
						<BioTextarea form={form} />
						<DescriptionTextarea form={form} />
						<SaveButton saving={saving} />
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default EditForm;
