import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'konami-listener',
  outputTargets: [
    { type: 'dist' },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  copy: [
    { src: 'main.css' }
  ]
};