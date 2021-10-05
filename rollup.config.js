import css from 'rollup-plugin-css-only';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    serve({
      contentBase: 'dist',
      open: true,
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'dist' }),
    resolve({
      extensions: ['.js', '.ts'],
    }),
    css({ output: 'bundle.css' }),
    typescript({
      module: 'ESNext',
    }),
  ],
};
