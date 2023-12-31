import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
type ViteConfigInput = {
  mode: string;
  command: string;
};
export default ({ mode }: ViteConfigInput) => {
  const generateScopedName = mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]';

  return defineConfig({
    // --------------- Build configuration
    build: {
      outDir: 'build',
      rollupOptions: {
        cache: false,
      },
    },
    // --------------- Ports configuration
    server: {
      port: 8711,
    },
    preview: {
      port: 3000,
    },
    resolve: {
      alias: [{ find: /^~/, replacement: '' }],
    },

    // --------------- Plugins
    plugins: [react(), tsconfigPaths()],

    // --------------- Css configuration
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      },
    },
  });
};
