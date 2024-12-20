export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://www.lurk.to/sitemap.xml',
    }
  }