module.exports = {
    "name":"default",
    "apps":['home'],
    "open": false,
    "defaultPort": 8002,
    "server": "127.0.0.1",
    "imageInLineSize": 8192,
    "publicPath": "/assets/",
    "devServer": {
        "noInfo": true,
        "proxy": undefined
         /*proxy: [{
         context: ['/**', '!/static/**', '!/webpack/**', '!/webpack-dev-server/**', '!/sockjs-node/**', '!/index.html'],
         target: 'http://tstmanage.360kad.com
         ',
         changeOrigin: true
         }]*/
    },
    "postcss": {
        "autoprefixer": {
            /**
             * 参考dora配置
             */
            "browsers": [
                "last 2 versions",
                "Firefox ESR",
                "> 1%",
                "ie >= 8"
            ]
        }
    },
    "webpack": {
        "dllConfig": {
            "vendors": ['react']
        }
    },
    "babel": {
        "query": {
            "presets": [
                "es2015",
                "stage-0",
                "react"
            ],
            "cacheDirectory": true,
             "plugins": [
            "add-module-exports",
            "transform-runtime",
            "transform-decorators-legacy",
        ]
        }
    },
    "htmlWebpackPlugin": {
        "title": "",
        "appMountId": ""/*root*/,
    },
    "entries": ['src/index']//入口文件的文件夹路径
};
/*const path = require('path');
module.exports = function (configs) {
    configs = Object.assign({}, configs, {
        name: 'default',
        open: false,
        defaultPort: 8002,
        devServer: Object.assign({},
            configs.devServer,
            {
                proxy:undefined

            }),
        apps: ['home'],

    });
    return configs;
};*/
