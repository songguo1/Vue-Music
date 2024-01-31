module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://iwenwiki.com:3000',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}