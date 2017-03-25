import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)

export default {
  entry: './src/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    babel(babelrc())
  ],
  external: external,
  globals: {
    recompose: 'recompose',
    react: 'React'
  },
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'reactCommonHocs',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
}