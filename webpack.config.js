module.exports = {
    mode: "development",
    entry: __dirname /*"C:/Users/tatos/Desktop/programacion/luciapp"*/ + "/frontend-src",
    output: {
        path: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
}