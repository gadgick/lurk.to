export default function sitemap() {
    return [
      {
        url: 'https://www.lurk.to',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.lurk.to/pricing',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://www.lurk.to/terms-of-service',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      },
      {
        url: 'https://www.lurk.to/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.4,
      },
    ]
  }