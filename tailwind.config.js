const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./dist/**/*.css"],
  plugins: [require("@tailwindcss/custom-forms")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
