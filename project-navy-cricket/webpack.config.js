const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /\.scss/,
                use: [
                    //Creates style nodes from js imports.
                    "style-loader", 
                    //Translates CSS into CommonJS.
                    "css-loader",
                    //Compiles Sass to CSS.
                    "sass-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress:true,
        port:9003
    },
    plugins: [
        //Handles index.html for us. Auto-loads entrypoint js.
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};