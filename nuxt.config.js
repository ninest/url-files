export default {
  head: {
    title: 'File URLS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Files as URLs' }
    ],
  },
  srcDir: 'src/',
  loading: { color: '#000000' },
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/components' 
  ],
  components: true,
  plugins: [
    '~/plugins/encryption.js',
    '~/plugins/tinyurl.js',
  ],
  styleResources: {
    scss: [
      'assets/styles/screen.scss',
    ]
  },
}