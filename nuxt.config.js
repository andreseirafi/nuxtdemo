export default {
    
    // mode -> "universal" or "spa"
    mode: 'universal',
    
    // target -> "server" or "static"
    target: 'static',
    
    // router options
    router: {
        // base-url (when final nuxt-app is not in root of web-server)
        base: '/dist/',
        // middleware
        middleware: ['user-agent']
    },
    
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
    css: [],

    // Plugins to load before mounting the App
    plugins: ['~/plugins/fg_global_mixin', '~/plugins/lodash_mixin'],
    
    // Nuxt.js dev-modules
    buildModules: [],
    
    // Nuxt.js modules
    modules: [
        '@nuxtjs/axios'
    ],

    // custom routes (for static file generation)
    generate: {
        routes: [
            '/stops/1',
            '/stops/3'
        ]
    },


    // Build configuration
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },

    // Axios config
    axios: {
        // extra config e.g
        // BaseURL: 'https://link-to-API'
      }
}