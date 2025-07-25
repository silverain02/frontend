module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "body-max-line-length": [2, "always", 100],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "hotfix", "refactor", "test", "chore", "style"],
    ],
  },
};
