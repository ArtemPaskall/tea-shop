/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/uk/main/tea',
        permanent: false,
      },
    ]
  },
}
