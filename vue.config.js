// const path = require('path');
 
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }


// module.exports = {
//     productionSourceMap: false,
//     publicPath: './',    
//     // 输出文件目录
//     outputDir: 'dist',
//     // 静态资源目录
//     assetsDir: 'static',
//     devServer: {
//       //host:'0.0.0.0',
//       // 端口号
//       //port: 8080,
//       // 启用 https
//       //https: false,
//       // 自动打开浏览器
//       open: true,
//       // 代理配置
//       proxy: {
//         '/client': {
//           target: 'http://localhost:8080',
//           ws: true,
//           changeOrigin: true,
//           //pathRewrite: { '^/': '' },
//           timeout: 1000 * 5,
//         },
//       },
//     },
//   };