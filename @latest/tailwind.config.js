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
        'fourth':"url('https://unsplash.com/photos/dlxLGIy-2VU')"
      },width:{
        '80%':'80vw'
      },
      height:{
        '50%':'50vh'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
