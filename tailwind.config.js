/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom': 'radial-gradient(46.02% 48.08% at 49.93% 46.48%, #0D3748 0%, #002 100%);',
        'glass': 'linear-gradient(90deg, rgba(120, 134, 139, 0.50) 0%, rgba(13, 55, 72, 0.50) 100%);',
        'menu': 'linear-gradient(90deg, #002 0%, #0D3748 100%);',
        'transparent': 'linear-gradient(90deg, rgba(120, 134, 139, 0) 0%, rgba(13, 55, 72, 0) 100%);',
        'footer': 'linear-gradient(43deg, #0D3748 5.34%, #002 54.58%)',
        'form': 'linear-gradient(90deg, rgba(120, 134, 139, 1) 0%, rgba(13, 55, 72, 0.90) 100%)',
      }),
      boxShadow: {
        'btn': '0px 0px 15px 1px rgba(75, 89, 106, 1)',
      },
    },
  },
  plugins: [],
};
