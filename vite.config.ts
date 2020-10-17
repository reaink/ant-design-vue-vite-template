import path from 'path'

import { BuildConfig } from 'vite'

const viteConfig: BuildConfig = {
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  }
}
export default viteConfig