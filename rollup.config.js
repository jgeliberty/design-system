import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const postcss = require('rollup-plugin-postcss');

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
      postcss(),
      alias({
        entries: [{ find: '~assets', replacement: './src/assets' }],
      }),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [
      dts.default(),
      postcss({
        minimize: true,
      }),
      alias({
        entries: [{ find: '~assets', replacement: './src/assets' }],
      }),
    ],
  },
];
