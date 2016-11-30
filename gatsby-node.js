var path = require('path');

exports.modifyWebpackConfig = function(config, stage) {
  config.merge({
    sassLoader: {
      includePaths: [path.resolve(__dirname, './styles')],
    }
  });
  
  return config;
};