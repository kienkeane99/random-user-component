import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.jsx',
      name: 'RandomUserCard',
      fileName: (format) => `random-user-card.${format}.js`,
    },
    rollupOptions: {
      // Nếu muốn bundle cả React vào thì để trống external
      // Ở đây ta bundle luôn để project khác dùng cho tiện
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  }
});