import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: 'https://rolling-scopes-school.github.io/devenrgy-REACT2024Q3/',
});
