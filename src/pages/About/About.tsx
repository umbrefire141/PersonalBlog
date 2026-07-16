import { imageApi, profileApi } from '@/lib/api';
import type { Profile } from '@/lib/types';
import { useEffect, useState } from 'react';
import Contact from './Contact';
import Experience from './Experience';
import Main from './Main';
import Photo from './Photo';
import Skills from './Skills';

export default function AboutPage() {
	const [profile, setProfile] = useState<Profile | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		profileApi
			.get()
			.then(({ data }) => {
				setProfile(data);
				if (data.image_id) {
					imageApi
						.get(data.image_id)
						.then(({ data: img }) => {
							setImageUrl(`data:image/jpeg;base64,${img.file_data}`);
						})
						.catch(() => {});
				}
			})
			.catch(() => {});
	}, []);

	useEffect(() => {
		if (profile) {
			const timer = setTimeout(() => setLoaded(true), 100);
			return () => clearTimeout(timer);
		}
	}, [profile]);

	return (
		<div className="min-h-screen pt-28 pb-24">
			<Main
				bio={profile?.bio}
				description={profile?.description}
				job_title={profile?.job_title}
			/>
			{/* Photo + Skills */}
			<div className="px-8 md:px-16 mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
				<Photo imageUrl={imageUrl || undefined} />
				<Skills profile={profile} loaded={loaded} />
			</div>

			{/* Experience */}
			<Experience />

			{/* Contact CTA */}
			<Contact email={profile?.email} />
		</div>
	);
}
