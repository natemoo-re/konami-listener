import { Config } from '@stencil/core';

export const config: Config = {
  namespace: "konami-listener",
  taskQueue: "async",
  outputTargets: [
    { type: "dist", esmLoaderPath: "../loader" },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
  copy: [{ src: "main.css" }],
};
