/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      spacing: {
        "3xs": "clamp(0.25rem, 0.2283rem + 0.1087vi, 0.3125rem)", //4px 5px
        "2xs": "clamp(0.5rem, 0.4565rem + 0.2174vi, 0.625rem)", // 8px 10px
        xs: "clamp(0.75rem, 0.6848rem + 0.3261vi, 0.9375rem)", //12px 15px
        s: "clamp(1rem, 0.913rem + 0.4348vi, 1.25rem)", // 16px 20px
        m: "clamp(1.5rem, 1.3696rem + 0.6522vi, 1.875rem)", // 24px 30px
        l: "clamp(2rem, 1.8261rem + 0.8696vi, 2.5rem)", // 32px 40px
        xl: "clamp(3rem, 2.7391rem + 1.3043vi, 3.75rem)", // 48px 60px
        "2xl": "clamp(4rem, 3.6522rem + 1.7391vi, 5rem)", // 64px 80px
        "3xl": "clamp(6rem, 5.4783rem + 2.6087vi, 7.5rem)", // 96px 120px
        "3xs-2xs": "clamp(0.25rem, 0.1196rem + 0.6522vi, 0.625rem)",
        "2xs-xs": "clamp(0.5rem, 0.3478rem + 0.7609vi, 0.9375rem)",
        "xs-s": "clamp(0.75rem, 0.5761rem + 0.8696vi, 1.25rem)",
        "s-m": "clamp(1rem, 0.6957rem + 1.5217vi, 1.875rem)",
        "m-l": "clamp(1.5rem, 1.1522rem + 1.7391vi, 2.5rem)",
        "l-xl": "clamp(2rem, 1.3913rem + 3.0435vi, 3.75rem)",
        "xl-2xl": "clamp(3rem, 2.3043rem + 3.4783vi, 5rem)",
        "2xl-3xl": "clamp(4rem, 2.7826rem + 6.087vi, 7.5rem)",
      },
      fontSize: {
        "u-xs": "clamp(0.5628rem, 0.4803rem + 0.4126vi, 0.8rem)", //9.00px	12.80px
        "u-base": "clamp(0.7502rem, 0.6633rem + 0.4345vi, 1rem)", // 12.00px	16.00px
        "u-sm": "clamp(1rem, 0.913rem + 0.4348vi, 1.25rem)", // 16.00px	20.00px
        "u-m": "clamp(1.333rem, 1.2532rem + 0.3991vi, 1.5625rem)", // 21.33px	25.00px
        "u-lg": "clamp(1.7769rem, 1.7156rem + 0.3065vi, 1.9531rem)", // 28.43px	31.25px
        "u-xl": "clamp(2.3686rem, 2.3433rem + 0.1266vi, 2.4414rem)", // 37.90px	39.06px
        "u-2xl": "clamp(3.0518rem, 3.1941rem + -0.1836vi, 3.1573rem)", // 50.52px	48.83px
        "u-3xl": "clamp(3.8147rem, 4.3458rem + -0.6853vi, 4.2087rem)", // 67.34px	61.04px
        "u-4xl": "clamp(4.7684rem, 5.9031rem + -1.4641vi, 5.6102rem)", // 89.76px	76.29px
      },
    },
  },
  plugins: [],
};
