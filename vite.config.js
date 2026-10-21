import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Must exactly match the GitHub repository name.
  base: '/Chandrasekar.A_Portfolio/',
})
