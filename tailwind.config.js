import {Flowbite} from "flowbite-react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'teal': ' #1abc9c',
      },
    },
  },
  plugins: [Flowbite],
};

