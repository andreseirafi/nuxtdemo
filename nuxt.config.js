import webpack from 'webpack'


export default {
    
    // mode -> "universal" or "spa"
    mode: 'universal',
    
    // target -> "server" or "static"
    target: 'server',
    
    // router options
    router: {
        // base-url (when final nuxt-app is not in root of web-server)
        base: '/dist/',
        // middleware
        middleware: ['user-agent']
    },
    
    // auto-load all existing components
    components: true,

    // page-headers
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // progress-bar-color
    loading: { color: '#fff' },
    
    // global CSS
    css: [
        '~/assets/styles/reset.css',
        '~/assets/styles/global_styles.less'
    ],

    // Plugins to load before mounting the App
    plugins: [
        '~/plugins/fg_init'
    ],
    
    // Nuxt.js dev-modules
    buildModules: [],
    
    // Nuxt.js modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/svg'
    ],

    // custom routes (for static file generation)
    generate: {
        routes: [
            '/stops/1',
            '/stops/3'
        ]
    },


    // Build configuration (webpack extensions)
    build: {
        // public path (Default: '/_nuxt/')
        publicPath: '/nuxt/',
        // extend webpack here
        extend(config, ctx) {},
        // webpack plugins
        plugins: [
            new webpack.ProvidePlugin({
              // global modules
              '_': 'lodash'
            })
          ]
    },

    // Axios config
    axios: {
        // extra config e.g
        // BaseURL: 'https://link-to-API'
      }
}