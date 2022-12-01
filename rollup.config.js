import { text } from './build/banner.json'
import packageInfo from './package.json'

import vue from 'rollup-plugin-vue'
import node from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

import fs from 'fs'
import path from 'path'

const baseFolderPath = './src/components/'
const banner = text.replace('${version}', packageInfo.version)

const components = fs
  .readdirSync(baseFolderPath)
  .filter((f) =>
    fs.statSync(path.join(baseFolderPath, f)).isDirectory()
  )

const entries = {
  'index': './src/index.js',
  ...components.reduce((obj, name) => {
    obj[name] = (baseFolderPath + name)
    return obj
  }, {})
}

const babelOptions = {
  babelHelpers: 'bundled'
}

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: 'condense'
    }
  }
}

const config = [
  {
    input: entries,
    external: ['vue'],
    output: {
      format: 'esm',
      dir: `dist/esm`,
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name]-[hash].mjs',
    },
    plugins: [
      node({
        extensions: ['.vue', '.js']
      }),
      vue(vuePluginConfig),
      babel(babelOptions),
      cjs()
    ],
  },
  {
    input: 'src/index.js',
    external: ['vue'],
    output: {
      format: 'esm',
      file: 'dist/vc-library.mjs',
      banner: banner
    },
    plugins: [
      node({
        extensions: ['.vue', '.js']
      }),
      vue(vuePluginConfig),
      babel(babelOptions),
      cjs()
    ]
  }
]

config.filter((c) => !!c.output.file).forEach((c) => {
  c.output.file = c.output.file.replace(/.m?js/g, r => `.min${r}`)
  c.plugins.push(terser({
    output: {
      comments: '/^!/'
    }
  }))
})

export default config
