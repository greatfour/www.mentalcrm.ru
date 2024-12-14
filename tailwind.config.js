module.exports = {
  content: [
    './*.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
  ],
  safelist: [
    'bg-blue-500', 'text-white', // Add any classes that are being purged incorrectly
  ],
  theme: {
    extend: {
      colors: {
        grayishBlue: 'hsl(201, 11%, 66%)', // Customize as needed
        lightGrayishBlue: '#F0F4FA', // Example for the light section
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        primaryAccent: '#0a2540',
      },
    },
  },
};
