import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './assets/styles/index.css';
import { AuthProvider } from './contexts/auth/AuthContext';
import { ProfileProvider } from './contexts/auth/ProfileContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Theme>
			<BrowserRouter>
				<AuthProvider>
					<ProfileProvider>
						<App />
					</ProfileProvider>
				</AuthProvider>
			</BrowserRouter>
		</Theme>
	</StrictMode>,
);
