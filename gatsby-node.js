const path = require('path');

exports.modifyWebpackConfig = function modifyWebpackConfig(config) {
  config.merge({
    sassLoader: {
      includePaths: [path.resolve(__dirname, 'styles')],
    },
  });

  return config;
};
