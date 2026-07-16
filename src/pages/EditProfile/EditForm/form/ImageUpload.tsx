import type { Profile } from '@/lib/types';
import { ImagePlus, Pencil } from 'lucide-react';

interface ImageUploadProps {
	imagePreview: string | null;
	setImagePreview: (preview: string | null) => void;
	setImageFile: (file: File | null) => void;
	profile: Profile | null;
}

const ImageUpload = ({
	imagePreview,
	setImagePreview,
	setImageFile,
	profile,
}: ImageUploadProps) => {
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImagePreview(URL.createObjectURL(file));
			setImageFile(file);
		}
	};

	return (
		<div className="flex items-center gap-6 mb-6">
			<div className="relative shrink-0">
				{imagePreview ? (
					<img
						src={imagePreview}
						alt="Profile"
						className="w-24 h-24 rounded-full object-cover border-2 border-border"
					/>
				) : (
					<div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-2 border-border">
						<ImagePlus size={24} className="text-muted-foreground" />
					</div>
				)}
				<label className="absolute inset-0 flex items-center justify-center rounded-full bg-background/60 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
					<Pencil size={16} />
					<input
						type="file"
						accept="image/*"
						className="hidden"
						onChange={handleImageChange}
					/>
				</label>
			</div>
			<div className="text-sm text-muted-foreground">
				<p className="font-medium text-foreground">{profile?.email}</p>
				<p>Click the preview to change your photo</p>
			</div>
		</div>
	);
};

export default ImageUpload;
