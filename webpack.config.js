const path = require('path');
module.exports = {
    entry: "./assets/js/Index-dist.js",
    
    devServer: {
        compress: true,
        hot: true,
        port: 3123,
        historyApiFallback: true,
      	publicPath: '/',
    },
}