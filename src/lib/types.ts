export interface User {
	id: number;
	email: string;
	created_at: string;
}

export interface Image {
	id: number;
	file_name: string;
	file_data: string;
}

export interface PostWithImage extends Post {
	image_url?: string;
}

export interface Post {
	id: number;
	user_id: number;
	image_id: number;
	title: string;
	type: string;
	created_at: string;
}

export interface Skill {
	id: number;
	user_id: number;
	name: string;
	percent: number;
	date: string;
}

export interface Profile {
	id: number;
	email: string;
	image_id: number;
	bio: string;
	job_title: string;
	job: string;
	description: string;
	created_at: string;
	skills?: Skill[];
}

export interface AuthResponse {
	token: string;
	user: User;
}

export interface ApiError {
	error: string;
}
