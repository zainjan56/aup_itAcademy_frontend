import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import plugRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig ({
    plugin: [react(), plugRewriteAll()]
})