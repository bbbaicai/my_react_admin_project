const {override,fixBabelImports,addLessLoader} = require ('customize-cra');

module.exports = override(
    //使用 import + babel-plugin-import 实现 antd 按需打包
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style: true  //自动打包组件相关样式
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#085C6F' }, //less 定义 primary-color为 #085C6F
    }),
);
