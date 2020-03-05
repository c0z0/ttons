const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Geist',
    description: 'A small design library.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/cosminserdean/Projects/geist/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Geist',
        description: 'A small design library.',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/cosminserdean/Projects/geist',
          templates:
            '/Users/cosminserdean/Projects/geist/node_modules/docz-core/dist/templates',
          docz: '/Users/cosminserdean/Projects/geist/.docz',
          cache: '/Users/cosminserdean/Projects/geist/.docz/.cache',
          app: '/Users/cosminserdean/Projects/geist/.docz/app',
          appPackageJson: '/Users/cosminserdean/Projects/geist/package.json',
          gatsbyConfig: '/Users/cosminserdean/Projects/geist/gatsby-config.js',
          gatsbyBrowser:
            '/Users/cosminserdean/Projects/geist/gatsby-browser.js',
          gatsbyNode: '/Users/cosminserdean/Projects/geist/gatsby-node.js',
          gatsbySSR: '/Users/cosminserdean/Projects/geist/gatsby-ssr.js',
          importsJs: '/Users/cosminserdean/Projects/geist/.docz/app/imports.js',
          rootJs: '/Users/cosminserdean/Projects/geist/.docz/app/root.jsx',
          indexJs: '/Users/cosminserdean/Projects/geist/.docz/app/index.jsx',
          indexHtml: '/Users/cosminserdean/Projects/geist/.docz/app/index.html',
          db: '/Users/cosminserdean/Projects/geist/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
