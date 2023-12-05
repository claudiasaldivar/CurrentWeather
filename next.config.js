// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/clima',
          permanent: true,
        },
      ];
    },
    images: {
      domains: ['openweathermap.org', 'static.vecteezy.com'],
    },
  };
  