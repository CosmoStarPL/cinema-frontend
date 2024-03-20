const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        mode: env.mode ?? "development",
        entry: './src/app/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name][contenthash].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }

            ],
        },
        plugins: [new HtmlWebpackPlugin({template: "./public/index.html"})],
        devServer: {
            client: {
                logging: 'none'
            },
        },
        watch: true
    }
};
