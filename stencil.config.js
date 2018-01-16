exports.config = {
  namespace: 'konami-listener',
  generateDistribution: true,
  bundles: [
    { components: ['konami-listener'] }
  ],
  copy: [
    { src: 'main.css' },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
