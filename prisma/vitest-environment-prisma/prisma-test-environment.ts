import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',

  async setup() {
    console.log('CHEGUEI AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII')
    return {
      teardown() {
        console.log('TEARDOWNNNNNNNNNNNNNNNNN')
      },
    }
  },
}
