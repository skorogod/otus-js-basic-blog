// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const pages = ['index', 'gallery', 'Yakutiya', 'Arkhangelsk', 'Zabaikal', 'Crimea', 'contact']

const config = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
      }, {}),

    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        open: true,
        host: 'localhost',
        port: 8000,
        
    },

    plugins: [].concat(
        pages.map(
        (page) =>
            new HtmlWebpackPlugin({
            inject: true,
            template: `./src/templates/${page}.html`,
            filename: `${page}.html`,
            chunks: [page],
            })
        ),
        // <- here goes array(s) of other plugins
    ),
       

    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
        

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                    ]
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator:  {
                    filename: 'images/[name]-[contenthash][ext]',
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/resource',
                generator:  {
                    filename: 'fonts/[name]-[hash][ext]',
                }
            },
            {
                test: /\.svg?/,
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[name]=[contenthash:5][ext]'
                }
            },
        ]
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
