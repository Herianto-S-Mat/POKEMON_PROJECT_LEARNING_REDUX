import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import fs from 'node:fs';

// const key = fs.readFileSync('server.key', 'utf8');
// const cert = fs.readFileSync('server.crt', 'utf8');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: 'project',
    // https: {
    //   key,
    //   cert
    // },
    host: '0.0.0.0'
  },
  // build: {
  //   minify: false
  // }
})
