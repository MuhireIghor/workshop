module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{React,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-pattern':"url('./Images/pic.jpg')",
        'second-pattern':"url('https://unsplash.com/photos/nimElTcTNyY')",
        'third-pattern':"url('https://unsplash.com/photos/_3Q3tsJ01nc')",
        'fourth-pattern':"url('https://unsplash.com/photos/dlxLGIy-2VU')"
      }
    },
  },
  plugins: [],
}
