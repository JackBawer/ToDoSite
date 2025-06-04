import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ToDoSite/", // 👈 This is the key part for GitHub Pages
  plugins: [react()],
});
