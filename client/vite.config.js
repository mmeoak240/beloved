import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 4000,
		// proxy: {
		// 	"/api": "http://localhost:3000",
		// 	changeOrigin: true,
		// 	secure: false,
		// 	rewrite: (path) => path.replace(/^\/api/, ""),
		// },
	},
});
