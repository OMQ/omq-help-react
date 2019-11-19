const presets = [
  [
    '@babel/env',
    {
      targets: {
        browsers: [
          '>0.25%',
          'not op_mini all',
          'safari >= 7',
        ],
      },
      corejs: "3",
      useBuiltIns: 'entry',
    },
  ],
  '@babel/preset-react',
  '@babel/preset-flow',
];

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = {
  presets,
  plugins,
};
