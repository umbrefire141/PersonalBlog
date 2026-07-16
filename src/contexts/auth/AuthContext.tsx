import { createContext, useContext, useState, type ReactNode } from 'react';
import { authApi } from '@/lib/api';
import type { User } from '@/lib/types';

interface AuthContextProps {
	user: User | null;
	isAuthenticated: boolean;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(() => {
		const stored = localStorage.getItem('user');
		return stored ? JSON.parse(stored) : null;
	});

	const signIn = async (email: string, password: string) => {
		const { data } = await authApi.login(email, password);
		localStorage.setItem('token', data.token);
		localStorage.setItem('user', JSON.stringify(data.user));
		setUser(data.user);
	};

	const signOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, isAuthenticated: !!user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
}
