import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    host: "0.0.0.0", // 允许外部访问
    cors: true, // 允许跨域
    strictPort: true, // 强制使用指定端口
    port: 5174, // 确保端口正确
    hmr: {
      clientPort: 5174, // 确保 HMR 端口正确
    },
  },
});
