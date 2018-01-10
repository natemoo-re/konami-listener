exports.config = {
  namespace: 'konami-listener',
  generateDistribution: true,
  bundles: [
    { components: ['konami-listener'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
