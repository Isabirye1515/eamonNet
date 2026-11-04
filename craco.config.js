module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const cssMinimizer = webpackConfig.optimization.minimizer.find(
        (plugin) => plugin.constructor.name === 'CssMinimizerPlugin'
      );

      if (!cssMinimizer) {
        throw new Error('CssMinimizerPlugin was not found in the webpack config');
      }

      const minimizerOptions = cssMinimizer.options.minimizer.options;
      const preset = minimizerOptions.preset;
      const presetName = Array.isArray(preset) ? preset[0] : preset || 'default';
      const presetOptions =
        Array.isArray(preset) && typeof preset[1] === 'object' ? preset[1] : {};

      minimizerOptions.preset = [
        presetName,
        { ...presetOptions, svgo: false },
      ];

      return webpackConfig;
    },
  },
};