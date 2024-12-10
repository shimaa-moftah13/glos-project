import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
        resolve: {
          alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@validations": path.resolve(__dirname, "./src/validations"),
          },
        },
        build: {
          minify: "terser",
          terserOptions: {
            compress: {
              drop_console: true, 
            },
          },
          rollupOptions: {
            output: {
              manualChunks: {
                // مثال: تقسيم الكود بناءً على المكتبات أو المكونات
                vendor: ['react', 'react-dom'],
              },
            },
          },
          chunkSizeWarningLimit: 1000, // زيادة الحد إلى 1MB
        },
        plugins: [react(), svgr()],
      });
