const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 3001,
    },
    plugins: [
        new ModuleFederation({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:3000/remoteEntry.js'
            }
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html'

        }),
    ],
}