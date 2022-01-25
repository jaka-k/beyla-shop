module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com', 'www.whitmorerarebooks.com', 'dummyimage.com', 'drive.google.com', 'i.pravatar.cc'],
  },
  async rewrites() {
   return [{
    source: '/api/:slug*',
    destination: 'https://beyla-server.herokuapp.com/api/:slug*'
  }]
  }
}
