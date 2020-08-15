const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        library: 'Waziup',
        path: path.resolve(__dirname, 'lib'),
        filename: 'Waziup.js',
        libraryTarget:'var'
    },
	module: {
        rules: [
          {
            test: /.png$/,
            use: 'base64-image-loader'
          },
          {
            test: /.css$/,
            use: 'css-content-loader'
          }
        ]
    }
};
