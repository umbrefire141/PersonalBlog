/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/

function figmaAssetResolver() {
	return {
		name: 'figma-asset-resolver',
		resolveId(id) {
			if (id.startsWith('figma:asset/')) {
				const filename = id.replace('figma:asset/', '');
				return path.resolve(__dirname, 'src/assets', filename);
			}
		},
	};
}

export default defineConfig({
	plugins: [react(), tailwindcss(), figmaAssetResolver()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts', // Links setup file created in step 3
	},
	server: {
		host: '127.0.0.1',
		strictPort: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
