import json from '@rollup/plugin-json';
import { version } from './package.json';
import typescript from '@rollup/plugin-typescript';
// import babel from 'rollup-plugin-babel';

const outputOption = {
  file: './dist/bundle.js',
  format: 'umd',
  name: 'drawChart',
  // globals: {
  //   Snap: 'Window.Snap',
  // },
  banner: '/* draw chart version ' + version + ' */',
  footer: '/* author： snail，email：btshjhewei@126.com  */',
};

export default {
  input: 'src/index.ts',
  output: outputOption,
  // external: ['Snap'],
  plugins: [
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      include: ['*.ts'],
    }),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
};
