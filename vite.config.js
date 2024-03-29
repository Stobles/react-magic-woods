import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
import autoprefixer from 'autoprefixer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
      '@comp': path.resolve(dirname, 'src/components'),
      '@hooks': path.resolve(dirname, 'src/hooks'),
      '@pages': path.resolve(dirname, 'src/pages'),
      '@routes': path.resolve(dirname, 'src/routes'),
      '@assets': path.resolve(dirname, 'src/assets'),
      '@styles': path.resolve(dirname, 'src/assets/styles'),
      '@thunks': path.resolve(dirname, 'src/redux/thunks'),
      '@services': path.resolve(dirname, 'src/services'),
      '@configs': path.resolve(dirname, 'src/configs'),
    },
  },
  server: {
    host: true,
    port: 3006,
  },
  plugins: [react()],
});
