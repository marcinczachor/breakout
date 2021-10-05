import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'public/build/bundle.js',
    format: 'esm',
  },
  plugins: [
    serve({
      contentBase: 'public',
      open: false,
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'public' }),
    resolve({
      extensions: ['.js', '.ts'],
    }),
    postcss({ extract: true, minimize: true, plugins: [] }),
    typescript({
      module: 'ESNext',
    }),
  ],
};
