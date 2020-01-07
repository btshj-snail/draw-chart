import json from '@rollup/plugin-json';
import { version } from './package';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: 'drawChart',
  },
  banner: '/* draw chart version ' + version + ' */',
  footer: '/* author： snail，email：btshjhewei@126.com  */',
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({
      lib: ['es5', 'es6', 'dom'],
      target: 'es5',
      include: ['*.ts'],
    }),
  ],
};
