const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  // purge: ["./dist/**/*.css"],
  purge: false,
  plugins: [require("@tailwindcss/custom-forms")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
