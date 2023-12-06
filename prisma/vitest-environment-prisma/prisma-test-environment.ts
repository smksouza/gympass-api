import { randomUUID } from 'node:crypto'
import { Environment } from 'vitest'

// "postgresql://docker:docker@localhost:5432/apisolid?schema=public"

function generateDatabaseURL(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL ENVIRONMENT VARIABLE.')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',

  async setup() {
    const schema = randomUUID()
    console.log(generateDatabaseURL(schema))
    return {
      teardown() {
        console.log('Teardown')
      },
    }
  },
}
