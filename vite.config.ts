import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

function skipSpaceFilenames(): Plugin {
  return {
    name: 'skip-space-filenames',
    enforce: 'post',
    generateBundle() {
      // no-op; handled in closeBundle
    },
    closeBundle() {
      const distPublic = path.resolve(__dirname, 'dist');
      const removeSpaceFiles = (dir: string) => {
        if (!fs.existsSync(dir)) return;
        for (const file of fs.readdirSync(dir)) {
          const full = path.join(dir, file);
          if (file.includes(' ') && fs.statSync(full).isFile()) {
            try { fs.unlinkSync(full); } catch { /* ignore */ }
          }
        }
      };
      removeSpaceFiles(distPublic);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), skipSpaceFilenames()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
