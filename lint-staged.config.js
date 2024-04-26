// Disable automatic lint fixing by setting environment var ESRI_NO_AUTOFIX_LINT_ERRORS.
//
// Example:
// ESRI_NO_AUTOFIX_LINT_ERRORS=1 git commit -m <message>

const autoFix = !process.env.ESRI_NO_AUTOFIX_LINT_ERRORS;

module.exports = {
  "*.{ts,tsx}": [`eslint ${autoFix ? "--fix" : ""}`],
  "*.{ts,tsx,css,scss,js,md,mdx,json,yml,yaml,json,html}": [`prettier ${autoFix ? "--write" : "--check"}`],
};
