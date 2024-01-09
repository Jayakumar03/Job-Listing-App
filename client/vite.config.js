import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const config = defineConfig({
 plugins: [react()],
 server: {
   cors: true,
 },
})

export default config