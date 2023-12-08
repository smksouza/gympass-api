import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [
      // Todos os testes dentro de src/http/controllers/ rodarão no ambiente 'prisma'
      ['src/http/controllers/**', 'prisma'],
    ],
    dir: 'src',
  },
})
