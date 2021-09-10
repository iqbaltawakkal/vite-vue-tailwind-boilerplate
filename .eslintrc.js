module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "prettier", "@vue/prettier"],
  plugins: ["vue"],
  rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
};
