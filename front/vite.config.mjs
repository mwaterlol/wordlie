import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import i18nextLoader from '@kainstar/vite-plugin-i18next-loader'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    i18nextLoader({ paths: ['./locales'] }),
    ViteYaml(),
    svgr(),
  ],
  publicDir: './public',
})
