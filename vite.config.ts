import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import unusedCode from "vite-plugin-unused-code"
import tsconfigPaths from "vite-tsconfig-paths"
import autoprefixer from "autoprefixer"
import path from "path"
//import { createHtmlPlugin } from "vite-plugin-html"

export default ({ mode }: { mode: string }) => {
    // Load environment variables based on the mode
    const env = loadEnv(mode, process.cwd(), "")

    return defineConfig({
        plugins: [
            react(),
            svgr({ svgrOptions: { icon: true, exportType: "default" } }),
            tsconfigPaths(),
            unusedCode({
                patterns: ["src/**/*.*"]
            })
            //analyzer()
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src/assets")
            }
        },
        css: {
            postcss: {
                plugins: [autoprefixer({})]
            },
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        },
        build: {
            copyPublicDir: true,
            sourcemap: ["development", "local"].includes(mode),
            rollupOptions: {
                output: {
                    minifyInternalExports: true,
                    compact: true
                }
            }
        }
    })
}
