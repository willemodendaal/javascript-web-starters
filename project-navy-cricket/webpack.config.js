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
                    options: {minimize: true}
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
        compress: true,
        port: 9003
    },
    plugins: [
        //Handles index.html for us. Auto-loads entrypoint js and css links into the page.
        //  Also appends hashes for 'cache busting'.
        new HtmlWebPackPlugin({
            //The .ejs extension is an "embeddable javascript template", allows us to 
            //  specify template parameters in the index.html file.
            template: "./src/index.ejs",
            filename: "./index.html",

            //Properties included as <%= template parameters %> in index.html.
            templateParameters: {
                title: "Javascript Starter Sample",
                myPageHeader: "Welcome to Project-Navy-Cricket",
            },

            //hash:true Ensures script references get a hash in the filename,
            //  so that users always get new un-cached versions of resources
            //  after deployments. No need to tell users to Ctrl+F5!
            hash: true
        })
    ]
};