/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        swap: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#00C0FF",
          200: "#00FFFF"
        },
        "white": "#FFFFFF",
        "blue": "#1935CA",
        "black": "#000000",
        "darkGray": "#4A4A4A",
        "backgroundGradient": "background: linear-gradient(179.96deg, rgba(255, 255, 255, 0.5) 83.31%, rgba(87, 177, 255, 0) 213.34%)",
        "red": "#FF0000",
      },
      fontSize: {
        "20": "20px",
        "18": "18px",
        "24": "24px"
      },
      borderRadius: {
        "10": "10px",
        "20": "20px",
        "45": "45px",
      },
      fontWeight: {
        "500": "500px"
      },
      lineHeight: {
        "16": "16px",
        "30": "30px",
        "36": "36px"
      }
    },
  },
  plugins: [],
};
