/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "soft-sky": "linear-gradient(135deg, #E0F7FA, #E3F2FD)",
        "morning-haze": "linear-gradient(135deg, #FFEBEE, #E3F2FD)",
        "sunny-glow": "linear-gradient(135deg, #FFFDE7, #FFF3E0)",
        "cloudy-day": "linear-gradient(135deg, #ECEFF1, #CFD8DC)",
        "gentle-breeze": "linear-gradient(135deg, #E3F2FD, #E8F5E9)",
        "twilight-glow": "linear-gradient(135deg, #FFECB3, #FFCDD2)",
        "mist-and-sky": "linear-gradient(135deg, #E1F5FE, #EDE7F6)",
        "clear-horizon": "linear-gradient(135deg, #B3E5FC, #FFEBEE)",
        "light-blue": "#E3F4FE",
      },
      colors: {
        "bg-blue": "#E8EAF6",
        "card-blue": "#EFF1F9",
        "main-bg": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
