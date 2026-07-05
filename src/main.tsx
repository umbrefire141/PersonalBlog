import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './assets/styles/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Theme>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Theme>
	</StrictMode>,
);
