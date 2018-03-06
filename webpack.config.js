const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot: true
  },

  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
            	test: /(\.css)$/,
            	use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    },{
                        loader: "postcss-loader"
                    }
                ]
            },
            { 
                test: /\.scss$/, 
                exclude: /node_modules/, 
                loader: 'style-loader!css-loader!sass-loader' 
            },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' } // 限制大小5kb
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}         