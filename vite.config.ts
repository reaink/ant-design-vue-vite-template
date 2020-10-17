import path from 'path'

import { ServerConfig } from 'vite'

const viteConfig: ServerConfig = {
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  }
}
export default viteConfig