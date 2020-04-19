const path = require('path');
module.exports = {
    entry: "./assets/js/Index-dist.js",
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
}