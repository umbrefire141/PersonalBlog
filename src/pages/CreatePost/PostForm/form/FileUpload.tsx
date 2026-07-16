import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { ImagePlus } from 'lucide-react';
import type { useForm } from 'react-hook-form';
import type { PostFormTypes } from '../PostForm';

interface IFileUploadProps {
	form: ReturnType<typeof useForm<PostFormTypes>>;
	imagePreview: string | null;
	setImagePreview: React.Dispatch<React.SetStateAction<string | null>>;
}

const FileUpload = ({
	form,
	imagePreview,
	setImagePreview,
}: IFileUploadProps) => {
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImagePreview(URL.createObjectURL(file));
			form.setValue('image', e.target.files);
		}
	};

	return (
		<FormField
			control={form.control}
			name="image"
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			render={({ field: { value, onChange, ...field } }) => (
				<FormItem>
					<FormLabel>Cover Image</FormLabel>
					<FormControl>
						<div>
							{imagePreview ? (
								<div className="relative rounded-md overflow-hidden border border-border mb-3">
									<img
										src={imagePreview}
										alt="Preview"
										className="w-full h-48 object-cover"
									/>
									<button
										type="button"
										onClick={() => {
											setImagePreview(null);
											form.setValue('image', null);
										}}
										className="absolute top-2 right-2 bg-background/80 text-foreground rounded-full px-2 py-0.5 text-xs hover:bg-background transition-colors cursor-pointer"
									>
										Remove
									</button>
								</div>
							) : (
								<label className="flex flex-col items-center justify-center h-32 rounded-md border border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer bg-muted/30">
									<ImagePlus size={24} className="text-muted-foreground mb-2" />
									<span className="text-sm text-muted-foreground">
										Upload cover image
									</span>
									<input
										type="file"
										accept="image/*"
										className="hidden"
										onChange={handleImageChange}
										{...field}
									/>
								</label>
							)}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FileUpload;
