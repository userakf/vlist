import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './mock/source', // 解析，路径可根据实际变动
      localEnabled: true, // 开发环境
      prodEnabled: false, // 生产环境设为true，也可以根据官方文档格式
      injectCode:
        `
      import { setupProdMockServer } from './mock';
      setupProdMockServer(); 
      `,
      watchFiles: true, // 监听文件内容变更
      injectFile: resolve('src/main.ts') // 在main.ts注册后需要在此处注入，否则可能报找不到setupProdMockServer的错误
    })
  ]
})
