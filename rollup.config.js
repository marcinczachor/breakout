import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts'],
    }),
    typescript({
      module: 'ESNext',
    }),
  ],
};
