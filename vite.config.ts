import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Eastar-s-website/', // 极其重要：这对应你的 GitHub 仓库名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保生成 sourcemap 方便调试（可选）
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true
  }
})
