export default {
  head: {
    title: 'File URLS'
  },
  srcDir: 'src/',
  loading: { color: '#000000' },
  buildModules: [
    '@nuxt/components' 
  ],
  components: true,
  plugins: [
    '~/plugins/encryption.js',
    '~/plugins/tinyurl.js',
  ]
}