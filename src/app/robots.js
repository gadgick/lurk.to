export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://lurk.to/sitemap.xml',
    }
  }