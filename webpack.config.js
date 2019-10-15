module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
            }
        ]
    }
};