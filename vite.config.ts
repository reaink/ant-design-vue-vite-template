import path from 'path'

import { UserConfig } from 'vite'

const viteConfig: UserConfig = {
  rollupInputOptions: {
    external: ['@popperjs/core'],
  },
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue'],
  },
}
export default viteConfig
