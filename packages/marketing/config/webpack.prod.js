const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].contenthash.js'
    },

    plugins:[
        new ModuleFederationPlugin({
            name: 'marketing',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)