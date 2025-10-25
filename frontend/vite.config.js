import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "@/assets/scss/abstracts" as *;
          @use "@/assets/scss/base" as *;
          @use "@/assets/scss/theme" as *;
        `,
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@libs": path.resolve(__dirname, "src/libs"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@context": path.resolve(__dirname, "src/context"),
            "@configs": path.resolve(__dirname, "src/configs"),
            "@redux": path.resolve(__dirname, "src/redux"),
            "@services": path.resolve(__dirname, "src/services"),
        },
    },
});
