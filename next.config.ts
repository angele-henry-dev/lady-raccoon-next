const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizeCss: true, // Optimise les fichiers CSS pour des performances améliorées
  },

  images: {
    formats: ['image/webp'], // Optimise les formats d'image pour des performances accrues
  },

  compress: true, // Active la compression GZIP automatique pour les fichiers statiques

  headers: async () => {
    return [
      {
        source: '/:path*', // Applique ces règles à toutes les routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache agressif pour les ressources statiques
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Protection contre les attaques MIME sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Politique de sécurité pour le referer
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Active HSTS
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Empêche l'inclusion dans des iframes
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Protection contre les attaques XSS
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
