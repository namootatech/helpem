/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.js',
    './src/components/**/*.js',
    './src/app/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    {pattern: /bg-./},
    {pattern: /text-./},
    {pattern: /border-./},
    'bg-orange-700',
    'bg-orange-800',
    "py-3",
    "mt-2",
    "md:text-orange-700",
    "md:text-red-700",
    "bg-red-700",
    "bg-[url('/images/helpem/home-page-header.jpg')]",
    "bg-[url('/images/helpem/mission.jpg')]",
    "bg-[url('/images/helpem/getinvolved.jpg')]",
    "bg-[url('/images/fot/home-page-header.jpg')]",
    "bg-[url('/images/fot/mission.jpg')]",
    "bg-[url('/images/fot/getinvolved.jpg')]",
    "bg-[url('/images/go-bananas/home-page-header.jpg')]",
    "bg-[url('/images/go-bananas/mission.jpg')]",
    "bg-[url('/images/go-bananas/getinvolved.jpg')]",
    "bg-[url('/images/go-bananas/banana-services.jpg')]",
  ]
}
