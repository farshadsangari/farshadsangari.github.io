import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      // Use src/server.ts (SSR error wrapper) instead of the default entry.
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
    nitro(),
  ],
});
