import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

import path from 'path'

const production = !process.env.ROLLUP_WATCH;

const projectRootDir = path.resolve(__dirname);

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      );

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'index.ts',
  output: {
    sourcemap: !production,
    format: 'esm',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ sourceMap: !production }),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    alias({
      entries: [
        {
          find: '@engine/collisions',
          replacement: path.resolve(projectRootDir, 'engine/collisions'),
        },
        {
          find: '@engine/helpers',
          replacement: path.resolve(projectRootDir, 'engine/helpers'),
        },
        {
          find: '@engine/shapes',
          replacement: path.resolve(projectRootDir, 'engine/shapes'),
        },
        {
          find: '@engine/types',
          replacement: path.resolve(projectRootDir, 'engine/types'),
        },
        {
          find: '@ui/components',
          replacement: path.resolve(projectRootDir, 'ui/src/components'),
        },
        {
          find: '@ui/constants',
          replacement: path.resolve(projectRootDir, 'ui/src/constants'),
        },
        {
          find: '@ui/helpers',
          replacement: path.resolve(projectRootDir, 'ui/src/helpers'),
        },
        {
          find: '@ui/pages',
          replacement: path.resolve(projectRootDir, 'ui/src/pages'),
        },
        {
          find: '@ui/types',
          replacement: path.resolve(projectRootDir, 'ui/src/types'),
        },
      ],
      resolve: ['.svelte', '.js', '.ts'],
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
