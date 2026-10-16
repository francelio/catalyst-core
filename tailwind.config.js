/** @type {import('tailwindcss').Config} */
// Catalyst Core — dark técnico: grafite frio, um azul-aço de marca, verde só para "aprovado".
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0C0E11', 800: '#12151A', 700: '#181C22', 600: '#20252D' },
        line: '#252A32',
        fg: '#ECEEF1',
        muted: '#8A909A',
        steel: { DEFAULT: '#8EB4E3', deep: '#4C78AE' },
        ok: '#5BC79A',
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.035em' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 45s linear infinite' },
    },
  },
  plugins: [],
}
