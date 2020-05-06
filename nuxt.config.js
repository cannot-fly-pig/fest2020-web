
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
		htmlAttrs: {
			prefix: 'og: http://ogp.me/ns#'
		},
    title: "vivid | 第74回灘校文化祭",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '“vivid” という言葉には、「生き生きとした」という意味があります\n 活動する生徒やご来場になる皆さんなど、全ての人にとって活力のあふれた文化祭になることを願ったテーマです \n また、もうひとつの「鮮やかな」という意味は、文化祭を訪れる全員が織りなす個性的な色が溶け合い、ひとつの鮮やかな文化祭が作られることを象徴しています' },
			{ hid: 'og:site_name', property: 'og:site_name', content: 'vivid | 第74回灘校文化祭' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'og:url', property: 'og:url', content: 'https://fest.neda-sc.jp/2020' },
			{ hid: 'og:title', property: 'og:title', content: 'vivid | 第74回灘校文化祭' },
      { hid: 'og:description', name: 'og:description', content: '“vivid” という言葉には、「生き生きとした」という意味があります\n 活動する生徒やご来場になる皆さんなど、全ての人にとって活力のあふれた文化祭になることを願ったテーマです \n また、もうひとつの「鮮やかな」という意味は、文化祭を訪れる全員が織りなす個性的な色が溶け合い、ひとつの鮮やかな文化祭が作られることを象徴しています' },
			{ hid: 'google-site-verification', name: 'google-site-verification', content: 'HlB1DrFwoD4TJIXIL4TEKOWLIPrHj1szS-U2mW4dcrk' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon-precomposed',
        href: './static/1024x1024.png'
      },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		{ src: "@/plugins/plugin.js", mode: "client" }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
		"@nuxtjs/sitemap"
  ],
	/*
   ** Generate sitemap.xml
	*/
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://fest.nada-sc.jp/2020',
    cacheTime: 1000 * 60 * 15,
    gzip: false,
  }, /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
	server: {
    port: 8000, // デフォルト: 3000
    host: '192.168.1.11' // デフォルト: localhost
  }
}
