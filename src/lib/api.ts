import axios from 'axios';
import type { AuthResponse, Image, Post, Profile, Skill } from './types';

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
	headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});

api.interceptors.response.use(
	res => res,
	err => {
		if (err.response?.status === 401) {
			localStorage.removeItem('token');
		}
		return Promise.reject(err);
	},
);

export const authApi = {
	login: (email: string, password: string) =>
		api.post<AuthResponse>('/auth/login', { email, password }),
};

export const postsApi = {
	list: () => api.get<Post[]>('/posts'),

	get: (id: number) => api.get<Post>(`/posts/${id}`),

	create: (data: { title: string; type: string; image_id?: number }) =>
		api.post<Post>('/posts', data),

	update: (
		id: number,
		data: { title?: string; type?: string; image_id?: number },
	) => api.put<Post>(`/posts/${id}`, data),

	delete: (id: number) => api.delete(`/posts/${id}`),
};

export const imageApi = {
	get: (imageId: number) => api.get<Image>(`/images/images/${imageId}`),

	upload: (postId: number, file: File) => {
		const form = new FormData();
		form.append('image', file);
		return api.post<Image>(`images/posts/${postId}/image`, form, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	},

	delete: (postId: number) => api.delete(`/posts/${postId}/image`),
};

export const profileApi = {
	get: () => api.get<Profile>('/profile'),

	update: (data: {
		bio?: string;
		job_title?: string;
		job?: string;
		description?: string;
	}) => api.put<Profile>('/profile', data),

	uploadImage: (file: File) => {
		const form = new FormData();
		form.append('image', file);
		return api.post<Image>('/profile/image', form, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	},
};

export const skillsApi = {
	list: () => api.get<Skill[]>('/profile/skills'),

	create: (data: { name: string; percent: number }) =>
		api.post<Skill>('/profile/skills', data),

	update: (id: number, data: { name?: string; percent?: number }) =>
		api.put<Skill>(`/profile/skills/${id}`, data),

	delete: (id: number) => api.delete(`/profile/skills/${id}`),
};
