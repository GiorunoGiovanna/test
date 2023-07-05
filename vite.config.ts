import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 设置base url防止打包后引入路径出错
  base: 'https://giorunogiovanna.github.io/test/'
})
