import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Subresource Integrity 플러그인.
 * 빌드 결과물의 self-hosted JS/CSS 에 sha256 integrity 속성을 자동 주입한다.
 * FTP 호스트가 변조될 경우 브라우저가 실행을 거부하도록 만든다.
 */
function sri(): Plugin {
  return {
    name: "sri-injector",
    apply: "build",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const bundle = ctx.bundle;
        if (!bundle) return html;

        const integrityMap = new Map<string, string>();
        for (const [fileName, chunk] of Object.entries(bundle)) {
          const content = chunk.type === "asset" ? chunk.source : chunk.code;
          const buf =
            typeof content === "string" ? Buffer.from(content) : Buffer.from(content);
          const hash = createHash("sha256").update(buf).digest("base64");
          integrityMap.set(`/${fileName}`, `sha256-${hash}`);
        }

        // <script ... src="/assets/...">  /  <link ... href="/assets/...">
        return html.replace(
          /(<(?:script|link)\b[^>]*?)\s(src|href)="(\/[^"]+)"([^>]*?>)/g,
          (match, before, attr, url, after) => {
            const integrity = integrityMap.get(url);
            if (!integrity) return match;
            if (/\sintegrity=/.test(match)) return match;
            return `${before} ${attr}="${url}" integrity="${integrity}"${after}`;
          },
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sri()],
  resolve: {
    alias: [
      {
        find: /^@\/lib\/utils$/,
        replacement: path.resolve(__dirname, "./design-system/src/lib/utils.ts"),
      },
      {
        find: "@skill-ds",
        replacement: path.resolve(__dirname, "./design-system/src"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 5173,
  },
  esbuild: {
    // 프로덕션 번들에서 console.* / debugger 제거
    drop: ["console", "debugger"],
    // 라이선스 주석 등 legalComment 만 유지
    legalComments: "none",
  },
  build: {
    // 소스맵 비공개 — FTP 에 .map 이 함께 올라가지 않도록 보장
    sourcemap: false,
    // hash 가 포함된 파일명 (Vite 기본). 변조 시 SRI 와 함께 캐시 무효화도 안전.
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
