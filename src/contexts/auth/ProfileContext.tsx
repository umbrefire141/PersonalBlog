import { api } from '@/lib/api';
import type { User } from '@/lib/types';
import { createContext, type ReactNode, useContext, useState } from 'react';

interface ProfileContextType {
	profile: User | null;
	updateProfile: (profile: User) => void;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
	const [profile, setProfile] = useState<User | null>(() => {
		const stored = api.get('profile') as unknown as User | null;
		return stored || null;
	});

	const updateProfile = (newProfile: User) => {
		localStorage.setItem('profile', JSON.stringify(newProfile));
		setProfile(newProfile);
	};

	return (
		<ProfileContext.Provider value={{ profile, updateProfile }}>
			{children}
		</ProfileContext.Provider>
	);
}

export function useProfile() {
	const ctx = useContext(ProfileContext);
	if (!ctx) throw new Error('useProfile must be used within ProfileProvider');
	return ctx;
}
