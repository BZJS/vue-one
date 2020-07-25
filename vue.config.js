module.exports = {
    //配置别名
    configureWebpack: {
        resolve: {
            alias: {
                'views': '@/views',
                'components': '@/components',
                'network': '@/network',
                'common': '@/common',
                'assets': '@/assets',
            }
        }
    }
}