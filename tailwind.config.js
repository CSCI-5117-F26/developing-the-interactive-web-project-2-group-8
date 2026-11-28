/** @type {import('tailwindcss').Config} */

// const postcsseach = require( 'postcss-each' );

module.exports = {
  jit: true,
  purge: [ "./src/**/*.html", "./src/**/*.{svelte, ts}" ],
  content: [],
  theme: {
    extend: {},
  },
  variant: {
    extend: {}
  }
  plugins: [

  ],
};