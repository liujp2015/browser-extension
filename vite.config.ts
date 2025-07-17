import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // 关键修改：输入键名不带扩展名
        popup: resolve(__dirname, "src/popup/index.html"), // 不是 popup.html
        background: resolve(__dirname, "src/background.ts"), // 不是 background.js
        content: resolve(__dirname, "src/content/content.ts"),
      },
      output: {
        // 确保输出文件名正确
        entryFileNames: "[name].js", // 生成 popup.js 和 background.js
        assetFileNames: "assets/[name][extname]", // 静态资源
        chunkFileNames: "chunks/[name].[hash].js", // 代码分割
      },
    },
  },
});
