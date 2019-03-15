let webpack = require("webpack"),
path = require("path"),
DIST_DIR = path.resolve(__dirname,"dist"),
SRC_DIR = path.resolve(__dirname,"src");


let webpackConfig = {
    //entry point
    entry: SRC_DIR+"/app/index.js",
    //out put
    output:{
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath:"/app/"
    },    
    //loaders
    //presets
    //module configurations
    module:{
        rules:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                //react-loader. react-loader provides your React.js component a simple mechanism for rendering a 
                //loading spinner (via spin.js) while data is loading, such as an asynchronous request to load data for a view
                loader: "babel-loader", 
                //The enforce property affects the loader category. Whether it's a normal, pre- or post- loader.                            
                enforce: 'pre',
                //In Babel, a preset is a set of plugins used to support particular language features. The two presets Babel 
                //uses by default:
                //es2015: Adds support for ES2015 (or ES6) JavaScript
                //react: Adds support for JSX   
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
}

module.exports = webpackConfig;