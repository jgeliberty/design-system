import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

import scss from 'rollup-plugin-scss';

const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      alias({
        entries: [
          {
            find: '~atoms',
            replacement: path.resolve(__dirname, 'src/components/atoms'),
          },
          {
            find: '~assets',
            replacement: path.resolve(__dirname, 'src/assets'),
          },
        ],
      }),
      scss({
        processor: () => postcss([autoprefixer()]),
        includePaths: [path.join(__dirname, '../../node_modules/'), 'node_modules/'],
        outputStyle: 'compressed',
      }),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [
      dts.default(),
      scss({
        processor: () => postcss([autoprefixer()]),
        includePaths: [path.join(__dirname, '../../node_modules/'), 'node_modules/'],
        outputStyle: 'compressed',
      }),
    ],
  },
];
